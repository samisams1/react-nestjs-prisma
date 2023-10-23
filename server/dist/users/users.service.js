"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const memcached_service_1 = require("../memcached/memcached.service");
const fs_1 = require("fs");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(memcachedService) {
        this.tokenMap = new Map();
        this.prisma = new client_1.PrismaClient();
        this.memcachedService = memcachedService;
    }
    async users() {
        const users = await this.prisma.user.findMany();
        return users;
    }
    async user(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user;
    }
    async create(input) {
        try {
            const { username, email, password, firstName, lastName, role } = input;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    username,
                    email,
                    password: hashedPassword,
                    phoneNumber: "+251973316377",
                    address: "Addis Ababa",
                    role: role
                },
            });
            return user;
        }
        catch (error) {
            throw error.message;
        }
    }
    async update(id, updateStoreDto) {
        const { firstName, lastName, username, email, role, status } = updateStoreDto;
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                firstName,
                lastName,
                username,
                email,
                role,
                status
            },
        });
    }
    async delete(id) {
        return this.prisma.user.delete({ where: { id } });
    }
    async changePassword(userId, changePasswordInput) {
        const { currentPassword, newPassword } = changePasswordInput;
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        if (user && await bcrypt.compare(currentPassword, user.password)) {
            return this.prisma.user.update({
                where: { id: userId },
                data: { password: hashedPassword },
            });
        }
        throw new Error('Invalid current password');
    }
    async forgotPassword(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }
        const token = this.generateRandomToken();
        this.tokenMap.set(email, token);
        this.sendPasswordResetEmail(user.email, token);
        return true;
    }
    generateRandomToken(length = 16) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
        return token;
    }
    sendPasswordResetEmail(email, token) {
        console.log(`Sending password reset email to ${email}`);
        console.log(`Token: ${token}`);
    }
    async changePRofilePic(id, updateStoreDto) {
        const { firstName, lastName } = updateStoreDto;
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                firstName,
                lastName,
            },
        });
    }
    async totalUsers() {
        const users = async () => {
            try {
                const count = await this.prisma.user.count();
                return count;
            }
            catch (error) {
                throw new Error('An error occurred while counting products.');
            }
        };
        return users();
    }
    async uploadAvatar(file) {
        const { createReadStream, filename } = await file;
        const stream = createReadStream();
        const savePath = `path/to/save/${filename}`;
        await new Promise((resolve, reject) => {
            const writeStream = fs_1.default.createWriteStream(savePath);
            stream.pipe(writeStream);
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });
        return savePath;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [memcached_service_1.MemcachedService])
], UsersService);
//# sourceMappingURL=users.service.js.map
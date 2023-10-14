import { User } from '@prisma/client';
import { MemcachedService } from '../memcached/memcached.service';
import { ChangePasswordInput, CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    private prisma;
    private readonly memcachedService;
    private tokenMap;
    constructor(memcachedService: MemcachedService);
    users(): Promise<User[]>;
    user(id: number): Promise<User | null>;
    create(input: CreateUserInput): Promise<User>;
    update(id: number, updateStoreDto: UpdateUserInput): Promise<User>;
    delete(id: number): Promise<User>;
    changePassword(userId: number, changePasswordInput: ChangePasswordInput): Promise<User>;
    forgotPassword(email: string): Promise<boolean>;
    generateRandomToken(length?: number): string;
    sendPasswordResetEmail(email: string, token: string): void;
    changePRofilePic(id: number, updateStoreDto: CreateUserInput): Promise<User>;
    totalUsers(): Promise<number>;
    uploadAvatar(file: any): Promise<string>;
}

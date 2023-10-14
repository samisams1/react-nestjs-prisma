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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let NotificationService = class NotificationService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
        this.pubSub = new graphql_subscriptions_1.PubSub();
    }
    async sendNotification(recipientId, message, soundUrl) {
        const recipient = await this.prisma.user.findUnique({ where: { id: recipientId } });
        if (recipient) {
            console.log(`Sending notification to recipient: ${recipient.username}`);
            console.log(`Message: ${message}`);
            console.log(`Sound URL: ${soundUrl}`);
            const notification = {
                recipientId: recipient.id,
                message,
                soundUrl,
            };
            this.pubSub.publish('notification', { notification });
            return true;
        }
        return false;
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NotificationService);
//# sourceMappingURL=notification.service.js.map
import { PubSub } from 'graphql-subscriptions';
export declare class NotificationService {
    pubSub: PubSub;
    private prisma;
    constructor();
    sendNotification(recipientId: number, message: string, soundUrl: string): Promise<boolean>;
}

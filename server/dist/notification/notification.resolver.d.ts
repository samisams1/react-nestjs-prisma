import { NotificationService } from './notification.service';
import { Notification } from './Dto/notification.dto';
export declare class NotificationResolver {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(recipientId: number, message: string, soundUrl: string): Promise<boolean>;
    notification(): AsyncIterator<Notification>;
}

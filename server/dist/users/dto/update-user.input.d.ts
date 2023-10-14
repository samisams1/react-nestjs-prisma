export declare class UpdateUserInput {
    email?: string;
    username?: string;
    firstName?: string;
    role?: EnumRole;
    status?: StatusEnum;
    lastName?: string;
    password?: string;
}
export declare class ChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}
export declare enum EnumRole {
    ADMIN = "ADMIN",
    USER = "STORE",
    GUEST = "SELLER"
}
export declare enum StatusEnum {
    active = "active",
    disabled = "disabled",
    pending = "pending"
}

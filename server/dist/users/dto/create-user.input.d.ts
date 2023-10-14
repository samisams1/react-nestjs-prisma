export declare class CreateUserInput {
    email: string;
    username: string;
    firstName: string;
    role: EnumRole;
    lastName: string;
    password: string;
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

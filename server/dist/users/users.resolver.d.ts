import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ChangePasswordInput, CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    user(id: number): Promise<User | null>;
    users(): Promise<User[]>;
    createUser(createUserDto: CreateUserInput): Promise<User>;
    updateUser(id: number, input: UpdateUserInput): Promise<User | null>;
    deleteUser(id: number): Promise<User>;
    countUsers(): Promise<number>;
    changePassword(userId: number, changePasswordInput: ChangePasswordInput): Promise<User>;
    forgotPassword(email: string): Promise<boolean>;
}

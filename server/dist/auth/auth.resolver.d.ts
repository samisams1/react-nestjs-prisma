import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { User } from 'src/users/entities/user.entity';
import { LoginResponse } from './dto/login-resonse';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(input: LoginInput): Promise<LoginResponse>;
    me(user: User): Promise<User>;
}

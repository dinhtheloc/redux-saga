import User from "../models/User";

export interface LoginRequest {
    username: string,
    password: string
}

export function login(req: LoginRequest) {
    return new Promise<User>((resolve) =>
        setTimeout(() => resolve({ username: 'admin', token: 'abcdef' }), 1000)
    );
}

import { User } from './user';

export * from './user';

export class ApiResponse {

    isSuccess: boolean = true;
    message: string;
    statusCode: number = 404;
    data: User;

}
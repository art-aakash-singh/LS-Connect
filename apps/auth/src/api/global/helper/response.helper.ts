export class ResponseHelper{
    static success<T>(
        data:T,
        message = 'Success',
    ) {
        return {
            success:true,
            message,
            data
        }
    }
    static error<T>(
        data: T = null as unknown as T,
        message: 'Error'
    ){
        return {
            success: false,
            message,
            data
        }
    }
}
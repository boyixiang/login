import ajax from './index';
export interface IRes<T = any> {
    code: number;
    data: T;
    msg: string;
}

/** 登录  */
export interface ILoginItem {
    email: string;
    password: string;
}
export const login = (params: ILoginItem): Promise<IRes<any>> => {
    return ajax({
        method: 'POST',
        url: 'login',
        data: params
    })
}
/** 登出  */
export const logout = (): Promise<IRes<any>> => {
    return ajax({
        method: 'POST',
        url: 'logout'
    })
}
/** 获取令牌  */
export const getCSRF = (): Promise<IRes<any>> => {
    return ajax({
        method: 'GET',
        url: 'csrf-cookie'
    })
}
/** 获取用户资料  */
export const getUser = (): Promise<IRes<any>> => {
    return ajax({
        method: 'GET',
        url: 'api/user'
    })
}
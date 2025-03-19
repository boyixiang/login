interface IConfig {
    domain: string;
}
interface IObj<T> {
    [key: string]: T;
    [key: number]: T;
}
type envType = 'development' | 'production';
export const typeEnv = process.env.NODE_ENV as envType;
const config: IObj<IConfig> = {
    development: {
        domain: 'https://dev.178778.xyz' //测试环境地址
    },
    production: {
        domain: '' //线上环境地址
    }
}
const base = config[typeEnv]
export default base;
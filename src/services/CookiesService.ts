import _ from 'lodash'
import nookies from 'nookies'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

class CookiesServiceClass {
    constructor() {

    }

    // Phía client
    setClientCookies = (key: string, value: any) => {
        setCookie(null, key, value, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }

    getClientCookies = (key: string) => {
        const cookies = parseCookies()
        if (cookies)
            return cookies[key];

        return undefined;
    }

    // Lấy cho axios
    getClientCookiesHeader = () => {
        const cookies = parseCookies()
        let coockieCnt = "";
        _.map(cookies, (val, key) => {
            coockieCnt = `${key}=${val};`
        })
        return coockieCnt
    }

    // Phía server
    getSSRCookies = (ctx: any, key: string) => {
        // Parse
        const cookies = nookies.get(ctx)
        return cookies[key];
    }

}

const CookiesService = new CookiesServiceClass();
export default CookiesService;
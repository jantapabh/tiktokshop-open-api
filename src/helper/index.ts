import * as crypto from 'crypto-js';
import { END_POINT } from '../config/constant';

export async function generateSignature(path, timestamp, config) {
    const { appKey, appSecret, shopId } = config;
    const commonParam = '?app_key=' + appKey + '&shop_id=' + shopId + '&timestamp=' + timestamp;

    const urlString = END_POINT + path + commonParam;
    const url = new URL(urlString);
    let concatParam = '';

    url.searchParams.forEach((e, i) => {
        if (i !== 'sign' && i !== 'access_token' && e !== null) {
            concatParam += i.concat(e);
        }
    });

    const signstring = appSecret + path + concatParam + appSecret;
    // console.log('sign string: ' + signstring);
    const signature = crypto.HmacSHA256(signstring, appSecret).toString();
    return signature;
}

export function commonParameter(config, timestamp) {
    const { appKey, accessToken, shopId } = config;
    const commonParam =
        '?app_key=' +
        appKey +
        '&access_token=' +
        accessToken +
        '&sign=' +
        '' +
        '&timestamp=' +
        timestamp +
        '&shop_id=' +
        shopId;

    return commonParam;
}

export function genURLwithSignature(path, commonParam, config) {
    const url = new URL(END_POINT + path + commonParam);
    const params = this.parseParmsURL(url);
    const signature2 = this.signRequest(params, path, config);
    url.searchParams.set('sign', signature2);
    return url.toString();
}
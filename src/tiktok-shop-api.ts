import axios from 'axios';
import { randomBytes } from 'crypto';
import queryString from 'query-string';
import {
  TIKTOK_AUTH_URL,
  APP_KEY,
  APP_SECRET,
  SHOP_ID,
  ACCESS_TOKEN_URL
} from './config/constant';

export function TikTokShopApi({
  host,
  app_key,
  app_secret,
  shop_id
}: {
  host: string,
  app_key: string,
  app_secret: string,
  shop_id: string
}) {
  return new _TikTokShopApi({ host, app_key, app_secret, shop_id })
}

class _TikTokShopApi {
  private host: string;
  private appKey: string;
  private appSecret: string;
  private shopID: string;

  constructor({ host, app_key, app_secret, shop_id }:
    {
      host: string,
      app_key: string,
      app_secret: string,
      shop_id: string
    }) {
    this.host = host;
    this.appKey = app_key;
    this.appSecret = app_secret;
    this.shopID = shop_id;
  }

  getAuthURL(): string {
    const state = randomBytes(3).toString('hex');
    const endPoint = TIKTOK_AUTH_URL
    const path = '/oauth/authorize?'
    const commonParam = {
      app_key: this.appKey,
      state: state
    }

    // const commonParam = '?app_key=' + APP_KEY + '&state=' + state
    return endPoint + path + queryString.stringify(commonParam)
  }
  
  async fetchTokenWithAuthCode(code: string) {
    const grantType = 'authorized_code'
    const url = ACCESS_TOKEN_URL
    const body = {
      'app_key': APP_KEY,
      'app_secret': APP_SECRET,
      'auth_code': code,
      'grant_type': grantType
    }
    try {
      const response = await axios.post(url, body)
      const accessToken = response.data.data?.access_token
      console.log('--------------------');
      console.log(response.data);
      console.log('----------------');
      if (!accessToken) {
        throw new Error('No access token found');
      }
      return response.data.data
      // return accessToken
    } catch (error) {
      console.log('[GetAccessToken]', error);
    }
  }


}
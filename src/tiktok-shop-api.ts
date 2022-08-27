import axios from 'axios';
import { randomBytes } from 'crypto';
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
  private app_key: string;
  private app_secret: string;
  private shop_id: string;

  constructor({ host, app_key, app_secret, shop_id }:
    {
      host: string,
      app_key: string,
      app_secret: string,
      shop_id: string
    }) {
    this.host = host;
    this.app_key = app_key;
    this.app_secret = app_secret;
    this.shop_id = shop_id;
  }

  getAuthURL(): string {
    const state = randomBytes(3).toString('hex');
    const path = TIKTOK_AUTH_URL
    const commonParam = '?app_key=' + APP_KEY + '&state=' + state
    return path + commonParam
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
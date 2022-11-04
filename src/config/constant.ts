const TIKTOK_AUTH_URL = 'https://auth-sandbox.tiktok-shops.com'
const TIKTOK_END_POINT = 'https://open-api-sandbox.tiktokglobalshop.com'

const APP_KEY = '442vlg'

const APP_SECRET = 'aeb80391c36d80a6c460277983f7584118ea0074'

const SHOP_ID = 'VNLCVLWL24/7494530586889194270'

const AUTH_CODE = 'TsBn6gAAAAADpDIQcJKdqJ2Bh4ES6mF3TLX4-aGeE0IzTtsFzc8oYzrbGc1mpajWcHrMjvnrgbUG4k-0EXzzjomFNFcI2Xj9'

const ACCESS_TOKEN_URL = 'https://auth.tiktok-shops.com/api/token/getAccessToken'

enum PATH {
    GET_ORDER_LIST = '/api/orders/search',
    GET_ORDER_DETAIL = '/api/orders/detail/query'

}

enum OrderStatusTiktok {
    UNPAID = 100,
    AWAITING_SHIPMENT = 111,
    AWAITING_COLLECTION = 112,
    IN_TRANSIT = 121,
    DELIVERED = 122,
    COMPLETED = 130,
    CANCELLED = 140,
}

const END_POINT = 'https://open-api.tiktokglobalshop.com';
// const endPoint = 'https://open-api-sandbox.tiktokglobalshop.com'
const END_POINT_AUTH = 'https://auth.tiktok-shops.com';
// const endPointAuth = 'https://auth-sandbox.tiktok-shops.com'

export {
    TIKTOK_AUTH_URL,
    TIKTOK_END_POINT,
    APP_KEY,
    APP_SECRET,
    SHOP_ID,
    ACCESS_TOKEN_URL,
    PATH,
    OrderStatusTiktok,
    END_POINT,
    END_POINT_AUTH
}

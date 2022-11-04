import { PATH } from "../config/constant";
import axios from "axios"
import { commonParameter, generateSignature, genURLwithSignature } from "../helper";

export class OrderAPI {

    async getOrderList(a, b) {

        console.log(a, b);

        console.log('getOrderList');

    }

    async getOrderDetail(orderId) {
        console.log('loggggg-----------------');
        console.log(orderId);
        console.log()
        console.log('loggggg-----------------');
        const path = PATH.GET_ORDER_DETAIL
        const timestamp = Date.parse(new Date().toString()) / 1000;
        // const signature = await generateSignature(path, timestamp, config);
        // const commonParam = commonParameter(config, timestamp);
        const body = {
            order_id_list: [orderId],
        };
        // const url = genURLwithSignature(path, commonParam, config);
        // try {
        //     const response = await axios.post(url, body);
        //     const { order_list } = response.data.data;
        //     return order_list[0];
        // } catch (error) {
        //     console.log('[GetOrder]', error);
        // }

    }

    async shipOrder() { }

    async getShippingDocuments() { }

    async getShippingInfo() { }




}
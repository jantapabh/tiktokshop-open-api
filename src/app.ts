import express from "express";
import { TikTokShopApi } from "./tiktok-shop-api";

const app = express();
const port = 3001;
app.get("/", async (req, res) => {
  const a:any={}
  const test = TikTokShopApi(a)
  // console.log(test.getAuthURL());
  let code  ='6ZS9MwAAAABP40Ddq6cJKLg_BLAIj54JzpaS9-izcy9L_SdTKtFs45hDhX9_blIF_AYXQl9gGMtYUYLLHDapNvkjzsTaFPWL'
  const token = await test.fetchTokenWithAuthCode(code)
  res.send(token);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
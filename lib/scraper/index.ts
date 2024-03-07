import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";

export async function scrapeAmazonProduct(url:string) {
    if(!url) return;
    

    // brightdata proxy configuration
    const username = String(process.env.BRIGHTDATA_USERNAME);
    const password = String(process.env.BRIGHTDATA_PASSWORD);
    const port = 22225;
    const session_id =(1000000 * Math.random()) | 0;
    const options={
        auth:{
          username:`${username}-sesion-${session_id}`,
          password,
        },
        host:'brd.superproxy.io',
        port,
        rejectUnauthorized:false
    }

   
    try{
        // fetch the product page
        const response = await axios.get(url,options)
        const $ = cheerio.load(response.data)
        const title = $('#productTitle').text().trim();
        const currentPrice = extractPrice(
        $('.priceToPay span.a-price-whole'),
        $('a.size.base.a-color-price'),
        $('.a-button-selected .a-color-base'))
        const originalPrice =extractPrice($('#priceblock_ourpri'))

    }catch(error:any){
       throw new Error(`Failed to create/update product: ${error.message}`) 
    }
   
}
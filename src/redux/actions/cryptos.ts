import httpApis from "../../config/http.apis";
import { FETCH_CRYPTOS } from "../actionTypes";


export const fetchCryptos = ()=> async (dispatch:any) => {
    try {
        const response:any = await httpApis.get();
        const res = response.data['data'].map((item:any) =>{
            return {
                id:item.id,
                rank:item.cmc_rank,
                name: item.name,
                price: item.quote.USD.price,
                priceChange: item.quote.USD.percent_change_24h,
                marketCap:item.quote.USD.market_cap,
                volume:item.quote.USD.volume_24h
            };
        })
        /**
         * set timeout added just to show loading icon 
         * as git api is very fast responding.
         */
        // setTimeout(()=>{
        //   dispatch(hideLoader());
        // },1000)

        dispatch({
          type: FETCH_CRYPTOS,
          payload: res,
        });
      } catch (err) {
        console.log(err);
        // dispatch(toggleError());
        // dispatch(hideLoader());
      }
}
import httpApis from "../../config/http.apis";
import { FETCH_CRYPTOS } from "../actionTypes";
import { Filter } from '../../types/filters';
import { hideLoader, showLoader, toggleError } from "../actions/spinner";


export const fetchCryptos = (filters: Filter = { type: 'latest', limit: 10 }) => async (dispatch: any) => {
  dispatch(showLoader());
  try {
    const response: any = await httpApis.get(filters);
    const res = response.data['data'].map((item: any) => {
      return {
        id: item.id,
        rank: item.cmc_rank,
        name: item.name,
        price: Math.round((item.quote.USD.price + Number.EPSILON) * 100) / 100,
        priceChange: Math.round((item.quote.USD.percent_change_24h + Number.EPSILON) * 100) / 100,
        marketCap: Math.round((item.quote.USD.market_cap + Number.EPSILON) * 100) / 100,
        volume: Math.round((item.quote.USD.volume_24h + Number.EPSILON) * 100) / 100,
        priceF: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(Math.round((item.quote.USD.price + Number.EPSILON) * 100) / 100),
        priceChangeF: Math.round((item.quote.USD.percent_change_24h + Number.EPSILON) * 100) / 100 + "%",
        marketCapF: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(Math.round((item.quote.USD.market_cap + Number.EPSILON) * 100) / 100),
        volumeF: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(Math.round((item.quote.USD.volume_24h + Number.EPSILON) * 100) / 100)
      };
    })
    /**
     * set timeout added just to show loading icon 
     * as api is very fast responding.
     */
    setTimeout(() => {
      dispatch(hideLoader());
    }, 500)

    dispatch({
      type: FETCH_CRYPTOS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    dispatch(toggleError());
    dispatch(hideLoader());
  }
}
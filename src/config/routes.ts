import IRoute from "../types/route";
import HomePage from "../pages/home";
import App from '../App';
import LiquidityPage from '../pages/liquidity';

const routes: IRoute[] = [
    {
        path:'/',
        exact:true,
        redirect: '/home',
        component:App,
        name:'Default Page'
    },
    {
        path:'/home',
        exact:true,
        component:HomePage,
        name:'Home Page'
    },
    {
        path:'/liquidity',
        exact:true,
        component:LiquidityPage,
        name:'Liquidity Page'
    }
]
export default routes;
// import { component } from 'vue/types/umd'
import Home from './views/Home.vue'
import TCProducts from './views/TCProducts.vue'
import TLProducts from './views/TLProducts.vue'
import PhoneProducts from './views/PhoneProducts.vue'

export const routes = [{
        path: '/Home',
        component: Home
    },
    {
        //设参
        path: '/TCProducts/:id',
        component: TCProducts
    },
    {
        //设参
        path: '/TLProducts/:id',
        component: TLProducts
    },
    {
        //设参
        path: '/PhoneProducts/:id',
        component: PhoneProducts
    }
]
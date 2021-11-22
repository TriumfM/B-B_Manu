import Vue from 'vue'
import Router from 'vue-router'

//Main pages
import MainComponent from '@/main/MainComponent'
import HomeComponent from '@/main/home/HomeComponent'
import SpeisekartComponent from '@/main/speisekart/SpeisekartComponent'
import KontaktComponent from '@/main/kontakt/KontaktComponent'
import ReservierungComponent from '@/main/reservierung/ReservierungComponent'

//Admin pages

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainComponent,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: HomeComponent
                },
                {
                    path: '/speisekarte',
                    name: 'speisekarte',
                    component: SpeisekartComponent
                },
                {
                    path: '/kontakt',
                    name: 'kontakt',
                    component: KontaktComponent
                },
                {
                    path: '/reservierung',
                    name: 'reservierung',
                    component: ReservierungComponent
                }
            ]
        }
    ]
})
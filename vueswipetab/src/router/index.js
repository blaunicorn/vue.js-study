import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import swipe from '@/components/swipe'
import eee from '@/components/eee'
import aaa from '@/components/aaa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: swipe
    },
    {
      path: '/eee',
      name: 'eee',
      component: eee
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    }
  ]
})

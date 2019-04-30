import Vue from 'vue'
import Router from 'vue-router'
import Choice from './views/Choice.vue'
import Vip from './views/Vip.vue'
import Classify from './views/Classify.vue'
import Ranking from './views/Ranking.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/choice',name:'choice',component:Choice},
    {path:'/classify',name:'classify',component:Classify},
    {path:'/vip',name:'vip',component:Vip},
    {path:'/ranking',name:'ranking',component:Ranking},

  ],

  linkExactActiveClass: 'active'
})

<template>
    <div id="app">
        <Header>   </Header>
        <router-link>4444</router-link>
        <div class="banner">
            <div class="banner-item">
                <router-link to="/choice">0..0.0</router-link> 
            </div>
             <!-- <div class="banner-item">
                <router-link to="/vip">VIP</router-link>     
            </div>
             <div class="banner-item">
                <router-link to="/classify">分类</router-link>     
            </div>
            <div class="banner-item">
                <router-link to="/ranking">排行</router-link>     
            </div> -->
        </div>
        <router-view></router-view>
     
    </div>
</template>

<script>

    import Header from './components/Header.vue'


    const url = "/api/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=20"

    export default {
        name: 'app',
        // created() {
        //     this.axios.get(url).then(a => {
        //         console.log(a.data)
        //     },err => {
        //         alert(err)
        //     })
        //  },

        components: {
            Header
        }

    }
</script>

<style>
   
</style>

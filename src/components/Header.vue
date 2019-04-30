<template>
    <div class="header">
        <div class="nav">
            <div class="sex">
                <div class="sex-box">
                    <span class="span">男</span>
                     <span>女</span>
                </div>  
            </div>
            <div class="logo">
                <!-- <img src="../../public/images/logo.jpg" class="auto-img"> -->
                追书神器
            </div>
            <div class="search icon-search"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style>
   
    .nav{
        height: 1.1rem;
        display: flex;
        line-height: 1.1rem;
        text-align: center;
    }
    
    .sex{
        flex: 1;
        height: 1.1rem;
        position: relative;
    }
    
    .sex-box{
        position: absolute;
        left: .1rem;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
    }
    .sex span {
        display: inline-block;
        padding:0 7px;
        border-radius: 50%;
        line-height: .5rem;
        border: 1px solid rgb(131, 47, 201);
    }

    .logo{
        flex: 0 0 4rem;
        font-size: .35rem;
        font-weight: 800px;
        color: rgb(131, 47, 201);
    }
    
    .search{
        flex: 1;
    }
    .icon-search{
        line-height: 1.1rem;
         color: rgb(131, 47, 201);
         font-size: .3rem;
    }

    .banner{
        width: 100%;
        height: .8rem;
        display: flex;
        line-height: .8rem;
        text-align: center;
        color: rgb(221, 217, 217);
        background: rgb(145, 84, 194);
    }
    .banner>.banner-item{
        flex: 1;
    }
</style>
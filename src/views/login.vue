<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        methodes:{
            login(){
//                localStorage.login = true // 登录状态
                // this.$route.params.redirect 是路由拦截是传过来的拦截页面的路由对象，看下文的路由拦截配置详情，有说明。
                if( this.$route.params.redirect ){   // 判断是否有redirect参数
                    this.$router.push( this.$route.params.redirect ) //登录后跳回被的拦截
                }
            }
        }
    }
</script>

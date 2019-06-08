<template>
    <div class="bg">
        <!-- 首页头像开始 -->
        <div class="index-head">
            <img src="./static/img/yan@2x.png" alt="">
        </div>
        <!-- 首页头像结束 -->
        <!-- 首页项目名称开始 -->
        <div class="index-name">
            Join.AI Box
        </div>
        <!-- 首页项目名称结束 -->
        <!-- 首页按钮部分开始 -->
        <div class="index-btn">
            <router-link to="/username">
                <div class="btn-login">
                    手动登录
                </div>
            </router-link>
            <router-link to="/tips1">
                <div class="btn-face">
                    脸部识别
                </div>
            </router-link>
        </div>
        <!-- 首页按钮部分结束 -->
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    @import "static/css/index.css";
</style>

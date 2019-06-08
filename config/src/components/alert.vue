<template>
    <div class="bg">
        <!-- 弹出框部分开始 -->
        <div class="alert-box">
            <div class="question">
                <img src="img/question.png" alt="">
            </div>
            <div class="text">
                您确定要进行人脸识别吗?
            </div>
            <div class="alert-btn">
                <router-link to="/tips">
                    <button class="sure">
                        确定
                    </button>
                </router-link>
                <router-link to="/username">
                    <button class="cancel">
                        取消
                    </button>
                </router-link>

            </div>
        </div>
        <!-- 弹出框部分结束 -->
    </div>
</template>

<script>
    export default {
        name: "alert"
    }
</script>

<style scoped>
@import "static/css/alert.css";
</style>

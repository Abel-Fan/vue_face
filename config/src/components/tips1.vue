<template>
    <div class="bg">
        <!-- 提示信息图片开始 -->
        <div class="img-box">
            <img src="./static/img/yuyin.png" alt="">
        </div>
        <!-- 提示信息图片结束 -->
        <!-- 提示文字开始 -->
        <div class="tips-text">
            <div class="first-line">
                请将音量调整到适中
            </div>
            <div class="second-line">
                并跟随语音提示以及视频完成动作
            </div>
        </div>
        <!-- 提示文字结束 -->
        <!-- 按钮开始 -->

        <div class="know-btn" @click="jump">
            我知道了
        </div>
        <!-- 按钮结束 -->
    </div>
</template>

<script>
    export default {
        name: "tips",
        methods:{
            say(content){
                var speech = window.speechSynthesis;
                var speak = new SpeechSynthesisUtterance();
                speak.text = content;
                speech.speak(speak);
            },
            jump(){
                this.$router.push("/shibiezhong");
            }
        },
        mounted() {
            this.say("请将您的音量调整到适中,并跟随语音提示以及视频完成动作")
        }
    }
</script>

<style scoped>
@import "static/css/tips.css";
</style>

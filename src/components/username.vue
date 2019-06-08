<template>
    <div class="bg">
        <!-- 用户标志开始 -->
        <div class="sign">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
        </div>
        <!-- 用户标志结束 -->
        <!-- 提示文字开始 -->
        <div class="tips">
            <div class="tips-one">
                请通过人脸识别验证您的身份
            </div>
            <div class="tips-two">
                请按照以下步骤完成脸部信息的录入
            </div>
        </div>
        <!-- 提示文字结束 -->
        <!-- 输入框开始 -->
        <div class="input-box">
            <div class="warn"></div>
            <div class="input-text">
                <input type="text" placeholder="请输入您的名字" v-model="username">
                <div class="false">
                    <img src="img/false.png" alt="">
                </div>
            </div>
            <!-- 错误提示信息开始 -->
            <div class="false-message">
                <div class="false-img">
                    !
                </div>
                <div class="message-text">
                    此处省略一万字
                </div>
            </div>
            <!-- 错误提示信息结束 -->
        </div>
        <!-- 输入框结束 -->
        <!-- 开始识别按钮开始 -->
        <button class="start-btn hot" @click="jump">
            开始录入
        </button>
        <!-- 开始识别按钮结束 -->
    </div>
</template>

<script>
    export default {
        name: "username",
        data(){
          return {
              username: ''
          }
        },
        methods:{
            say(content){
                var speech = window.speechSynthesis;
                var speak = new SpeechSynthesisUtterance();
                speak.text = content;
                speech.speak(speak);
            },
            jump(){
                if (this.username == ''){
                    this.say("请输入您的名字");
                }else {
                    localStorage.username = this.username;
                    this.$router.push("/alert");
                }
            }
        },
        mounted() {
            this.say("请通过人脸识别验证您的身份,请按照以下步骤完成脸部信息的录入");
        }
    }
</script>

<style scoped>
@import "static/css/username.css";
</style>

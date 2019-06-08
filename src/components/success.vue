<template>
    <div class="bg">
        <!-- 成功开始 -->
        <div class="success-bg">
            <div class="success-tips">
                <div class="first-line">
                    恭喜您
                </div>
                <div class="second-line">
                    您的脸部信息录入成功
                </div>
            </div>
            <button class="success-btn" @click="jump">
                开始比对
            </button>
        </div>
        <!-- 成功结束 -->
    </div>
</template>

<script>
    export default {
        name: "success",
        methods:{
            jump(){
                this.$router.push("/shibiezhong");
            },
            say(content){
                var speech = window.speechSynthesis;
                var speak = new SpeechSynthesisUtterance();
                speak.text = content;
                speech.speak(speak);
            }
        },
        mounted() {
            this.say("恭喜你，您的信息录入成功");
        }
    }
</script>

<style scoped>
@import "static/css/success.css";
    .bg{
        width: 100%;
        height: 100%;
    }
</style>

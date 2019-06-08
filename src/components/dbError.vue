<template>
    <div class="bg">
        <!-- 失败开始 -->
        <div class="success-bg">
            <div class="success-tips">
                <div class="first-line">
                    sorry
                </div>
                <div class="second-line">
                    识别失败，请重新识别
                </div>
            </div>
            <button class="success-btn" @click="jump">
                重新识别
            </button>
        </div>
        <!-- 失败结束 -->
    </div>
</template>

<script>
    export default {
        name: "luruError",
        methods:{
            jump(){
                this.$router.push("/shibiezhong");
            },
            say(content){
                var speech = window.speechSynthesis;
                var speak = new SpeechSynthesisUtterance();
                speak.text = content;
                speech.speak(speak);
            },
        },
        mounted() {
            this.say("我不是认识你");
        }
    }
</script>

<style scoped>
@import "static/css/error.css";
</style>

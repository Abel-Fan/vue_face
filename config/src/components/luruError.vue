<template>
    <div class="bg">
        <!-- 失败开始 -->
        <div class="success-bg">
            <div class="success-tips">
                <div class="first-line">
                    sorry
                </div>
                <div class="second-line">
                    您的脸部信息录入失败，请重新录入
                </div>
            </div>
            <button class="success-btn" @click="jump">
                重新录入
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
                this.$router.push("/video");
            },
            say(content){
                var speech = window.speechSynthesis;
                var speak = new SpeechSynthesisUtterance();
                speak.text = content;
                speech.speak(speak);
            }
        },
        mounted() {
            this.say("对不起，您的脸部信息录入失败，请重新录入");
        }
    }
</script>

<style scoped>
@import "static/css/error.css";
</style>

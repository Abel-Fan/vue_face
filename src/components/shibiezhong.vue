<template>
    <div class="bg">
        <!-- 相框开始 -->
        <div class="album">
            <canvas></canvas>
            <video src="" width="202" height="256" autoplay></video>
        </div>
        <!-- 相框结束 -->
        <!-- 提示语开始 -->
        <div class="tips-text">
            <ul class="dots">
                <li class="dot d"></li>
                <li class="dot c"></li>
                <li class="dot b"></li>
                <li class="dot a"></li>
                <li class="dot b"></li>
                <li class="dot c"></li>
                <li class="dot d"></li>
            </ul>
            识别中，请不要着急
        </div>
        <!-- 提示语结束 -->
        <!-- 公司名称开始 -->
        <div class="company">
            UEK TECHNOLOGY
        </div>
        <!-- 公司名称结束 -->
    </div>
</template>

<script>
    export default {
        name: "shibiezhong",
        mounted() {
            navigator.mediaDevices.getUserMedia({
                video:{
                    width:202,
                    height:256
                }
            }).then((data)=>{
                var video = document.querySelector("video");
                var canvas = document.querySelector("canvas");
                video.srcObject = data;
                let flag = true
                video.onprogress = ()=>{
                    if(!flag){
                      return
                    }
                    flag = false

                    var can = canvas.getContext("2d");
                    can.drawImage(video, 0, 0);
                    var data = canvas.toDataURL("image/jpeg", .7).substr(23);
                    var name = localStorage.username;

                    fetch("/check",{
                      method:"post",
                      headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      body:"url="+data+"&name="+name
                    }).then((r)=>{
                      return r.json()
                    }).then((data)=>{
                      if(data['error_code']){
                        flag = true
                      }else{
                        flag=false

                      }
                    })


                }
            })

        }
    }
</script>

<style scoped>
@import "static/css/video.css";
</style>

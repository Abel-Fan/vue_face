<template>
    <div class="bg">
        <!-- 相框开始 -->
        <div class="album">
            <canvas width="202" height="256"></canvas>
            <video src="" autoplay></video>
        </div>
        <!-- 相框结束 -->
        <!-- 提示语开始 -->
        <div class="tips-text">
            请正脸对准屏幕
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
        name: "video",
        mounted() {
            navigator.mediaDevices.getUserMedia({
                video:{
                    width:202,
                    height:256
                }
            }).then((data)=>{
                var video = document.querySelector("video");
                var canvas = document.querySelector("canvas");
                var flag = true;
                video.srcObject = data;
                video.onprogress = ()=>{
                    if(!flag){
                        return
                    }
                    flag=false

                    var can = canvas.getContext("2d");
                    can.drawImage(video, 0, 0);
                    var data = canvas.toDataURL("image/jpeg", .7).substr(23);
                    var name = localStorage.username;


                    fetch("/photo",{
                      method:"post",
                      headers:{"content-type":"application/x-www-form-urlencoded"},
                      body:"url="+data+"&name="+name
                    }).then(function(r){
                      console.log(r)
                      return r.json()
                    }).then((e)=>{
                      console.log(e)
                       if(e['error_code']){
                          flag=true

                       }else{
                         flag =false
                         this.$router.push("/success")
                       }
                    })

                    // if (flag){
                    //     this.$router.push("/success");
                    // } else {
                    //     this.$router.push("/luruError");
                    // }
                }
            })

        }
    }
</script>

<style scoped>
@import "static/css/video.css";
</style>

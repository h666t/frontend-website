<script setup>
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const backHome = () => {
        router.push("/");
    };
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    onMounted(() => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;
        const canvasScale = 3;
        const canvasWidth = width*canvasScale;
        const canvasHeight = height*canvasScale;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        document.querySelector("#canvasContainer").appendChild(canvas)
        let lastTimeStamp = Date.now();
        let fps = 0;
        let fps_for_show = "";
        let fireList = [];
        const drawFPS = (ctx) => {
            ctx.save();
            let now = Date.now();
            fps += 1;
            if(now - lastTimeStamp >= 1000){
                fps_for_show = `fps: ${fps}; now: ${now}`;
                fps = 0;
                lastTimeStamp = now;
            }
            ctx.fillStyle= 'white';
            ctx.font = '45px sans-serif';
            ctx.textBaseline = 'top';
            ctx.fillText(fps_for_show, 10, 10);
            ctx.restore();
        };
        const addFire = (x,y,create_time_stamp) => {
            fireList.push({
                x: x + getRandomInt(0,20),
                y: y + getRandomInt(0,20),
                create_time_stamp,
                alpha: 1
            });
            fireList.push({
                x: x + getRandomInt(0,30),
                y: y + getRandomInt(0,30),
                create_time_stamp,
                alpha: 1
            });
            fireList.push({
                x: x + getRandomInt(0,10),
                y: y + getRandomInt(0,10),
                create_time_stamp,
                alpha: 1
            });
        };
        const drawFire = (ctx) => {
            ctx.save();
            let now = Date.now();
            fireList.map(function(fire_item, index){
                let count = getRandomInt(10,20);
                let radius = getRandomInt(1,15);
                let {x,y,create_time_stamp} = fire_item;
                let diff_time_stamp = now - create_time_stamp;
                let currentRadius = radius;
                // 时间越长 半径越大 越扩散
                currentRadius += diff_time_stamp/13 * getRandomArbitrary(0.3,1.5);
                for (let i = 0; i < count; i++) {
                    let angle = 360 * (i/count);
                    let radians = angle * Math.PI / 180;
                    
                    // cos(radians) = 临边/半径 * 半径
                    let fire_x = x + Math.cos(radians)*currentRadius + getRandomArbitrary(-10, 10);
                    let fire_y = y + Math.sin(radians)*currentRadius ;
                    if(now % 2 == 0){
                        ctx.fillStyle = `hsl( ${getRandomInt(300,359)} ${getRandomInt(40,60)}% ${getRandomInt(40,60) * fire_item.alpha}%)`;
                    } else {
                        ctx.fillStyle = `hsl( ${getRandomInt(0,60)} ${getRandomInt(40,60)}% ${getRandomInt(40,60) * fire_item.alpha}%)`;
                    }
                    ctx.beginPath();
                    ctx.arc(fire_x, fire_y, 3, 0, Math.PI*2);
                    ctx.closePath();
                    ctx.fill();
                }
                fire_item.y += diff_time_stamp / 350;
                fire_item.alpha -= diff_time_stamp / 100000;
                if(fire_item.alpha < 0){
                    fireList.splice(index,1);
                }
            });
            ctx.restore();
        };
        const drawBackground = (ctx, canvasWidth, canvasHeight) => {
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0)';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            ctx.fill();
            ctx.restore();
        }
        const drawImg = () =>{
            // ctx.clearRect(0,0,canvasWidth,canvasHeight);
            // 只更新不一样的区域
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            ctx.globalCompositeOperation = 'lighter';
            drawBackground(ctx, canvasWidth, canvasHeight);
            drawFPS(ctx);
            drawFire(ctx);
            window.requestAnimationFrame(drawImg);
        }
        window.requestAnimationFrame(drawImg);

        canvas.addEventListener("click", function(e){
            let x = e.clientX * canvasScale;
            let y = e.clientY * canvasScale;
            addFire(x,y, Date.now())
            addFire(x,y, Date.now())
            addFire(x,y, Date.now())
        });


    });
    
</script>

<template>
    <div id="canvasContainer" style="width: 100vw;height: 100vh;">
        
    </div>
    
    <van-button style="position: fixed; bottom: 50px;left: 30px;" @click="backHome">返回首页</van-button>
</template>


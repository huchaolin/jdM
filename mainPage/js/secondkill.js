(function () {
    var kill = [{
        src: './img/secondkill1.jpg',
        price: 2000,
        oldprice: 4000
    },
    {
        src: './img/secondkill2.jpg',
        price: 200,
        oldprice: 4020
    }, {
        src: './img/secondkill3.jpg',
        price: 212,
        oldprice: 500
    }, {
        src: './img/secondkill4.jpg',
        price: 1244,
        oldprice: 3000
    }, {
        src: './img/secondkill5.jpg',
        price: 2345,
        oldprice: 3450
    }, {
        src: './img/secondkill1.jpg',
        price: 2000,
        oldprice: 4000
    },
    {
        src: './img/secondkill5.jpg',
        price: 2345,
        oldprice: 3450
    }, {
        src: './img/secondkill1.jpg',
        price: 2000,
        oldprice: 4000
    }, {
        src: './img/secondkill1.jpg',
        price: 2000,
        oldprice: 4000
    },
    {
        src: './img/secondkill5.jpg',
        price: 2345,
        oldprice: 3450
    }, {
        src: './img/secondkill1.jpg',
        price: 2000,
        oldprice: 4000
    }, {
        src: './img/secondkill1.jpg',
        price: 2000,
        oldprice: 4000
    },
    ];
    var secondkill = new Vue({
        el: "#secondkill",
        data: {
            kill,
            timeset: 23,
            now:new Date(),
            timer:null
        },
        methods: {
            run() {
                this.now = new Date();
                if (this.seconds == 0) {
                    clearTimeout(this.timer);
                    return;
                }
                this.timer = setTimeout(() => {
                    this.run();
                }, 1000)
            }
        },
        computed: {
            seconds(){
                let now =  this.now;
                let hour = this.timeset-now.getHours();
                let min = 60 - now.getMinutes();
                let second = 60 - now.getSeconds();
                return  hour*3600 + min*60 + second;
               
            },
            time() {
                hour = Math.floor(this.seconds/3600);
                min  = Math.floor(this.seconds/60%60);
                second = this.seconds%60;
                if(hour < 0) {
                    hour = "00";
                    min = "00";
                    second = "00";
                    return { hour, min, second }; 
                }
                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (min < 10) {
                    min = "0" + min;
                }
                if (second < 10) {
                    second = "0" + second;
                }
                return { hour, min, second };

            }
        }

    })
   setTimeout(secondkill.run, 1000);

})()
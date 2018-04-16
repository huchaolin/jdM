(function () {
    var pics = ["./img/carousel1.jpg",
        "./img/carousel2.jpg",
        "./img/carousel3.jpg",
        "./img/carousel4.jpg",
        "./img/carousel5.jpg"]
    var vm = new Vue({
        el: "#carousel",
        data: {
            pics,
            curr: 0,
            viewwidth: document.body.clientWidth,
            startX: 0,
            offsetX: 0,
            type: 'next',
            timer: null
        },
        methods: {
            run(type = 'next') {
                if (type == 'next') {
                    this.type = 'next';
                    this.curr = this.computedCurr.next0;
                }
                if (type == 'prev') {
                    this.type = 'prev';
                    this.curr = this.computedCurr.prev0;
                }
            },
            touchstart(e) {
                this.startX = e.touches[0].clientX;
                clearInterval(timer);
                clearInterval(this.timer);
            },
            touchmove(e) {
                this.offsetX = e.touches[0].clientX - this.startX;
            },
            touchend(e) {
                const direction = this.offsetX > 0 ? 'prev' : 'next';
                this.run(direction);
                this.offsetX = 0;
                this.timer = setInterval(this.run, 3000)
            }
        },
        computed: {
            computedCurr() {
                let curr = this.curr;
                let computedCurr = {
                    prev1: curr - 2,
                    prev0: curr - 1,
                    next0: curr + 1,
                    next1: curr + 2
                };
                if (curr == 0) {
                    computedCurr.prev1 = this.pics.length - 2;
                    computedCurr.prev0 = pics.length - 1;
                }
                if (curr == 1) {
                    computedCurr.prev1 = this.pics.length - 1;
                }
                if (curr == this.pics.length - 1) {
                    computedCurr.next1 = 1;
                    computedCurr.next0 = 0;
                }
                if (curr == this.pics.length - 2) {
                    computedCurr.next1 = 0;
                }
                return computedCurr;
            },
            ulstyle() {
                let width = this.viewwidth + "px";
                let height = this.viewwidth / 2.04 + 'px';
                return { width, height };
            },
            styles() {
                let width = this.viewwidth;
                let num = this.pics.length;
                let computedCurr = this.computedCurr;
                let styles = Array(num).fill({ transform: `translateX(${2 * width}px)` });
                if (this.type == 'next') {
                    styles[computedCurr.prev1] = { transform: `translateX(${-2 * width}px)`, transition: "all 0.5s" };
                    styles[computedCurr.prev0] = { transform: `translateX(${-width}px)`, transition: "all 0.5s" };
                    styles[this.curr] = { transform: "translateX(0)", transition: "all 0.5s" };
                    styles[computedCurr.next0] = { transform: `translateX(${width}px)`, transition: "all 0s" };
                    styles[computedCurr.next1] = { transform: `translateX(${2 * width}px)`, transition: "all 0s" };
                }
                if (this.type == 'prev') {
                    styles[computedCurr.prev1] = { transform: `translateX(${-2 * width}px)`, transition: "all 0s" };
                    styles[computedCurr.prev0] = { transform: `translateX(${-width}px)`, transition: "all 0s" };
                    styles[this.curr] = { transform: "translateX(0)", transition: "all 0.5s" };
                    styles[computedCurr.next0] = { transform: `translateX(${width}px)`, transition: "all 0.5s" };
                    styles[computedCurr.next1] = { transform: `translateX(${2 * width}px)`, transition: "all 0.5s" };
                }
                return styles;
            },
            touchstyles() {
                let width = this.viewwidth;
                let offsetX = this.offsetX;
                let num = this.pics.length;
                let computedCurr = this.computedCurr;
                let curr = this.curr;
                let styles = Array(num).fill({});
                
                if (offsetX != 0) {
                    styles[computedCurr.prev0] = { transform: `translateX(${-width + offsetX}px)`, transition: "all 0s" };
                    styles[this.curr] = { transform: `translateX(${offsetX}px)`, transition: "all 0s" };
                    styles[computedCurr.next0] = { transform: `translateX(${width + offsetX}px)`, transition: "all 0s" };
                }
                return styles;
            },
            circle() {
                let num = this.pics.length;
                let styles = Array(num).fill({ backgroundColor: "transparent" });
                styles[this.curr] = { backgroundColor: "gray" };
                return styles;
            }
        }
    });
    var timer = setInterval(vm.run, 3000);
})();


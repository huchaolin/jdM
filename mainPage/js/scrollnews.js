(function(){
    var news = [
        {
            title:"热",
            text:"内容1111111111111111111111111"
        },
        {
            title:"冰",
            text:"内容22222222222222222222222222222222"
        },
        {
            title:"火",
            text:"内容3333333333333333333333333333333"
        },
        {
            title:"水",
            text:"内容44444444444444444444444444444444444444444"
        }
    ];
    var scrollnews = new Vue({
        el:"#scroll_news",
        data: {
            news,
            height: 30,
            curr:0
        },
        methods: {
            run() {
                // this.curr++;
                // if(this.curr==this.news.length)
                // {this.curr =0};
                this.curr = this.next;
            }
        },
        computed:{
            prev() {
                if (this.curr == 0) {
                    return this.news.length-1;
                }
                return this.curr - 1;
            },
            next() {
                if (this.curr == this.news.length-1) {
                    return 0;
                }
                return this.curr + 1;
            },
            listyles() {
                let num = this.news.length;
                let height = this.height;
                let styles = Array(num).fill({transform:`translate3d(0px, ${2*height}px, 0px)`});
                styles[this.prev] = {transform:`translate3d(0px, ${-height}px, 0px)`,transition:'all 0.4s'};
                styles[this.curr] = {transform:`translate3d(0px, ${0}px, 0px)`,transition:'all 0.4s'};
                styles[this.next] = {transform:`translate3d(0px, ${height}px, 0px)`, transition:'all 0s'};
                return styles;
            }
        }
    });
    setInterval(scrollnews.run, 3000);
})()
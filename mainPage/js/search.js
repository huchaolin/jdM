(function(){
var search = new Vue({
    el:"#search",
    data: {
        content:null,
        searchtext:'每满100减10',
        offsetY:0,
        totalY:200
    },
    computed:{
        searchstyle() {
            console.log("offsetY",this.offsetY);
            console.log("totalY",this.totalY);
            let opacity = (this.offsetY/this.totalY).toFixed(2);
            if (opacity >1) { opacity = 1 };      
           let style = { backgroundColor:`rgba(255, 0, 0, ${opacity})`, transition:'all 0.2s'};
           return style;
        }
    }
});
var rootElement = document.scrollingElement || docuemnt.body;
window.addEventListener("scroll",()=>(search.offsetY = rootElement.scrollTop),false) ;
setTimeout(()=>{
    var carousel = document.querySelector("#carousel");
    search.totalY = carousel.offsetHeight;console.log(carousel.offsetHeight)},1000)


})();

(function () {
    pics = [{ url:'./img/appcenter1.png', title:'超市'},
            {url:'./img/appcenter2.png', title:'全球购'},
            { url:'./img/appcenter1.png', title:'超市'},
            {url:'./img/appcenter2.png', title:'全球购'},
            { url:'./img/appcenter1.png', title:'超市'},
            {url:'./img/appcenter2.png', title:'全球购'},
            { url:'./img/appcenter1.png', title:'超市'},
            {url:'./img/appcenter2.png', title:'全球购'},
            { url:'./img/appcenter1.png', title:'超市'},
            {url:'./img/appcenter2.png', title:'全球购'},]

    var appcenter = new Vue({
        el: "#appcenter",
        data: {
            pics,
            activity:'./img/activity1.jpg',
            content: null,
            searchtext: '每满100减10'
        }
    })
})();
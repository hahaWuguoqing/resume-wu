var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/_custom');
require('./common/libs/zepto-modules/touch');
require('./common/libs/zepto-modules/ajax');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

// edit index
$(".swiper-container").show();
$("#mainContainer").hide();
// $(".swiper-container").hide();
// $("#mainContainer").show();

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAni.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});

//音乐
function play_music() {
    if ($('#mc_play').hasClass('on')) {
        $('#mc_play audio').get(0).pause();
        $('#mc_play').attr('class', 'stop');
    } else {
        $('#mc_play audio').get(0).play();
        $('#mc_play').attr('class', 'on');
    }
    $('#music_play_filter').hide();
    event.stopPropagation(); //阻止冒泡 
}

var play_filter = document.getElementById('mc_play');
play_filter.addEventListener('click', function() {
    play_music();
});

$("#enter").click(function() {
    $(".swiper-container").hide();
    $("#mainContainer").show()
    $.post('http://localhost:8000/skill', function(data) {
        console.log(data);
        // var myScroll;
        myScroll = new IScroll('#wrapper', { mouseWheel: true, tap: true });
        document.getElementById('me').addEventListener('tap', function() {
            this.style.background = !this.style.background ? '#a00' : '';
        }, false);
        document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    })
})

/*var myScroll;
myScroll = new IScroll('#wrapper', { mouseWheel: true, tap: true });
document.getElementById('me').addEventListener('tap', function() {
    this.style.background = !this.style.background ? '#a00' : '';
}, false);
document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);*/
/*
$.post('http://localhost:8000/skill', function(response) {
    //var  strresponse = JSON.parse(response[0]);
    console.log(JSON.stringify(response[0]).length);
    var str = '';
    for (var i = 0; i < response.length; i++) {
        str += "<li>" + response[i].category;
       
        str += "</li>";
    }
    $("#scroller").find("ul").html(str);
})
*/

addjson("skill");

$("#footer").find(".icons").click(function() {
    var index = $(this).index();    
    $('.list').eq(index).css('display','block').siblings('.list').css("display",'none');   
    $(this).css("color", "royalblue").siblings('.icons').css("color", "white");   
})


function addjson(jsonname) {
    $.post('http://localhost:8000/' + jsonname, function(response) {
        var str = "";
        var str1="";
        for (var i = 0; i < response.length; i++) {
            
            for (var each in response[i]) {
                if (each == "image") {

                	str= "<img src = '" + response[i][each] + "'/>";
                	$("#scroller").find(".picskil").eq(i).html(str);
                } else {
                	str1= '<p>' + response[i].category + '</p>'+'<p>' + response[i].name + '</p>'+'<p>' + response[i].time + '</p>'+'<p>' + response[i].level + '</p>';
                	$("#scroller").find(".text").eq(i).html(str1);
                }               	
            }        	
        }
        console.log(response);
        
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

        myScroll.scrollTo(0,0);
		myScroll.refresh();
    })
}


function addjsonitem(jsonname) {
    $.post('http://localhost:8000/' + jsonname, function(response) {

        var str = "";
        var str1="";
        for (var i = 0; i < response.length; i++) {
            
            for (var each in response[i]) {
                if (each == "image") {

                	str= "<img src = '" + response[i][each] + "'/>";
                	$("#scroller").find(".picpro").eq(i).html(str);
                } else {
                	str1= '<p>' + response[i].category + '</p>'+'<p>' + response[i].name+'<p>' + response[i].url + '</p>' + '</p>'+'<p>' + response[i].description + '</p>'+'<p>' + response[i].detail + '</p>'+ '</p>'+'<p>' + response[i].teach + '</p>';
                	$("#scroller").find(".text1").eq(i).html(str1);
                }               	
            }        	
        }
        console.log(response);
        
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

        myScroll.scrollTo(0,0);
		myScroll.refresh();
    })
}

addjsonitem("project");

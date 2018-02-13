var newMovies = localStorage.getItem("newMovies");
var art = localStorage.getItem("art");
var cartoon = localStorage.getItem("cartoon");
var comedy = localStorage.getItem("comedy");
var fantasy = localStorage.getItem("fantasy");
var love = localStorage.getItem("love");
var thriller = localStorage.getItem("thriller");
var classifys = localStorage.getItem("classifys");
var carousel = localStorage.getItem("carousel");

newMovies = JSON.parse(newMovies);
art = JSON.parse(art);
cartoon = JSON.parse(cartoon);
comedy = JSON.parse(comedy);
fantasy = JSON.parse(fantasy);
love = JSON.parse(love);
thriller = JSON.parse(thriller);
classifys = JSON.parse(classifys);
carousel = JSON.parse(carousel);

function onloadCarousel() {
    document.getElementById("carousel").innerHTML = carousel[7].html;
}

window.onload = function () {
    /**
     * 载入轮播图html,由于存到webstorage之后，自动轮播失效，临时取消此方法
     * onloadCarousel();
     */

    //显示菜单分类信息
    classify();
    //菜单页面跳转
    skip();
    //将每部电影的url拼接成为唯一值，同时完成豆瓣评分和轮播图
    detailSkip();
    // 搜索
    IndexSearch();
};

//显示菜单分类信息
function classify() {
    document.getElementById("classify1").innerHTML = classifys[0].classify1;
    document.getElementById("classify2").innerHTML = classifys[0].classify2;
    document.getElementById("classify3").innerHTML = classifys[0].classify3;
    document.getElementById("classify4").innerHTML = classifys[0].classify4;
    document.getElementById("classify5").innerHTML = classifys[0].classify5;
    document.getElementById("classify6").innerHTML = classifys[0].classify6;
    document.getElementById("classify7").innerHTML = classifys[0].classify7;
}

//实现菜单页面跳转
function skip() {
    var url = location.search;

    if (url === "?index") {
        indexTitle();
        indexImage();
        indexRating();
        indexCarousel();
        document.getElementById("menuIndex").className = "active";
    } else if (url === "?art") {
        artTitle();
        artImage();
        artRating();
        artCarousel();
        document.getElementById("menuArt").className = "active";
    } else if (url === "?cartoon") {
        cartoonTitle();
        cartoonImage();
        cartoonRating();
        cartoonCarousel();
        document.getElementById("menuCartoon").className = "active";
    } else if (url === "?comedy") {
        comedyTitle();
        comedyImage();
        comedyRating();
        comedyCarousel();
        document.getElementById("menuComedy").className = "active";
    } else if (url === "?fantasy") {
        fantasyTitle();
        fantasyImage();
        fantasyRating();
        fantasyCarousel();
        document.getElementById("menuFantasy").className = "active";
    } else if (url === "?love") {
        loveTitle();
        loveImage();
        loveRating();
        loveCarousel();
        document.getElementById("menuLove").className = "active";
    } else if (url === "?thriller") {
        thrillerTitle();
        thrillerImage();
        thrillerRating();
        thrillerCarousel();
        document.getElementById("menuThriller").className = "active";
    } else {
        indexTitle();
        indexImage();
        indexRating();
        indexCarousel();
        document.getElementById("menuIndex").className = "active";
    }
}

function indexTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = newMovies[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = newMovies[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = newMovies[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = newMovies[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = newMovies[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = newMovies[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = newMovies[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = newMovies[7].title;
}

function indexImage() {
    document.getElementById("image1").src = newMovies[0].image;

    document.getElementById("image2").src = newMovies[1].image;

    document.getElementById("image3").src = newMovies[2].image;

    document.getElementById("image4").src = newMovies[3].image;

    document.getElementById("image5").src = newMovies[4].image;

    document.getElementById("image6").src = newMovies[5].image;

    document.getElementById("image7").src = newMovies[6].image;

    document.getElementById("image8").src = newMovies[7].image;
}

function artTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = art[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = art[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = art[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = art[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = art[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = art[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = art[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = art[7].title;
}

function artImage() {
    document.getElementById("image1").src = art[0].image;

    document.getElementById("image2").src = art[1].image;

    document.getElementById("image3").src = art[2].image;

    document.getElementById("image4").src = art[3].image;

    document.getElementById("image5").src = art[4].image;

    document.getElementById("image6").src = art[5].image;

    document.getElementById("image7").src = art[6].image;

    document.getElementById("image8").src = art[7].image;
}

function cartoonTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = cartoon[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = cartoon[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = cartoon[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = cartoon[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = cartoon[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = cartoon[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = cartoon[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = cartoon[7].title;
}

function cartoonImage() {
    document.getElementById("image1").src = cartoon[0].image;

    document.getElementById("image2").src = cartoon[1].image;

    document.getElementById("image3").src = cartoon[2].image;

    document.getElementById("image4").src = cartoon[3].image;

    document.getElementById("image5").src = cartoon[4].image;

    document.getElementById("image6").src = cartoon[5].image;

    document.getElementById("image7").src = cartoon[6].image;

    document.getElementById("image8").src = cartoon[7].image;
}

function comedyTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = comedy[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = comedy[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = comedy[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = comedy[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = comedy[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = comedy[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = comedy[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = comedy[7].title;
}

function comedyImage() {
    document.getElementById("image1").src = comedy[0].image;

    document.getElementById("image2").src = comedy[1].image;

    document.getElementById("image3").src = comedy[2].image;

    document.getElementById("image4").src = comedy[3].image;

    document.getElementById("image5").src = comedy[4].image;

    document.getElementById("image6").src = comedy[5].image;

    document.getElementById("image7").src = comedy[6].image;

    document.getElementById("image8").src = comedy[7].image;
}

function fantasyTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = fantasy[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = fantasy[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = fantasy[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = fantasy[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = fantasy[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = fantasy[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = fantasy[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = fantasy[7].title;
}

function fantasyImage() {
    document.getElementById("image1").src = fantasy[0].image;

    document.getElementById("image2").src = fantasy[1].image;

    document.getElementById("image3").src = fantasy[2].image;

    document.getElementById("image4").src = fantasy[3].image;

    document.getElementById("image5").src = fantasy[4].image;

    document.getElementById("image6").src = fantasy[5].image;

    document.getElementById("image7").src = fantasy[6].image;

    document.getElementById("image8").src = fantasy[7].image;
}

function loveTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = love[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = love[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = love[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = love[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = love[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = love[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = love[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = love[7].title;
}

function loveImage() {
    document.getElementById("image1").src = love[0].image;

    document.getElementById("image2").src = love[1].image;

    document.getElementById("image3").src = love[2].image;

    document.getElementById("image4").src = love[3].image;

    document.getElementById("image5").src = love[4].image;

    document.getElementById("image6").src = love[5].image;

    document.getElementById("image7").src = love[6].image;

    document.getElementById("image8").src = love[7].image;
}

function thrillerTitle() {
    var title1 = document.getElementById("title1");
    title1.innerHTML = thriller[0].title;

    var title2 = document.getElementById("title2");
    title2.innerHTML = thriller[1].title;

    var title3 = document.getElementById("title3");
    title3.innerHTML = thriller[2].title;

    var title4 = document.getElementById("title4");
    title4.innerHTML = thriller[3].title;

    var title5 = document.getElementById("title5");
    title5.innerHTML = thriller[4].title;

    var title6 = document.getElementById("title6");
    title6.innerHTML = thriller[5].title;

    var title7 = document.getElementById("title7");
    title7.innerHTML = thriller[6].title;

    var title8 = document.getElementById("title8");
    title8.innerHTML = thriller[7].title;
}

function thrillerImage() {
    document.getElementById("image1").src = thriller[0].image;

    document.getElementById("image2").src = thriller[1].image;

    document.getElementById("image3").src = thriller[2].image;

    document.getElementById("image4").src = thriller[3].image;

    document.getElementById("image5").src = thriller[4].image;

    document.getElementById("image6").src = thriller[5].image;

    document.getElementById("image7").src = thriller[6].image;

    document.getElementById("image8").src = thriller[7].image;
}

function indexRating() {
    document.getElementById("indexRating1").innerHTML = newMovies[0].rating;
    document.getElementById("indexRating2").innerHTML = newMovies[1].rating;
    document.getElementById("indexRating3").innerHTML = newMovies[2].rating;
    document.getElementById("indexRating4").innerHTML = newMovies[3].rating;
    document.getElementById("indexRating5").innerHTML = newMovies[4].rating;
    document.getElementById("indexRating6").innerHTML = newMovies[5].rating;
    document.getElementById("indexRating7").innerHTML = newMovies[6].rating;
    document.getElementById("indexRating8").innerHTML = newMovies[7].rating;
}

function cartoonRating() {
    document.getElementById("indexRating1").innerHTML = cartoon[0].rating;
    document.getElementById("indexRating2").innerHTML = cartoon[1].rating;
    document.getElementById("indexRating3").innerHTML = cartoon[2].rating;
    document.getElementById("indexRating4").innerHTML = cartoon[3].rating;
    document.getElementById("indexRating5").innerHTML = cartoon[4].rating;
    document.getElementById("indexRating6").innerHTML = cartoon[5].rating;
    document.getElementById("indexRating7").innerHTML = cartoon[6].rating;
    document.getElementById("indexRating8").innerHTML = cartoon[7].rating;
}

function artRating() {
    document.getElementById("indexRating1").innerHTML = art[0].rating;
    document.getElementById("indexRating2").innerHTML = art[1].rating;
    document.getElementById("indexRating3").innerHTML = art[2].rating;
    document.getElementById("indexRating4").innerHTML = art[3].rating;
    document.getElementById("indexRating5").innerHTML = art[4].rating;
    document.getElementById("indexRating6").innerHTML = art[5].rating;
    document.getElementById("indexRating7").innerHTML = art[6].rating;
    document.getElementById("indexRating8").innerHTML = art[7].rating;
}

function comedyRating() {
    document.getElementById("indexRating1").innerHTML = comedy[0].rating;
    document.getElementById("indexRating2").innerHTML = comedy[1].rating;
    document.getElementById("indexRating3").innerHTML = comedy[2].rating;
    document.getElementById("indexRating4").innerHTML = comedy[3].rating;
    document.getElementById("indexRating5").innerHTML = comedy[4].rating;
    document.getElementById("indexRating6").innerHTML = comedy[5].rating;
    document.getElementById("indexRating7").innerHTML = comedy[6].rating;
    document.getElementById("indexRating8").innerHTML = comedy[7].rating;
}

function fantasyRating() {
    document.getElementById("indexRating1").innerHTML = fantasy[0].rating;
    document.getElementById("indexRating2").innerHTML = fantasy[1].rating;
    document.getElementById("indexRating3").innerHTML = fantasy[2].rating;
    document.getElementById("indexRating4").innerHTML = fantasy[3].rating;
    document.getElementById("indexRating5").innerHTML = fantasy[4].rating;
    document.getElementById("indexRating6").innerHTML = fantasy[5].rating;
    document.getElementById("indexRating7").innerHTML = fantasy[6].rating;
    document.getElementById("indexRating8").innerHTML = fantasy[7].rating;
}

function loveRating() {
    document.getElementById("indexRating1").innerHTML = love[0].rating;
    document.getElementById("indexRating2").innerHTML = love[1].rating;
    document.getElementById("indexRating3").innerHTML = love[2].rating;
    document.getElementById("indexRating4").innerHTML = love[3].rating;
    document.getElementById("indexRating5").innerHTML = love[4].rating;
    document.getElementById("indexRating6").innerHTML = love[5].rating;
    document.getElementById("indexRating7").innerHTML = love[6].rating;
    document.getElementById("indexRating8").innerHTML = love[7].rating;
}

function thrillerRating() {
    document.getElementById("indexRating1").innerHTML = thriller[0].rating;
    document.getElementById("indexRating2").innerHTML = thriller[1].rating;
    document.getElementById("indexRating3").innerHTML = thriller[2].rating;
    document.getElementById("indexRating4").innerHTML = thriller[3].rating;
    document.getElementById("indexRating5").innerHTML = thriller[4].rating;
    document.getElementById("indexRating6").innerHTML = thriller[5].rating;
    document.getElementById("indexRating7").innerHTML = thriller[6].rating;
    document.getElementById("indexRating8").innerHTML = thriller[7].rating;
}

function indexCarousel() {
    document.getElementById("carousel1").src = carousel[0].image1;
    document.getElementById("carousel2").src = carousel[0].image2;
    document.getElementById("carousel3").src = carousel[0].image3;
    document.getElementById("carouselUrl1").href = carousel[0].url;
    document.getElementById("carouselUrl2").href = carousel[0].url;
    document.getElementById("carouselUrl3").href = carousel[0].url;
}

function artCarousel() {
    document.getElementById("carousel1").src = carousel[4].image1;
    document.getElementById("carousel2").src = carousel[4].image2;
    document.getElementById("carousel3").src = carousel[4].image3;
    document.getElementById("carouselUrl1").href = carousel[4].url;
    document.getElementById("carouselUrl2").href = carousel[4].url;
    document.getElementById("carouselUrl3").href = carousel[4].url;
}

function cartoonCarousel() {
    document.getElementById("carousel1").src = carousel[5].image1;
    document.getElementById("carousel2").src = carousel[5].image2;
    document.getElementById("carousel3").src = carousel[5].image3;
    document.getElementById("carouselUrl1").href = carousel[5].url;
    document.getElementById("carouselUrl2").href = carousel[5].url;
    document.getElementById("carouselUrl3").href = carousel[5].url;
}

function comedyCarousel() {
    document.getElementById("carousel1").src = carousel[3].image1;
    document.getElementById("carousel2").src = carousel[3].image2;
    document.getElementById("carousel3").src = carousel[3].image3;
    document.getElementById("carouselUrl1").href = carousel[3].url;
    document.getElementById("carouselUrl2").href = carousel[3].url;
    document.getElementById("carouselUrl3").href = carousel[3].url;
}

function fantasyCarousel() {
    document.getElementById("carousel1").src = carousel[1].image1;
    document.getElementById("carousel2").src = carousel[1].image2;
    document.getElementById("carousel3").src = carousel[1].image3;
    document.getElementById("carouselUrl1").href = carousel[1].url;
    document.getElementById("carouselUrl2").href = carousel[1].url;
    document.getElementById("carouselUrl3").href = carousel[1].url;
}

function loveCarousel() {
    document.getElementById("carousel1").src = carousel[2].image1;
    document.getElementById("carousel2").src = carousel[2].image2;
    document.getElementById("carousel3").src = carousel[2].image3;
    document.getElementById("carouselUrl1").href = carousel[2].url;
    document.getElementById("carouselUrl2").href = carousel[2].url;
    document.getElementById("carouselUrl3").href = carousel[2].url;
}

function thrillerCarousel() {
    document.getElementById("carousel1").src = carousel[6].image1;
    document.getElementById("carousel2").src = carousel[6].image2;
    document.getElementById("carousel3").src = carousel[6].image3;
    document.getElementById("carouselUrl1").href = carousel[6].url;
    document.getElementById("carouselUrl2").href = carousel[6].url;
    document.getElementById("carouselUrl3").href = carousel[6].url;
}

//实现将每部电影的url拼接成为唯一值
function detailSkip() {
    var detailUrl1;
    var detailUrl2;
    var detailUrl3;
    var detailUrl4;
    var detailUrl5;
    var detailUrl6;
    var detailUrl7;
    var detailUrl8;
    var ids1;
    var ids2;
    var ids3;
    var ids4;
    var ids5;
    var ids6;
    var ids7;
    var ids8;
    var url = location.search;

    if (url === "?index") {
        ids1 = newMovies[0].id;
        ids2 = newMovies[1].id;
        ids3 = newMovies[2].id;
        ids4 = newMovies[3].id;
        ids5 = newMovies[4].id;
        ids6 = newMovies[5].id;
        ids7 = newMovies[6].id;
        ids8 = newMovies[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    } else if (url === "?art") {
        ids1 = art[0].id;
        ids2 = art[1].id;
        ids3 = art[2].id;
        ids4 = art[3].id;
        ids5 = art[4].id;
        ids6 = art[5].id;
        ids7 = art[6].id;
        ids8 = art[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    }
    else if (url === "?cartoon") {
        ids1 = cartoon[0].id;
        ids2 = cartoon[1].id;
        ids3 = cartoon[2].id;
        ids4 = cartoon[3].id;
        ids5 = cartoon[4].id;
        ids6 = cartoon[5].id;
        ids7 = cartoon[6].id;
        ids8 = cartoon[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    } else if (url === "?comedy") {
        ids1 = comedy[0].id;
        ids2 = comedy[1].id;
        ids3 = comedy[2].id;
        ids4 = comedy[3].id;
        ids5 = comedy[4].id;
        ids6 = comedy[5].id;
        ids7 = comedy[6].id;
        ids8 = comedy[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    } else if (url === "?fantasy") {
        ids1 = fantasy[0].id;
        ids2 = fantasy[1].id;
        ids3 = fantasy[2].id;
        ids4 = fantasy[3].id;
        ids5 = fantasy[4].id;
        ids6 = fantasy[5].id;
        ids7 = fantasy[6].id;
        ids8 = fantasy[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    } else if (url === "?love") {
        ids1 = love[0].id;
        ids2 = love[1].id;
        ids3 = love[2].id;
        ids4 = love[3].id;
        ids5 = love[4].id;
        ids6 = love[5].id;
        ids7 = love[6].id;
        ids8 = love[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    } else if (url === "?thriller") {
        ids1 = thriller[0].id;
        ids2 = thriller[1].id;
        ids3 = thriller[2].id;
        ids4 = thriller[3].id;
        ids5 = thriller[4].id;
        ids6 = thriller[5].id;
        ids7 = thriller[6].id;
        ids8 = thriller[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    } else {
        ids1 = newMovies[0].id;
        ids2 = newMovies[1].id;
        ids3 = newMovies[2].id;
        ids4 = newMovies[3].id;
        ids5 = newMovies[4].id;
        ids6 = newMovies[5].id;
        ids7 = newMovies[6].id;
        ids8 = newMovies[7].id;
        detailUrl1 = "single.html" + "?" + ids1;
        detailUrl2 = "single.html" + "?" + ids2;
        detailUrl3 = "single.html" + "?" + ids3;
        detailUrl4 = "single.html" + "?" + ids4;
        detailUrl5 = "single.html" + "?" + ids5;
        detailUrl6 = "single.html" + "?" + ids6;
        detailUrl7 = "single.html" + "?" + ids7;
        detailUrl8 = "single.html" + "?" + ids8;
    }
    document.getElementById("title1").href = document.getElementById("detailUrl1").href = detailUrl1;
    document.getElementById("title2").href = document.getElementById("detailUrl2").href = detailUrl2;
    document.getElementById("title3").href = document.getElementById("detailUrl3").href = detailUrl3;
    document.getElementById("title4").href = document.getElementById("detailUrl4").href = detailUrl4;
    document.getElementById("title5").href = document.getElementById("detailUrl5").href = detailUrl5;
    document.getElementById("title6").href = document.getElementById("detailUrl6").href = detailUrl6;
    document.getElementById("title7").href = document.getElementById("detailUrl7").href = detailUrl7;
    document.getElementById("title8").href = document.getElementById("detailUrl8").href = detailUrl8;
}

function IndexSearch() {
    var search = document.getElementById('IndexOpenUrl');

    search.onclick = function () {
        var key = document.getElementById('IndexKey').value;
        var url = '404.html';

        switch (key) {
            case String(newMovies[0].id):
                url = 'single.html?' + newMovies[0].id;
                break;
            case String(newMovies[1].id):
                url = 'single.html?' + newMovies[1].id;
                break;
            case String(newMovies[2].id):
                url = 'single.html?' + newMovies[2].id;
                break;
            case String(newMovies[3].id):
                url = 'single.html?' + newMovies[3].id;
                break;
            case String(newMovies[4].id):
                url = 'single.html?' + newMovies[4].id;
                break;
            case String(newMovies[5].id):
                url = 'single.html?' + newMovies[5].id;
                break;
            case String(newMovies[6].id):
                url = 'single.html?' + newMovies[6].id;
                break;
            case String(art[0].id):
                url = 'single.html?' + art[0].id;
                break;
            case String(art[1].id):
                url = 'single.html?' + art[1].id;
                break;
            case String(art[2].id):
                url = 'single.html?' + art[2].id;
                break;
            case String(art[3].id):
                url = 'single.html?' + art[3].id;
                break;
            case String(art[4].id):
                url = 'single.html?' + art[4].id;
                break;
            case String(art[5].id):
                url = 'single.html?' + art[5].id;
                break;
            case String(art[6].id):
                url = 'single.html?' + art[6].id;
                break;
            case String(cartoon[0].id):
                url = 'single.html?' + cartoon[0].id;
                break;
            case String(cartoon[1].id):
                url = 'single.html?' + cartoon[1].id;
                break;
            case String(cartoon[2].id):
                url = 'single.html?' + cartoon[2].id;
                break;
            case String(cartoon[3].id):
                url = 'single.html?' + cartoon[3].id;
                break;
            case String(cartoon[4].id):
                url = 'single.html?' + cartoon[4].id;
                break;
            case String(cartoon[5].id):
                url = 'single.html?' + cartoon[5].id;
                break;
            case String(cartoon[6].id):
                url = 'single.html?' + cartoon[6].id;
                break;
            case String(comedy[0].id):
                url = 'single.html?' + comedy[0].id;
                break;
            case String(comedy[1].id):
                url = 'single.html?' + comedy[1].id;
                break;
            case String(comedy[2].id):
                url = 'single.html?' + comedy[2].id;
                break;
            case String(comedy[3].id):
                url = 'single.html?' + comedy[3].id;
                break;
            case String(comedy[4].id):
                url = 'single.html?' + comedy[4].id;
                break;
            case String(comedy[5].id):
                url = 'single.html?' + comedy[5].id;
                break;
            case String(comedy[6].id):
                url = 'single.html?' + comedy[6].id;
                break;
            case String(fantasy[0].id):
                url = 'single.html?' + fantasy[0].id;
                break;
            case String(fantasy[1].id):
                url = 'single.html?' + fantasy[1].id;
                break;
            case String(fantasy[2].id):
                url = 'single.html?' + fantasy[2].id;
                break;
            case String(fantasy[3].id):
                url = 'single.html?' + fantasy[3].id;
                break;
            case String(fantasy[4].id):
                url = 'single.html?' + fantasy[4].id;
                break;
            case String(fantasy[5].id):
                url = 'single.html?' + fantasy[5].id;
                break;
            case String(fantasy[6].id):
                url = 'single.html?' + fantasy[6].id;
                break;
            case String(love[0].id):
                url = 'single.html?' + love[0].id;
                break;
            case String(love[1].id):
                url = 'single.html?' + love[1].id;
                break;
            case String(love[2].id):
                url = 'single.html?' + love[2].id;
                break;
            case String(love[3].id):
                url = 'single.html?' + love[3].id;
                break;
            case String(love[4].id):
                url = 'single.html?' + love[4].id;
                break;
            case String(love[5].id):
                url = 'single.html?' + love[5].id;
                break;
            case String(love[6].id):
                url = 'single.html?' + love[6].id;
                break;
            case String(thriller[0].id):
                url = 'single.html?' + thriller[0].id;
                break;
            case String(thriller[1].id):
                url = 'single.html?' + thriller[1].id;
                break;
            case String(thriller[2].id):
                url = 'single.html?' + thriller[2].id;
                break;
            case String(thriller[3].id):
                url = 'single.html?' + thriller[3].id;
                break;
            case String(thriller[4].id):
                url = 'single.html?' + thriller[4].id;
                break;
            case String(thriller[5].id):
                url = 'single.html?' + thriller[5].id;
                break;
            case String(thriller[6].id):
                url = 'single.html?' + thriller[6].id;
                break;
            case newMovies[0].title:
                url = 'single.html?' + newMovies[0].id;
                break;
            case newMovies[1].title:
                url = 'single.html?' + newMovies[1].id;
                break;
            case newMovies[2].title:
                url = 'single.html?' + newMovies[2].id;
                break;
            case newMovies[3].title:
                url = 'single.html?' + newMovies[3].id;
                break;
            case newMovies[4].title:
                url = 'single.html?' + newMovies[4].id;
                break;
            case newMovies[5].title:
                url = 'single.html?' + newMovies[5].id;
                break;
            case newMovies[6].title:
                url = 'single.html?' + newMovies[6].id;
                break;
            case art[0].title:
                url = 'single.html?' + art[0].id;
                break;
            case art[1].title:
                url = 'single.html?' + art[1].id;
                break;
            case art[2].title:
                url = 'single.html?' + art[2].id;
                break;
            case art[3].title:
                url = 'single.html?' + art[3].id;
                break;
            case art[4].title:
                url = 'single.html?' + art[4].id;
                break;
            case art[5].title:
                url = 'single.html?' + art[5].id;
                break;
            case art[6].title:
                url = 'single.html?' + art[6].id;
                break;
            case cartoon[0].title:
                url = 'single.html?' + cartoon[0].id;
                break;
            case cartoon[1].title:
                url = 'single.html?' + cartoon[1].id;
                break;
            case cartoon[2].title:
                url = 'single.html?' + cartoon[2].id;
                break;
            case cartoon[3].title:
                url = 'single.html?' + cartoon[3].id;
                break;
            case cartoon[4].title:
                url = 'single.html?' + cartoon[4].id;
                break;
            case cartoon[5].title:
                url = 'single.html?' + cartoon[5].id;
                break;
            case cartoon[6].title:
                url = 'single.html?' + cartoon[6].id;
                break;
            case comedy[0].title:
                url = 'single.html?' + comedy[0].id;
                break;
            case comedy[1].title:
                url = 'single.html?' + comedy[1].id;
                break;
            case comedy[2].title:
                url = 'single.html?' + comedy[2].id;
                break;
            case comedy[3].title:
                url = 'single.html?' + comedy[3].id;
                break;
            case comedy[4].title:
                url = 'single.html?' + comedy[4].id;
                break;
            case comedy[5].title:
                url = 'single.html?' + comedy[5].id;
                break;
            case comedy[6].title:
                url = 'single.html?' + comedy[6].id;
                break;
            case fantasy[0].title:
                url = 'single.html?' + fantasy[0].id;
                break;
            case fantasy[1].title:
                url = 'single.html?' + fantasy[1].id;
                break;
            case fantasy[2].title:
                url = 'single.html?' + fantasy[2].id;
                break;
            case fantasy[3].title:
                url = 'single.html?' + fantasy[3].id;
                break;
            case fantasy[4].title:
                url = 'single.html?' + fantasy[4].id;
                break;
            case fantasy[5].title:
                url = 'single.html?' + fantasy[5].id;
                break;
            case fantasy[6].title:
                url = 'single.html?' + fantasy[6].id;
                break;
            case love[0].title:
                url = 'single.html?' + love[0].id;
                break;
            case love[1].title:
                url = 'single.html?' + love[1].id;
                break;
            case love[2].title:
                url = 'single.html?' + love[2].id;
                break;
            case love[3].title:
                url = 'single.html?' + love[3].id;
                break;
            case love[4].title:
                url = 'single.html?' + love[4].id;
                break;
            case love[5].title:
                url = 'single.html?' + love[5].id;
                break;
            case love[6].title:
                url = 'single.html?' + love[6].id;
                break;
            case thriller[0].title:
                url = 'single.html?' + thriller[0].id;
                break;
            case thriller[1].title:
                url = 'single.html?' + thriller[1].id;
                break;
            case thriller[2].title:
                url = 'single.html?' + thriller[2].id;
                break;
            case thriller[3].title:
                url = 'single.html?' + thriller[3].id;
                break;
            case thriller[4].title:
                url = 'single.html?' + thriller[4].id;
                break;
            case thriller[5].title:
                url = 'single.html?' + thriller[5].id;
                break;
            case thriller[6].title:
                url = 'single.html?' + thriller[6].id;
                break;
        }
        window.open(url);
    }
}
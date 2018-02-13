var newMovies = localStorage.getItem("newMovies");
var art = localStorage.getItem("art");
var cartoon = localStorage.getItem("cartoon");
var comedy = localStorage.getItem("comedy");
var fantasy = localStorage.getItem("fantasy");
var love = localStorage.getItem("love");
var thriller = localStorage.getItem("thriller");
var classifys = localStorage.getItem("classifys");

newMovies = JSON.parse(newMovies);
art = JSON.parse(art);
cartoon = JSON.parse(cartoon);
comedy = JSON.parse(comedy);
fantasy = JSON.parse(fantasy);
love = JSON.parse(love);
thriller = JSON.parse(thriller);
classifys = JSON.parse(classifys);

window.onload = function () {
    // 电影分类信息
    classify();
    // 电影详情
    detail();
    // 相关推荐
    like();
    // 搜索
    SingleSearch();
};

//显示菜单分类信息
function classify() {
    document.getElementById("classify1.1").innerHTML = classifys[0].classify1;
    document.getElementById("classify1.2").innerHTML = classifys[0].classify2;
    document.getElementById("classify1.3").innerHTML = classifys[0].classify3;
    document.getElementById("classify1.4").innerHTML = classifys[0].classify4;
    document.getElementById("classify1.5").innerHTML = classifys[0].classify5;
    document.getElementById("classify1.6").innerHTML = classifys[0].classify6;
    document.getElementById("classify1.7").innerHTML = classifys[0].classify7;
}

// 实现电影详情，剧情简介和评论
function detail() {
    var url = location.search;
    var id = document.getElementById("id");
    var year = document.getElementById("year");
    var title = document.getElementById("title");
    var rating = document.getElementById("rating");
    var original_title = document.getElementById("original_title");
    var directors = document.getElementById("directors");
    var casts = document.getElementById("casts");
    var genres = document.getElementById("genres");
    var synopsis = document.getElementById("synopsis");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");

    // 主页
    if (url === "?" + newMovies[0].id) {
        id.innerHTML = newMovies[0].id;
        // // alt.innerHTML = newMovies[0].alt;
        year.innerHTML = newMovies[0].year;
        title.innerHTML = newMovies[0].title;
        rating.innerHTML = newMovies[0].rating;
        original_title.innerHTML = newMovies[0].original_title;
        directors.innerHTML = newMovies[0].directors;
        casts.innerHTML = newMovies[0].casts;
        genres.innerHTML = newMovies[0].genres;
        document.getElementById("image").src = newMovies[0].image;
        synopsis.innerHTML = newMovies[0].synopsis;
        comment1.innerHTML = newMovies[0].comment1;
        comment2.innerHTML = newMovies[0].comment2;
        document.getElementById("douban").href = newMovies[0].alt;
    } else if (url === "?" + newMovies[1].id) {
        id.innerHTML = newMovies[1].id;
        // alt.innerHTML = newMovies[1].alt;
        year.innerHTML = newMovies[1].year;
        title.innerHTML = newMovies[1].title;
        rating.innerHTML = newMovies[1].rating;
        original_title.innerHTML = newMovies[1].original_title;
        directors.innerHTML = newMovies[1].directors;
        casts.innerHTML = newMovies[1].casts;
        genres.innerHTML = newMovies[1].genres;
        document.getElementById("image").src = newMovies[1].image;
        synopsis.innerHTML = newMovies[1].synopsis;
        comment1.innerHTML = newMovies[1].comment1;
        comment2.innerHTML = newMovies[1].comment2;
        document.getElementById("douban").href = newMovies[1].alt;
    } else if (url === "?" + newMovies[2].id) {
        id.innerHTML = newMovies[2].id;
        // alt.innerHTML = newMovies[2].alt;
        year.innerHTML = newMovies[2].year;
        title.innerHTML = newMovies[2].title;
        rating.innerHTML = newMovies[2].rating;
        original_title.innerHTML = newMovies[2].original_title;
        directors.innerHTML = newMovies[2].directors;
        casts.innerHTML = newMovies[2].casts;
        genres.innerHTML = newMovies[2].genres;
        document.getElementById("image").src = newMovies[2].image;
        synopsis.innerHTML = newMovies[2].synopsis;
        comment1.innerHTML = newMovies[2].comment1;
        comment2.innerHTML = newMovies[2].comment2;
        document.getElementById("douban").href = newMovies[2].alt;
    } else if (url === "?" + newMovies[3].id) {
        id.innerHTML = newMovies[3].id;
        // alt.innerHTML = newMovies[3].alt;
        year.innerHTML = newMovies[3].year;
        title.innerHTML = newMovies[3].title;
        rating.innerHTML = newMovies[3].rating;
        original_title.innerHTML = newMovies[3].original_title;
        directors.innerHTML = newMovies[3].directors;
        casts.innerHTML = newMovies[3].casts;
        genres.innerHTML = newMovies[3].genres;
        document.getElementById("image").src = newMovies[3].image;
        synopsis.innerHTML = newMovies[3].synopsis;
        comment1.innerHTML = newMovies[3].comment1;
        comment2.innerHTML = newMovies[3].comment2;
        document.getElementById("douban").href = newMovies[3].alt;
    } else if (url === "?" + newMovies[4].id) {
        id.innerHTML = newMovies[4].id;
        // alt.innerHTML = newMovies[4].alt;
        year.innerHTML = newMovies[4].year;
        title.innerHTML = newMovies[4].title;
        rating.innerHTML = newMovies[4].rating;
        original_title.innerHTML = newMovies[4].original_title;
        directors.innerHTML = newMovies[4].directors;
        casts.innerHTML = newMovies[4].casts;
        genres.innerHTML = newMovies[4].genres;
        document.getElementById("image").src = newMovies[4].image;
        synopsis.innerHTML = newMovies[4].synopsis;
        comment1.innerHTML = newMovies[4].comment1;
        comment2.innerHTML = newMovies[4].comment2;
        document.getElementById("douban").href = newMovies[4].alt;
    } else if (url === "?" + newMovies[5].id) {
        id.innerHTML = newMovies[5].id;
        // alt.innerHTML = newMovies[5].alt;
        year.innerHTML = newMovies[5].year;
        title.innerHTML = newMovies[5].title;
        rating.innerHTML = newMovies[5].rating;
        original_title.innerHTML = newMovies[5].original_title;
        directors.innerHTML = newMovies[5].directors;
        casts.innerHTML = newMovies[5].casts;
        genres.innerHTML = newMovies[5].genres;
        document.getElementById("image").src = newMovies[5].image;
        synopsis.innerHTML = newMovies[5].synopsis;
        comment1.innerHTML = newMovies[5].comment1;
        comment2.innerHTML = newMovies[5].comment2;
        document.getElementById("douban").href = newMovies[5].alt;
    } else if (url === "?" + newMovies[6].id) {
        id.innerHTML = newMovies[6].id;
        // alt.innerHTML = newMovies[6].alt;
        year.innerHTML = newMovies[6].year;
        title.innerHTML = newMovies[6].title;
        rating.innerHTML = newMovies[6].rating;
        original_title.innerHTML = newMovies[6].original_title;
        directors.innerHTML = newMovies[6].directors;
        casts.innerHTML = newMovies[6].casts;
        genres.innerHTML = newMovies[6].genres;
        document.getElementById("image").src = newMovies[6].image;
        synopsis.innerHTML = newMovies[6].synopsis;
        comment1.innerHTML = newMovies[6].comment1;
        comment2.innerHTML = newMovies[6].comment2;
        document.getElementById("douban").href = newMovies[6].alt;
    } else if (url === "?" + newMovies[7].id) {
        id.innerHTML = newMovies[7].id;
        // alt.innerHTML = newMovies[7].alt;
        year.innerHTML = newMovies[7].year;
        title.innerHTML = newMovies[7].title;
        rating.innerHTML = newMovies[7].rating;
        original_title.innerHTML = newMovies[7].original_title;
        directors.innerHTML = newMovies[7].directors;
        casts.innerHTML = newMovies[7].casts;
        genres.innerHTML = newMovies[7].genres;
        document.getElementById("image").src = newMovies[7].image;
        synopsis.innerHTML = newMovies[7].synopsis;
        comment1.innerHTML = newMovies[7].comment1;
        comment2.innerHTML = newMovies[7].comment2;
        document.getElementById("douban").href = newMovies[7].alt;
    }

    // 奇幻
    else if (url === "?" + fantasy[0].id) {
        id.innerHTML = fantasy[0].id;
        // alt.innerHTML = fantasy[0].alt;
        year.innerHTML = fantasy[0].year;
        title.innerHTML = fantasy[0].title;
        rating.innerHTML = fantasy[0].rating;
        original_title.innerHTML = fantasy[0].original_title;
        directors.innerHTML = fantasy[0].directors;
        casts.innerHTML = fantasy[0].casts;
        genres.innerHTML = fantasy[0].genres;
        document.getElementById("image").src = fantasy[0].image;
        synopsis.innerHTML = fantasy[0].synopsis;
        comment1.innerHTML = fantasy[0].comment1;
        comment2.innerHTML = fantasy[0].comment2;
        document.getElementById("douban").href = fantasy[0].alt;
    } else if (url === "?" + fantasy[1].id) {
        id.innerHTML = fantasy[1].id;
        // alt.innerHTML = fantasy[1].alt;
        year.innerHTML = fantasy[1].year;
        title.innerHTML = fantasy[1].title;
        rating.innerHTML = fantasy[1].rating;
        original_title.innerHTML = fantasy[1].original_title;
        directors.innerHTML = fantasy[1].directors;
        casts.innerHTML = fantasy[1].casts;
        genres.innerHTML = fantasy[1].genres;
        document.getElementById("image").src = fantasy[1].image;
        synopsis.innerHTML = fantasy[1].synopsis;
        comment1.innerHTML = fantasy[1].comment1;
        comment2.innerHTML = fantasy[1].comment2;
        document.getElementById("douban").href = fantasy[1].alt;
    } else if (url === "?" + fantasy[2].id) {
        id.innerHTML = fantasy[2].id;
        // alt.innerHTML = fantasy[2].alt;
        year.innerHTML = fantasy[2].year;
        title.innerHTML = fantasy[2].title;
        rating.innerHTML = fantasy[2].rating;
        original_title.innerHTML = fantasy[2].original_title;
        directors.innerHTML = fantasy[2].directors;
        casts.innerHTML = fantasy[2].casts;
        genres.innerHTML = fantasy[2].genres;
        document.getElementById("image").src = fantasy[2].image;
        synopsis.innerHTML = fantasy[2].synopsis;
        comment1.innerHTML = fantasy[2].comment1;
        comment2.innerHTML = fantasy[2].comment2;
        document.getElementById("douban").href = fantasy[2].alt;
    } else if (url === "?" + fantasy[3].id) {
        id.innerHTML = fantasy[3].id;
        // alt.innerHTML = fantasy[3].alt;
        year.innerHTML = fantasy[3].year;
        title.innerHTML = fantasy[3].title;
        rating.innerHTML = fantasy[3].rating;
        original_title.innerHTML = fantasy[3].original_title;
        directors.innerHTML = fantasy[3].directors;
        casts.innerHTML = fantasy[3].casts;
        genres.innerHTML = fantasy[3].genres;
        document.getElementById("image").src = fantasy[3].image;
        synopsis.innerHTML = fantasy[3].synopsis;
        comment1.innerHTML = fantasy[3].comment1;
        comment2.innerHTML = fantasy[3].comment2;
        document.getElementById("douban").href = fantasy[3].alt;
    } else if (url === "?" + fantasy[4].id) {
        id.innerHTML = fantasy[4].id;
        // alt.innerHTML = fantasy[4].alt;
        year.innerHTML = fantasy[4].year;
        title.innerHTML = fantasy[4].title;
        rating.innerHTML = fantasy[4].rating;
        original_title.innerHTML = fantasy[4].original_title;
        directors.innerHTML = fantasy[4].directors;
        casts.innerHTML = fantasy[4].casts;
        genres.innerHTML = fantasy[4].genres;
        document.getElementById("image").src = fantasy[4].image;
        synopsis.innerHTML = fantasy[4].synopsis;
        comment1.innerHTML = fantasy[4].comment1;
        comment2.innerHTML = fantasy[4].comment2;
        document.getElementById("douban").href = fantasy[4].alt;
    } else if (url === "?" + fantasy[5].id) {
        id.innerHTML = fantasy[5].id;
        // alt.innerHTML = fantasy[5].alt;
        year.innerHTML = fantasy[5].year;
        title.innerHTML = fantasy[5].title;
        rating.innerHTML = fantasy[5].rating;
        original_title.innerHTML = fantasy[5].original_title;
        directors.innerHTML = fantasy[5].directors;
        casts.innerHTML = fantasy[5].casts;
        genres.innerHTML = fantasy[5].genres;
        document.getElementById("image").src = fantasy[5].image;
        synopsis.innerHTML = fantasy[5].synopsis;
        comment1.innerHTML = fantasy[5].comment1;
        comment2.innerHTML = fantasy[5].comment2;
        document.getElementById("douban").href = fantasy[5].alt;
    } else if (url === "?" + fantasy[6].id) {
        id.innerHTML = fantasy[6].id;
        // alt.innerHTML = fantasy[6].alt;
        year.innerHTML = fantasy[6].year;
        title.innerHTML = fantasy[6].title;
        rating.innerHTML = fantasy[6].rating;
        original_title.innerHTML = fantasy[6].original_title;
        directors.innerHTML = fantasy[6].directors;
        casts.innerHTML = fantasy[6].casts;
        genres.innerHTML = fantasy[6].genres;
        document.getElementById("image").src = fantasy[6].image;
        synopsis.innerHTML = fantasy[6].synopsis;
        comment1.innerHTML = fantasy[6].comment1;
        comment2.innerHTML = fantasy[6].comment2;
        document.getElementById("douban").href = fantasy[6].alt;
    } else if (url === "?" + fantasy[7].id) {
        id.innerHTML = fantasy[7].id;
        // alt.innerHTML = fantasy[7].alt;
        year.innerHTML = fantasy[7].year;
        title.innerHTML = fantasy[7].title;
        rating.innerHTML = fantasy[7].rating;
        original_title.innerHTML = fantasy[7].original_title;
        directors.innerHTML = fantasy[7].directors;
        casts.innerHTML = fantasy[7].casts;
        genres.innerHTML = fantasy[7].genres;
        document.getElementById("image").src = fantasy[7].image;
        synopsis.innerHTML = fantasy[7].synopsis;
        comment1.innerHTML = fantasy[7].comment1;
        comment2.innerHTML = fantasy[7].comment2;
        document.getElementById("douban").href = fantasy[7].alt;
    }

    // 艺术片
    else if (url === "?" + art[0].id) {
        id.innerHTML = art[0].id;
        // alt.innerHTML = art[0].alt;
        year.innerHTML = art[0].year;
        title.innerHTML = art[0].title;
        rating.innerHTML = art[0].rating;
        original_title.innerHTML = art[0].original_title;
        directors.innerHTML = art[0].directors;
        casts.innerHTML = art[0].casts;
        genres.innerHTML = art[0].genres;
        document.getElementById("image").src = art[0].image;
        synopsis.innerHTML = art[0].synopsis;
        comment1.innerHTML = art[0].comment1;
        comment2.innerHTML = art[0].comment2;
        document.getElementById("douban").href = art[0].alt;
    } else if (url === "?" + art[1].id) {
        id.innerHTML = art[1].id;
        // alt.innerHTML = art[1].alt;
        year.innerHTML = art[1].year;
        title.innerHTML = art[1].title;
        rating.innerHTML = art[1].rating;
        original_title.innerHTML = art[1].original_title;
        directors.innerHTML = art[1].directors;
        casts.innerHTML = art[1].casts;
        genres.innerHTML = art[1].genres;
        document.getElementById("image").src = art[1].image;
        synopsis.innerHTML = art[1].synopsis;
        comment1.innerHTML = art[1].comment1;
        comment2.innerHTML = art[1].comment2;
        document.getElementById("douban").href = art[1].alt;
    } else if (url === "?" + art[2].id) {
        id.innerHTML = art[2].id;
        // alt.innerHTML = art[2].alt;
        year.innerHTML = art[2].year;
        title.innerHTML = art[2].title;
        rating.innerHTML = art[2].rating;
        original_title.innerHTML = art[2].original_title;
        directors.innerHTML = art[2].directors;
        casts.innerHTML = art[2].casts;
        genres.innerHTML = art[2].genres;
        document.getElementById("image").src = art[2].image;
        synopsis.innerHTML = art[2].synopsis;
        comment1.innerHTML = art[2].comment1;
        comment2.innerHTML = art[2].comment2;
        document.getElementById("douban").href = art[2].alt;
    } else if (url === "?" + art[3].id) {
        id.innerHTML = art[3].id;
        // alt.innerHTML = art[3].alt;
        year.innerHTML = art[3].year;
        title.innerHTML = art[3].title;
        rating.innerHTML = art[3].rating;
        original_title.innerHTML = art[3].original_title;
        directors.innerHTML = art[3].directors;
        casts.innerHTML = art[3].casts;
        genres.innerHTML = art[3].genres;
        document.getElementById("image").src = art[3].image;
        synopsis.innerHTML = art[3].synopsis;
        comment1.innerHTML = art[3].comment1;
        comment2.innerHTML = art[3].comment2;
        document.getElementById("douban").href = art[3].alt;
    } else if (url === "?" + art[4].id) {
        id.innerHTML = art[4].id;
        // alt.innerHTML = art[4].alt;
        year.innerHTML = art[4].year;
        title.innerHTML = art[4].title;
        rating.innerHTML = art[4].rating;
        original_title.innerHTML = art[4].original_title;
        directors.innerHTML = art[4].directors;
        casts.innerHTML = art[4].casts;
        genres.innerHTML = art[4].genres;
        document.getElementById("image").src = art[4].image;
        synopsis.innerHTML = art[4].synopsis;
        comment1.innerHTML = art[4].comment1;
        comment2.innerHTML = art[4].comment2;
        document.getElementById("douban").href = art[4].alt;
    } else if (url === "?" + art[5].id) {
        id.innerHTML = art[5].id;
        // alt.innerHTML = art[5].alt;
        year.innerHTML = art[5].year;
        title.innerHTML = art[5].title;
        rating.innerHTML = art[5].rating;
        original_title.innerHTML = art[5].original_title;
        directors.innerHTML = art[5].directors;
        casts.innerHTML = art[5].casts;
        genres.innerHTML = art[5].genres;
        document.getElementById("image").src = art[5].image;
        synopsis.innerHTML = art[5].synopsis;
        comment1.innerHTML = art[5].comment1;
        comment2.innerHTML = art[5].comment2;
        document.getElementById("douban").href = art[5].alt;
    } else if (url === "?" + art[6].id) {
        id.innerHTML = art[6].id;
        // alt.innerHTML = art[6].alt;
        year.innerHTML = art[6].year;
        title.innerHTML = art[6].title;
        rating.innerHTML = art[6].rating;
        original_title.innerHTML = art[6].original_title;
        directors.innerHTML = art[6].directors;
        casts.innerHTML = art[6].casts;
        genres.innerHTML = art[6].genres;
        document.getElementById("image").src = art[6].image;
        synopsis.innerHTML = art[6].synopsis;
        comment1.innerHTML = art[6].comment1;
        comment2.innerHTML = art[6].comment2;
        document.getElementById("douban").href = art[6].alt;
    } else if (url === "?" + art[7].id) {
        id.innerHTML = art[7].id;
        // alt.innerHTML = art[7].alt;
        year.innerHTML = art[7].year;
        title.innerHTML = art[7].title;
        rating.innerHTML = art[7].rating;
        original_title.innerHTML = art[7].original_title;
        directors.innerHTML = art[7].directors;
        casts.innerHTML = art[7].casts;
        genres.innerHTML = art[7].genres;
        document.getElementById("image").src = art[7].image;
        synopsis.innerHTML = art[7].synopsis;
        comment1.innerHTML = art[7].comment1;
        comment2.innerHTML = art[7].comment2;
        document.getElementById("douban").href = art[7].alt;
    }

    // 动画片
    else if (url === "?" + cartoon[0].id) {
        id.innerHTML = cartoon[0].id;
        // alt.innerHTML = cartoon[0].alt;
        year.innerHTML = cartoon[0].year;
        title.innerHTML = cartoon[0].title;
        rating.innerHTML = cartoon[0].rating;
        original_title.innerHTML = cartoon[0].original_title;
        directors.innerHTML = cartoon[0].directors;
        casts.innerHTML = cartoon[0].casts;
        genres.innerHTML = cartoon[0].genres;
        document.getElementById("image").src = cartoon[0].image;
        synopsis.innerHTML = cartoon[0].synopsis;
        comment1.innerHTML = cartoon[0].comment1;
        comment2.innerHTML = cartoon[0].comment2;
        document.getElementById("douban").href = cartoon[0].alt;
    } else if (url === "?" + cartoon[1].id) {
        id.innerHTML = cartoon[1].id;
        // alt.innerHTML = cartoon[1].alt;
        year.innerHTML = cartoon[1].year;
        title.innerHTML = cartoon[1].title;
        rating.innerHTML = cartoon[1].rating;
        original_title.innerHTML = cartoon[1].original_title;
        directors.innerHTML = cartoon[1].directors;
        casts.innerHTML = cartoon[1].casts;
        genres.innerHTML = cartoon[1].genres;
        document.getElementById("image").src = cartoon[1].image;
        synopsis.innerHTML = cartoon[1].synopsis;
        comment1.innerHTML = cartoon[1].comment1;
        comment2.innerHTML = cartoon[1].comment2;
        document.getElementById("douban").href = cartoon[1].alt;
    } else if (url === "?" + cartoon[2].id) {
        id.innerHTML = cartoon[2].id;
        // alt.innerHTML = cartoon[2].alt;
        year.innerHTML = cartoon[2].year;
        title.innerHTML = cartoon[2].title;
        rating.innerHTML = cartoon[2].rating;
        original_title.innerHTML = cartoon[2].original_title;
        directors.innerHTML = cartoon[2].directors;
        casts.innerHTML = cartoon[2].casts;
        genres.innerHTML = cartoon[2].genres;
        document.getElementById("image").src = cartoon[2].image;
        synopsis.innerHTML = cartoon[2].synopsis;
        comment1.innerHTML = cartoon[2].comment1;
        comment2.innerHTML = cartoon[2].comment2;
        document.getElementById("douban").href = cartoon[2].alt;
    } else if (url === "?" + cartoon[3].id) {
        id.innerHTML = cartoon[3].id;
        // alt.innerHTML = cartoon[3].alt;
        year.innerHTML = cartoon[3].year;
        title.innerHTML = cartoon[3].title;
        rating.innerHTML = cartoon[3].rating;
        original_title.innerHTML = cartoon[3].original_title;
        directors.innerHTML = cartoon[3].directors;
        casts.innerHTML = cartoon[3].casts;
        genres.innerHTML = cartoon[3].genres;
        document.getElementById("image").src = cartoon[3].image;
        synopsis.innerHTML = cartoon[3].synopsis;
        comment1.innerHTML = cartoon[3].comment1;
        comment2.innerHTML = cartoon[3].comment2;
        document.getElementById("douban").href = cartoon[3].alt;
    } else if (url === "?" + cartoon[4].id) {
        id.innerHTML = cartoon[4].id;
        // alt.innerHTML = cartoon[4].alt;
        year.innerHTML = cartoon[4].year;
        title.innerHTML = cartoon[4].title;
        rating.innerHTML = cartoon[4].rating;
        original_title.innerHTML = cartoon[4].original_title;
        directors.innerHTML = cartoon[4].directors;
        casts.innerHTML = cartoon[4].casts;
        genres.innerHTML = cartoon[4].genres;
        document.getElementById("image").src = cartoon[4].image;
        synopsis.innerHTML = cartoon[4].synopsis;
        comment1.innerHTML = cartoon[4].comment1;
        comment2.innerHTML = cartoon[4].comment2;
        document.getElementById("douban").href = cartoon[4].alt;
    } else if (url === "?" + cartoon[5].id) {
        id.innerHTML = cartoon[5].id;
        // alt.innerHTML = cartoon[5].alt;
        year.innerHTML = cartoon[5].year;
        title.innerHTML = cartoon[5].title;
        rating.innerHTML = cartoon[5].rating;
        original_title.innerHTML = cartoon[5].original_title;
        directors.innerHTML = cartoon[5].directors;
        casts.innerHTML = cartoon[5].casts;
        genres.innerHTML = cartoon[5].genres;
        document.getElementById("image").src = cartoon[5].image;
        synopsis.innerHTML = cartoon[5].synopsis;
        comment1.innerHTML = cartoon[5].comment1;
        comment2.innerHTML = cartoon[5].comment2;
        document.getElementById("douban").href = cartoon[5].alt;
    } else if (url === "?" + cartoon[6].id) {
        id.innerHTML = cartoon[6].id;
        // alt.innerHTML = cartoon[6].alt;
        year.innerHTML = cartoon[6].year;
        title.innerHTML = cartoon[6].title;
        rating.innerHTML = cartoon[6].rating;
        original_title.innerHTML = cartoon[6].original_title;
        directors.innerHTML = cartoon[6].directors;
        casts.innerHTML = cartoon[6].casts;
        genres.innerHTML = cartoon[6].genres;
        document.getElementById("image").src = cartoon[6].image;
        synopsis.innerHTML = cartoon[6].synopsis;
        comment1.innerHTML = cartoon[6].comment1;
        comment2.innerHTML = cartoon[6].comment2;
        document.getElementById("douban").href = cartoon[6].alt;
    } else if (url === "?" + cartoon[7].id) {
        id.innerHTML = cartoon[7].id;
        // alt.innerHTML = cartoon[7].alt;
        year.innerHTML = cartoon[7].year;
        title.innerHTML = cartoon[7].title;
        rating.innerHTML = cartoon[7].rating;
        original_title.innerHTML = cartoon[7].original_title;
        directors.innerHTML = cartoon[7].directors;
        casts.innerHTML = cartoon[7].casts;
        genres.innerHTML = cartoon[7].genres;
        document.getElementById("image").src = cartoon[7].image;
        synopsis.innerHTML = cartoon[7].synopsis;
        comment1.innerHTML = cartoon[7].comment1;
        comment2.innerHTML = cartoon[7].comment2;
        document.getElementById("douban").href = cartoon[7].alt;
    }

    // 喜剧片
    else if (url === "?" + comedy[0].id) {
        id.innerHTML = comedy[0].id;
        // alt.innerHTML = comedy[0].alt;
        year.innerHTML = comedy[0].year;
        title.innerHTML = comedy[0].title;
        rating.innerHTML = comedy[0].rating;
        original_title.innerHTML = comedy[0].original_title;
        directors.innerHTML = comedy[0].directors;
        casts.innerHTML = comedy[0].casts;
        genres.innerHTML = comedy[0].genres;
        document.getElementById("image").src = comedy[0].image;
        synopsis.innerHTML = comedy[0].synopsis;
        comment1.innerHTML = comedy[0].comment1;
        comment2.innerHTML = comedy[0].comment2;
        document.getElementById("douban").href = comedy[0].alt;
    } else if (url === "?" + comedy[1].id) {
        id.innerHTML = comedy[1].id;
        // alt.innerHTML = comedy[1].alt;
        year.innerHTML = comedy[1].year;
        title.innerHTML = comedy[1].title;
        rating.innerHTML = comedy[1].rating;
        original_title.innerHTML = comedy[1].original_title;
        directors.innerHTML = comedy[1].directors;
        casts.innerHTML = comedy[1].casts;
        genres.innerHTML = comedy[1].genres;
        document.getElementById("image").src = comedy[1].image;
        synopsis.innerHTML = comedy[1].synopsis;
        comment1.innerHTML = comedy[1].comment1;
        comment2.innerHTML = comedy[1].comment2;
        document.getElementById("douban").href = comedy[1].alt;
    } else if (url === "?" + comedy[2].id) {
        id.innerHTML = comedy[2].id;
        // alt.innerHTML = comedy[2].alt;
        year.innerHTML = comedy[2].year;
        title.innerHTML = comedy[2].title;
        rating.innerHTML = comedy[2].rating;
        original_title.innerHTML = comedy[2].original_title;
        directors.innerHTML = comedy[2].directors;
        casts.innerHTML = comedy[2].casts;
        genres.innerHTML = comedy[2].genres;
        document.getElementById("image").src = comedy[2].image;
        synopsis.innerHTML = comedy[2].synopsis;
        comment1.innerHTML = comedy[2].comment1;
        comment2.innerHTML = comedy[2].comment2;
        document.getElementById("douban").href = comedy[2].alt;
    } else if (url === "?" + comedy[3].id) {
        id.innerHTML = comedy[3].id;
        // alt.innerHTML = comedy[3].alt;
        year.innerHTML = comedy[3].year;
        title.innerHTML = comedy[3].title;
        rating.innerHTML = comedy[3].rating;
        original_title.innerHTML = comedy[3].original_title;
        directors.innerHTML = comedy[3].directors;
        casts.innerHTML = comedy[3].casts;
        genres.innerHTML = comedy[3].genres;
        document.getElementById("image").src = comedy[3].image;
        synopsis.innerHTML = comedy[3].synopsis;
        comment1.innerHTML = comedy[3].comment1;
        comment2.innerHTML = comedy[3].comment2;
        document.getElementById("douban").href = comedy[3].alt;
    } else if (url === "?" + comedy[4].id) {
        id.innerHTML = comedy[4].id;
        // alt.innerHTML = comedy[4].alt;
        year.innerHTML = comedy[4].year;
        title.innerHTML = comedy[4].title;
        rating.innerHTML = comedy[4].rating;
        original_title.innerHTML = comedy[4].original_title;
        directors.innerHTML = comedy[4].directors;
        casts.innerHTML = comedy[4].casts;
        genres.innerHTML = comedy[4].genres;
        document.getElementById("image").src = comedy[4].image;
        synopsis.innerHTML = comedy[4].synopsis;
        comment1.innerHTML = comedy[4].comment1;
        comment2.innerHTML = comedy[4].comment2;
        document.getElementById("douban").href = comedy[4].alt;
    } else if (url === "?" + comedy[5].id) {
        id.innerHTML = comedy[5].id;
        // alt.innerHTML = comedy[5].alt;
        year.innerHTML = comedy[5].year;
        title.innerHTML = comedy[5].title;
        rating.innerHTML = comedy[5].rating;
        original_title.innerHTML = comedy[5].original_title;
        directors.innerHTML = comedy[5].directors;
        casts.innerHTML = comedy[5].casts;
        genres.innerHTML = comedy[5].genres;
        document.getElementById("image").src = comedy[5].image;
        synopsis.innerHTML = comedy[5].synopsis;
        comment1.innerHTML = comedy[5].comment1;
        comment2.innerHTML = comedy[5].comment2;
        document.getElementById("douban").href = comedy[5].alt;
    } else if (url === "?" + comedy[6].id) {
        id.innerHTML = comedy[6].id;
        // alt.innerHTML = comedy[6].alt;
        year.innerHTML = comedy[6].year;
        title.innerHTML = comedy[6].title;
        rating.innerHTML = comedy[6].rating;
        original_title.innerHTML = comedy[6].original_title;
        directors.innerHTML = comedy[6].directors;
        casts.innerHTML = comedy[6].casts;
        genres.innerHTML = comedy[6].genres;
        document.getElementById("image").src = comedy[6].image;
        synopsis.innerHTML = comedy[6].synopsis;
        comment1.innerHTML = comedy[6].comment1;
        comment2.innerHTML = comedy[6].comment2;
        document.getElementById("douban").href = comedy[6].alt;
    } else if (url === "?" + comedy[7].id) {
        id.innerHTML = comedy[7].id;
        // alt.innerHTML = comedy[7].alt;
        year.innerHTML = comedy[7].year;
        title.innerHTML = comedy[7].title;
        rating.innerHTML = comedy[7].rating;
        original_title.innerHTML = comedy[7].original_title;
        directors.innerHTML = comedy[7].directors;
        casts.innerHTML = comedy[7].casts;
        genres.innerHTML = comedy[7].genres;
        document.getElementById("image").src = comedy[7].image;
        synopsis.innerHTML = comedy[7].synopsis;
        comment1.innerHTML = comedy[7].comment1;
        comment2.innerHTML = comedy[7].comment2;
        document.getElementById("douban").href = comedy[7].alt;
    }

    // 爱情片
    else if (url === "?" + love[0].id) {
        id.innerHTML = love[0].id;
        // alt.innerHTML = love[0].alt;
        year.innerHTML = love[0].year;
        title.innerHTML = love[0].title;
        rating.innerHTML = love[0].rating;
        original_title.innerHTML = love[0].original_title;
        directors.innerHTML = love[0].directors;
        casts.innerHTML = love[0].casts;
        genres.innerHTML = love[0].genres;
        document.getElementById("image").src = love[0].image;
        synopsis.innerHTML = love[0].synopsis;
        comment1.innerHTML = love[0].comment1;
        comment2.innerHTML = love[0].comment2;
        document.getElementById("douban").href = love[0].alt;
    } else if (url === "?" + love[1].id) {
        id.innerHTML = love[1].id;
        // alt.innerHTML = love[1].alt;
        year.innerHTML = love[1].year;
        title.innerHTML = love[1].title;
        rating.innerHTML = love[1].rating;
        original_title.innerHTML = love[1].original_title;
        directors.innerHTML = love[1].directors;
        casts.innerHTML = love[1].casts;
        genres.innerHTML = love[1].genres;
        document.getElementById("image").src = love[1].image;
        synopsis.innerHTML = love[1].synopsis;
        comment1.innerHTML = love[1].comment1;
        comment2.innerHTML = love[1].comment2;
        document.getElementById("douban").href = love[1].alt;
    } else if (url === "?" + love[2].id) {
        id.innerHTML = love[2].id;
        // alt.innerHTML = love[2].alt;
        year.innerHTML = love[2].year;
        title.innerHTML = love[2].title;
        rating.innerHTML = love[2].rating;
        original_title.innerHTML = love[2].original_title;
        directors.innerHTML = love[2].directors;
        casts.innerHTML = love[2].casts;
        genres.innerHTML = love[2].genres;
        document.getElementById("image").src = love[2].image;
        synopsis.innerHTML = love[2].synopsis;
        comment1.innerHTML = love[2].comment1;
        comment2.innerHTML = love[2].comment2;
        document.getElementById("douban").href = love[2].alt;
    } else if (url === "?" + love[3].id) {
        id.innerHTML = love[3].id;
        // alt.innerHTML = love[3].alt;
        year.innerHTML = love[3].year;
        title.innerHTML = love[3].title;
        rating.innerHTML = love[3].rating;
        original_title.innerHTML = love[3].original_title;
        directors.innerHTML = love[3].directors;
        casts.innerHTML = love[3].casts;
        genres.innerHTML = love[3].genres;
        document.getElementById("image").src = love[3].image;
        synopsis.innerHTML = love[3].synopsis;
        comment1.innerHTML = love[3].comment1;
        comment2.innerHTML = love[3].comment2;
        document.getElementById("douban").href = love[3].alt;
    } else if (url === "?" + love[4].id) {
        id.innerHTML = love[4].id;
        // alt.innerHTML = love[4].alt;
        year.innerHTML = love[4].year;
        title.innerHTML = love[4].title;
        rating.innerHTML = love[4].rating;
        original_title.innerHTML = love[4].original_title;
        directors.innerHTML = love[4].directors;
        casts.innerHTML = love[4].casts;
        genres.innerHTML = love[4].genres;
        document.getElementById("image").src = love[4].image;
        synopsis.innerHTML = love[4].synopsis;
        comment1.innerHTML = love[4].comment1;
        comment2.innerHTML = love[4].comment2;
        document.getElementById("douban").href = love[4].alt;
    } else if (url === "?" + love[5].id) {
        id.innerHTML = love[5].id;
        // alt.innerHTML = love[5].alt;
        year.innerHTML = love[5].year;
        title.innerHTML = love[5].title;
        rating.innerHTML = love[5].rating;
        original_title.innerHTML = love[5].original_title;
        directors.innerHTML = love[5].directors;
        casts.innerHTML = love[5].casts;
        genres.innerHTML = love[5].genres;
        document.getElementById("image").src = love[5].image;
        synopsis.innerHTML = love[5].synopsis;
        comment1.innerHTML = love[5].comment1;
        comment2.innerHTML = love[5].comment2;
        document.getElementById("douban").href = love[5].alt;
    } else if (url === "?" + love[6].id) {
        id.innerHTML = love[6].id;
        // alt.innerHTML = love[6].alt;
        year.innerHTML = love[6].year;
        title.innerHTML = love[6].title;
        rating.innerHTML = love[6].rating;
        original_title.innerHTML = love[6].original_title;
        directors.innerHTML = love[6].directors;
        casts.innerHTML = love[6].casts;
        genres.innerHTML = love[6].genres;
        document.getElementById("image").src = love[6].image;
        synopsis.innerHTML = love[6].synopsis;
        comment1.innerHTML = love[6].comment1;
        comment2.innerHTML = love[6].comment2;
        document.getElementById("douban").href = love[6].alt;
    } else if (url === "?" + love[7].id) {
        id.innerHTML = love[7].id;
        // alt.innerHTML = love[7].alt;
        year.innerHTML = love[7].year;
        title.innerHTML = love[7].title;
        rating.innerHTML = love[7].rating;
        original_title.innerHTML = love[7].original_title;
        directors.innerHTML = love[7].directors;
        casts.innerHTML = love[7].casts;
        genres.innerHTML = love[7].genres;
        document.getElementById("image").src = love[7].image;
        synopsis.innerHTML = love[7].synopsis;
        comment1.innerHTML = love[7].comment1;
        comment2.innerHTML = love[7].comment2;
        document.getElementById("douban").href = love[7].alt;
    }

    // 恐怖片
    else if (url === "?" + thriller[0].id) {
        id.innerHTML = thriller[0].id;
        // alt.innerHTML = thriller[0].alt;
        year.innerHTML = thriller[0].year;
        title.innerHTML = thriller[0].title;
        rating.innerHTML = thriller[0].rating;
        original_title.innerHTML = thriller[0].original_title;
        directors.innerHTML = thriller[0].directors;
        casts.innerHTML = thriller[0].casts;
        genres.innerHTML = thriller[0].genres;
        document.getElementById("image").src = thriller[0].image;
        synopsis.innerHTML = thriller[0].synopsis;
        comment1.innerHTML = thriller[0].comment1;
        comment2.innerHTML = thriller[0].comment2;
        document.getElementById("douban").href = thriller[0].alt;
    } else if (url === "?" + thriller[1].id) {
        id.innerHTML = thriller[1].id;
        // alt.innerHTML = thriller[1].alt;
        year.innerHTML = thriller[1].year;
        title.innerHTML = thriller[1].title;
        rating.innerHTML = thriller[1].rating;
        original_title.innerHTML = thriller[1].original_title;
        directors.innerHTML = thriller[1].directors;
        casts.innerHTML = thriller[1].casts;
        genres.innerHTML = thriller[1].genres;
        document.getElementById("image").src = thriller[1].image;
        synopsis.innerHTML = thriller[1].synopsis;
        comment1.innerHTML = thriller[1].comment1;
        comment2.innerHTML = thriller[1].comment2;
        document.getElementById("douban").href = thriller[1].alt;
    } else if (url === "?" + thriller[2].id) {
        id.innerHTML = thriller[2].id;
        // alt.innerHTML = thriller[2].alt;
        year.innerHTML = thriller[2].year;
        title.innerHTML = thriller[2].title;
        rating.innerHTML = thriller[2].rating;
        original_title.innerHTML = thriller[2].original_title;
        directors.innerHTML = thriller[2].directors;
        casts.innerHTML = thriller[2].casts;
        genres.innerHTML = thriller[2].genres;
        document.getElementById("image").src = thriller[2].image;
        synopsis.innerHTML = thriller[2].synopsis;
        comment1.innerHTML = thriller[2].comment1;
        comment2.innerHTML = thriller[2].comment2;
        document.getElementById("douban").href = thriller[2].alt;
    } else if (url === "?" + thriller[3].id) {
        id.innerHTML = thriller[3].id;
        // alt.innerHTML = thriller[3].alt;
        year.innerHTML = thriller[3].year;
        title.innerHTML = thriller[3].title;
        rating.innerHTML = thriller[3].rating;
        original_title.innerHTML = thriller[3].original_title;
        directors.innerHTML = thriller[3].directors;
        casts.innerHTML = thriller[3].casts;
        genres.innerHTML = thriller[3].genres;
        document.getElementById("image").src = thriller[3].image;
        synopsis.innerHTML = thriller[3].synopsis;
        comment1.innerHTML = thriller[3].comment1;
        comment2.innerHTML = thriller[3].comment2;
        document.getElementById("douban").href = thriller[3].alt;
    } else if (url === "?" + thriller[4].id) {
        id.innerHTML = thriller[4].id;
        // alt.innerHTML = thriller[4].alt;
        year.innerHTML = thriller[4].year;
        title.innerHTML = thriller[4].title;
        rating.innerHTML = thriller[4].rating;
        original_title.innerHTML = thriller[4].original_title;
        directors.innerHTML = thriller[4].directors;
        casts.innerHTML = thriller[4].casts;
        genres.innerHTML = thriller[4].genres;
        document.getElementById("image").src = thriller[4].image;
        synopsis.innerHTML = thriller[4].synopsis;
        comment1.innerHTML = thriller[4].comment1;
        comment2.innerHTML = thriller[4].comment2;
        document.getElementById("douban").href = thriller[4].alt;
    } else if (url === "?" + thriller[5].id) {
        id.innerHTML = thriller[5].id;
        // alt.innerHTML = thriller[5].alt;
        year.innerHTML = thriller[5].year;
        title.innerHTML = thriller[5].title;
        rating.innerHTML = thriller[5].rating;
        original_title.innerHTML = thriller[5].original_title;
        directors.innerHTML = thriller[5].directors;
        casts.innerHTML = thriller[5].casts;
        genres.innerHTML = thriller[5].genres;
        document.getElementById("image").src = thriller[5].image;
        synopsis.innerHTML = thriller[5].synopsis;
        comment1.innerHTML = thriller[5].comment1;
        comment2.innerHTML = thriller[5].comment2;
        document.getElementById("douban").href = thriller[5].alt;
    } else if (url === "?" + thriller[6].id) {
        id.innerHTML = thriller[6].id;
        // alt.innerHTML = thriller[6].alt;
        year.innerHTML = thriller[6].year;
        title.innerHTML = thriller[6].title;
        rating.innerHTML = thriller[6].rating;
        original_title.innerHTML = thriller[6].original_title;
        directors.innerHTML = thriller[6].directors;
        casts.innerHTML = thriller[6].casts;
        genres.innerHTML = thriller[6].genres;
        document.getElementById("image").src = thriller[6].image;
        synopsis.innerHTML = thriller[6].synopsis;
        comment1.innerHTML = thriller[6].comment1;
        comment2.innerHTML = thriller[6].comment2;
        document.getElementById("douban").href = thriller[6].alt;
    } else if (url === "?" + thriller[7].id) {
        id.innerHTML = thriller[7].id;
        // alt.innerHTML = thriller[7].alt;
        year.innerHTML = thriller[7].year;
        title.innerHTML = thriller[7].title;
        rating.innerHTML = thriller[7].rating;
        original_title.innerHTML = thriller[7].original_title;
        directors.innerHTML = thriller[7].directors;
        casts.innerHTML = thriller[7].casts;
        genres.innerHTML = thriller[7].genres;
        document.getElementById("image").src = thriller[7].image;
        synopsis.innerHTML = thriller[7].synopsis;
        comment1.innerHTML = thriller[7].comment1;
        comment2.innerHTML = thriller[7].comment2;
        document.getElementById("douban").href = thriller[7].alt;
    } else {
        id.innerHTML = newMovies[0].id;
        // alt.innerHTML = newMovies[0].alt;
        year.innerHTML = newMovies[0].year;
        title.innerHTML = newMovies[0].title;
        rating.innerHTML = newMovies[0].rating;
        original_title.innerHTML = newMovies[0].original_title;
        directors.innerHTML = newMovies[0].directors;
        casts.innerHTML = newMovies[0].casts;
        genres.innerHTML = newMovies[0].genres;
        document.getElementById("image").src = newMovies[0].image;
        synopsis.innerHTML = newMovies[0].synopsis;
        comment1.innerHTML = newMovies[0].comment1;
        comment2.innerHTML = newMovies[0].comment2;
        document.getElementById("douban").href = newMovies[0].alt;
    }
}


// 实现相关推荐
function like() {
    var url = location.search;
    var likeTitle1 = document.getElementById("likeTitle1");
    var likeTitle2 = document.getElementById("likeTitle2");
    var likeTitle3 = document.getElementById("likeTitle3");
    var likeUrl1;
    var likeUrl2;
    var likeUrl3;

    if (url === "?" + newMovies[0].id) {
        likeTitle1.innerHTML = newMovies[1].title;
        likeTitle2.innerHTML = newMovies[2].title;
        likeTitle3.innerHTML = newMovies[3].title;
        document.getElementById("likeImage1").src = newMovies[1].image;
        document.getElementById("likeImage2").src = newMovies[2].image;
        document.getElementById("likeImage3").src = newMovies[3].image;
        likeUrl1 = "single.html" + "?" + newMovies[1].id;
        likeUrl2 = "single.html" + "?" + newMovies[2].id;
        likeUrl3 = "single.html" + "?" + newMovies[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + newMovies[1].id) {
        likeTitle1.innerHTML = newMovies[6].title;
        likeTitle2.innerHTML = newMovies[0].title;
        likeTitle3.innerHTML = newMovies[2].title;
        document.getElementById("likeImage1").src = newMovies[6].image;
        document.getElementById("likeImage2").src = newMovies[0].image;
        document.getElementById("likeImage3").src = newMovies[2].image;
        likeUrl1 = "single.html" + "?" + newMovies[6].id;
        likeUrl2 = "single.html" + "?" + newMovies[0].id;
        likeUrl3 = "single.html" + "?" + newMovies[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + newMovies[2].id) {
        likeTitle1.innerHTML = newMovies[7].title;
        likeTitle2.innerHTML = newMovies[1].title;
        likeTitle3.innerHTML = newMovies[4].title;
        document.getElementById("likeImage1").src = newMovies[7].image;
        document.getElementById("likeImage2").src = newMovies[1].image;
        document.getElementById("likeImage3").src = newMovies[4].image;
        likeUrl1 = "single.html" + "?" + newMovies[7].id;
        likeUrl2 = "single.html" + "?" + newMovies[1].id;
        likeUrl3 = "single.html" + "?" + newMovies[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + newMovies[3].id) {
        likeTitle1.innerHTML = newMovies[1].title;
        likeTitle2.innerHTML = newMovies[5].title;
        likeTitle3.innerHTML = newMovies[2].title;
        document.getElementById("likeImage1").src = newMovies[1].image;
        document.getElementById("likeImage2").src = newMovies[5].image;
        document.getElementById("likeImage3").src = newMovies[2].image;
        likeUrl1 = "single.html" + "?" + newMovies[1].id;
        likeUrl2 = "single.html" + "?" + newMovies[5].id;
        likeUrl3 = "single.html" + "?" + newMovies[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + newMovies[4].id) {
        likeTitle1.innerHTML = newMovies[1].title;
        likeTitle2.innerHTML = newMovies[7].title;
        likeTitle3.innerHTML = newMovies[3].title;
        document.getElementById("likeImage1").src = newMovies[1].image;
        document.getElementById("likeImage2").src = newMovies[7].image;
        document.getElementById("likeImage3").src = newMovies[3].image;
        likeUrl1 = "single.html" + "?" + newMovies[1].id;
        likeUrl2 = "single.html" + "?" + newMovies[7].id;
        likeUrl3 = "single.html" + "?" + newMovies[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + newMovies[5].id) {
        likeTitle1.innerHTML = newMovies[2].title;
        likeTitle2.innerHTML = newMovies[4].title;
        likeTitle3.innerHTML = newMovies[6].title;
        document.getElementById("likeImage1").src = newMovies[2].image;
        document.getElementById("likeImage2").src = newMovies[4].image;
        document.getElementById("likeImage3").src = newMovies[6].image;
        likeUrl1 = "single.html" + "?" + newMovies[2].id;
        likeUrl2 = "single.html" + "?" + newMovies[4].id;
        likeUrl3 = "single.html" + "?" + newMovies[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + newMovies[6].id) {
        likeTitle1.innerHTML = newMovies[5].title;
        likeTitle2.innerHTML = newMovies[0].title;
        likeTitle3.innerHTML = newMovies[1].title;
        document.getElementById("likeImage1").src = newMovies[5].image;
        document.getElementById("likeImage2").src = newMovies[0].image;
        document.getElementById("likeImage3").src = newMovies[1].image;
        likeUrl1 = "single.html" + "?" + newMovies[5].id;
        likeUrl2 = "single.html" + "?" + newMovies[0].id;
        likeUrl3 = "single.html" + "?" + newMovies[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + newMovies[7].id) {
        likeTitle1.innerHTML = newMovies[4].title;
        likeTitle2.innerHTML = newMovies[6].title;
        likeTitle3.innerHTML = newMovies[2].title;
        document.getElementById("likeImage1").src = newMovies[2].image;
        document.getElementById("likeImage2").src = newMovies[6].image;
        document.getElementById("likeImage3").src = newMovies[2].image;
        likeUrl1 = "single.html" + "?" + newMovies[4].id;
        likeUrl2 = "single.html" + "?" + newMovies[6].id;
        likeUrl3 = "single.html" + "?" + newMovies[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }

    // 奇幻
    else if (url === "?" + fantasy[0].id) {
        likeTitle1.innerHTML = fantasy[1].title;
        likeTitle2.innerHTML = fantasy[2].title;
        likeTitle3.innerHTML = fantasy[3].title;
        document.getElementById("likeImage1").src = fantasy[1].image;
        document.getElementById("likeImage2").src = fantasy[2].image;
        document.getElementById("likeImage3").src = fantasy[3].image;
        likeUrl1 = "single.html" + "?" + fantasy[1].id;
        likeUrl2 = "single.html" + "?" + fantasy[2].id;
        likeUrl3 = "single.html" + "?" + fantasy[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + fantasy[1].id) {
        likeTitle1.innerHTML = fantasy[6].title;
        likeTitle2.innerHTML = fantasy[0].title;
        likeTitle3.innerHTML = fantasy[2].title;
        document.getElementById("likeImage1").src = fantasy[6].image;
        document.getElementById("likeImage2").src = fantasy[0].image;
        document.getElementById("likeImage3").src = fantasy[2].image;
        likeUrl1 = "single.html" + "?" + fantasy[6].id;
        likeUrl2 = "single.html" + "?" + fantasy[0].id;
        likeUrl3 = "single.html" + "?" + fantasy[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + fantasy[2].id) {
        likeTitle1.innerHTML = fantasy[7].title;
        likeTitle2.innerHTML = fantasy[1].title;
        likeTitle3.innerHTML = fantasy[4].title;
        document.getElementById("likeImage1").src = fantasy[7].image;
        document.getElementById("likeImage2").src = fantasy[1].image;
        document.getElementById("likeImage3").src = fantasy[4].image;
        likeUrl1 = "single.html" + "?" + fantasy[7].id;
        likeUrl2 = "single.html" + "?" + fantasy[1].id;
        likeUrl3 = "single.html" + "?" + fantasy[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + fantasy[3].id) {
        likeTitle1.innerHTML = fantasy[1].title;
        likeTitle2.innerHTML = fantasy[5].title;
        likeTitle3.innerHTML = fantasy[2].title;
        document.getElementById("likeImage1").src = fantasy[1].image;
        document.getElementById("likeImage2").src = fantasy[5].image;
        document.getElementById("likeImage3").src = fantasy[2].image;
        likeUrl1 = "single.html" + "?" + fantasy[1].id;
        likeUrl2 = "single.html" + "?" + fantasy[5].id;
        likeUrl3 = "single.html" + "?" + fantasy[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + fantasy[4].id) {
        likeTitle1.innerHTML = fantasy[1].title;
        likeTitle2.innerHTML = fantasy[7].title;
        likeTitle3.innerHTML = fantasy[3].title;
        document.getElementById("likeImage1").src = fantasy[1].image;
        document.getElementById("likeImage2").src = fantasy[7].image;
        document.getElementById("likeImage3").src = fantasy[3].image;
        likeUrl1 = "single.html" + "?" + fantasy[1].id;
        likeUrl2 = "single.html" + "?" + fantasy[7].id;
        likeUrl3 = "single.html" + "?" + fantasy[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + fantasy[5].id) {
        likeTitle1.innerHTML = fantasy[2].title;
        likeTitle2.innerHTML = fantasy[4].title;
        likeTitle3.innerHTML = fantasy[6].title;
        document.getElementById("likeImage1").src = fantasy[2].image;
        document.getElementById("likeImage2").src = fantasy[4].image;
        document.getElementById("likeImage3").src = fantasy[6].image;
        likeUrl1 = "single.html" + "?" + fantasy[2].id;
        likeUrl2 = "single.html" + "?" + fantasy[4].id;
        likeUrl3 = "single.html" + "?" + fantasy[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + fantasy[6].id) {
        likeTitle1.innerHTML = fantasy[5].title;
        likeTitle2.innerHTML = fantasy[0].title;
        likeTitle3.innerHTML = fantasy[1].title;
        document.getElementById("likeImage1").src = fantasy[5].image;
        document.getElementById("likeImage2").src = fantasy[0].image;
        document.getElementById("likeImage3").src = fantasy[1].image;
        likeUrl1 = "single.html" + "?" + fantasy[5].id;
        likeUrl2 = "single.html" + "?" + fantasy[0].id;
        likeUrl3 = "single.html" + "?" + fantasy[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + fantasy[7].id) {
        likeTitle1.innerHTML = fantasy[4].title;
        likeTitle2.innerHTML = fantasy[6].title;
        likeTitle3.innerHTML = fantasy[2].title;
        document.getElementById("likeImage1").src = fantasy[2].image;
        document.getElementById("likeImage2").src = fantasy[6].image;
        document.getElementById("likeImage3").src = fantasy[2].image;
        likeUrl1 = "single.html" + "?" + fantasy[4].id;
        likeUrl2 = "single.html" + "?" + fantasy[6].id;
        likeUrl3 = "single.html" + "?" + fantasy[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }

    // 艺术片
    else if (url === "?" + art[0].id) {
        likeTitle1.innerHTML = art[1].title;
        likeTitle2.innerHTML = art[2].title;
        likeTitle3.innerHTML = art[3].title;
        document.getElementById("likeImage1").src = art[1].image;
        document.getElementById("likeImage2").src = art[2].image;
        document.getElementById("likeImage3").src = art[3].image;
        likeUrl1 = "single.html" + "?" + art[1].id;
        likeUrl2 = "single.html" + "?" + art[2].id;
        likeUrl3 = "single.html" + "?" + art[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + art[1].id) {
        likeTitle1.innerHTML = art[6].title;
        likeTitle2.innerHTML = art[0].title;
        likeTitle3.innerHTML = art[2].title;
        document.getElementById("likeImage1").src = art[6].image;
        document.getElementById("likeImage2").src = art[0].image;
        document.getElementById("likeImage3").src = art[2].image;
        likeUrl1 = "single.html" + "?" + art[6].id;
        likeUrl2 = "single.html" + "?" + art[0].id;
        likeUrl3 = "single.html" + "?" + art[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + art[2].id) {
        likeTitle1.innerHTML = art[7].title;
        likeTitle2.innerHTML = art[1].title;
        likeTitle3.innerHTML = art[4].title;
        document.getElementById("likeImage1").src = art[7].image;
        document.getElementById("likeImage2").src = art[1].image;
        document.getElementById("likeImage3").src = art[4].image;
        likeUrl1 = "single.html" + "?" + art[7].id;
        likeUrl2 = "single.html" + "?" + art[1].id;
        likeUrl3 = "single.html" + "?" + art[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + art[3].id) {
        likeTitle1.innerHTML = art[1].title;
        likeTitle2.innerHTML = art[5].title;
        likeTitle3.innerHTML = art[2].title;
        document.getElementById("likeImage1").src = art[1].image;
        document.getElementById("likeImage2").src = art[5].image;
        document.getElementById("likeImage3").src = art[2].image;
        likeUrl1 = "single.html" + "?" + art[1].id;
        likeUrl2 = "single.html" + "?" + art[5].id;
        likeUrl3 = "single.html" + "?" + art[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + art[4].id) {
        likeTitle1.innerHTML = art[1].title;
        likeTitle2.innerHTML = art[7].title;
        likeTitle3.innerHTML = art[3].title;
        document.getElementById("likeImage1").src = art[1].image;
        document.getElementById("likeImage2").src = art[7].image;
        document.getElementById("likeImage3").src = art[3].image;
        likeUrl1 = "single.html" + "?" + art[1].id;
        likeUrl2 = "single.html" + "?" + art[7].id;
        likeUrl3 = "single.html" + "?" + art[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + art[5].id) {
        likeTitle1.innerHTML = art[2].title;
        likeTitle2.innerHTML = art[4].title;
        likeTitle3.innerHTML = art[6].title;
        document.getElementById("likeImage1").src = art[2].image;
        document.getElementById("likeImage2").src = art[4].image;
        document.getElementById("likeImage3").src = art[6].image;
        likeUrl1 = "single.html" + "?" + art[2].id;
        likeUrl2 = "single.html" + "?" + art[4].id;
        likeUrl3 = "single.html" + "?" + art[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + art[6].id) {
        likeTitle1.innerHTML = art[5].title;
        likeTitle2.innerHTML = art[0].title;
        likeTitle3.innerHTML = art[1].title;
        document.getElementById("likeImage1").src = art[5].image;
        document.getElementById("likeImage2").src = art[0].image;
        document.getElementById("likeImage3").src = art[1].image;
        likeUrl1 = "single.html" + "?" + art[5].id;
        likeUrl2 = "single.html" + "?" + art[0].id;
        likeUrl3 = "single.html" + "?" + art[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + art[7].id) {
        likeTitle1.innerHTML = art[4].title;
        likeTitle2.innerHTML = art[6].title;
        likeTitle3.innerHTML = art[2].title;
        document.getElementById("likeImage1").src = art[2].image;
        document.getElementById("likeImage2").src = art[6].image;
        document.getElementById("likeImage3").src = art[2].image;
        likeUrl1 = "single.html" + "?" + art[4].id;
        likeUrl2 = "single.html" + "?" + art[6].id;
        likeUrl3 = "single.html" + "?" + art[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }

    // 动画片
    else if (url === "?" + cartoon[0].id) {
        likeTitle1.innerHTML = cartoon[1].title;
        likeTitle2.innerHTML = cartoon[2].title;
        likeTitle3.innerHTML = cartoon[3].title;
        document.getElementById("likeImage1").src = cartoon[1].image;
        document.getElementById("likeImage2").src = cartoon[2].image;
        document.getElementById("likeImage3").src = cartoon[3].image;
        likeUrl1 = "single.html" + "?" + cartoon[1].id;
        likeUrl2 = "single.html" + "?" + cartoon[2].id;
        likeUrl3 = "single.html" + "?" + cartoon[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + cartoon[1].id) {
        likeTitle1.innerHTML = cartoon[6].title;
        likeTitle2.innerHTML = cartoon[0].title;
        likeTitle3.innerHTML = cartoon[2].title;
        document.getElementById("likeImage1").src = cartoon[6].image;
        document.getElementById("likeImage2").src = cartoon[0].image;
        document.getElementById("likeImage3").src = cartoon[2].image;
        likeUrl1 = "single.html" + "?" + cartoon[6].id;
        likeUrl2 = "single.html" + "?" + cartoon[0].id;
        likeUrl3 = "single.html" + "?" + cartoon[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + cartoon[2].id) {
        likeTitle1.innerHTML = cartoon[7].title;
        likeTitle2.innerHTML = cartoon[1].title;
        likeTitle3.innerHTML = cartoon[4].title;
        document.getElementById("likeImage1").src = cartoon[7].image;
        document.getElementById("likeImage2").src = cartoon[1].image;
        document.getElementById("likeImage3").src = cartoon[4].image;
        likeUrl1 = "single.html" + "?" + cartoon[7].id;
        likeUrl2 = "single.html" + "?" + cartoon[1].id;
        likeUrl3 = "single.html" + "?" + cartoon[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + cartoon[3].id) {
        likeTitle1.innerHTML = cartoon[1].title;
        likeTitle2.innerHTML = cartoon[5].title;
        likeTitle3.innerHTML = cartoon[2].title;
        document.getElementById("likeImage1").src = cartoon[1].image;
        document.getElementById("likeImage2").src = cartoon[5].image;
        document.getElementById("likeImage3").src = cartoon[2].image;
        likeUrl1 = "single.html" + "?" + cartoon[1].id;
        likeUrl2 = "single.html" + "?" + cartoon[5].id;
        likeUrl3 = "single.html" + "?" + cartoon[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + cartoon[4].id) {
        likeTitle1.innerHTML = cartoon[1].title;
        likeTitle2.innerHTML = cartoon[7].title;
        likeTitle3.innerHTML = cartoon[3].title;
        document.getElementById("likeImage1").src = cartoon[1].image;
        document.getElementById("likeImage2").src = cartoon[7].image;
        document.getElementById("likeImage3").src = cartoon[3].image;
        likeUrl1 = "single.html" + "?" + cartoon[1].id;
        likeUrl2 = "single.html" + "?" + cartoon[7].id;
        likeUrl3 = "single.html" + "?" + cartoon[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + cartoon[5].id) {
        likeTitle1.innerHTML = cartoon[2].title;
        likeTitle2.innerHTML = cartoon[4].title;
        likeTitle3.innerHTML = cartoon[6].title;
        document.getElementById("likeImage1").src = cartoon[2].image;
        document.getElementById("likeImage2").src = cartoon[4].image;
        document.getElementById("likeImage3").src = cartoon[6].image;
        likeUrl1 = "single.html" + "?" + cartoon[2].id;
        likeUrl2 = "single.html" + "?" + cartoon[4].id;
        likeUrl3 = "single.html" + "?" + cartoon[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + cartoon[6].id) {
        likeTitle1.innerHTML = cartoon[5].title;
        likeTitle2.innerHTML = cartoon[0].title;
        likeTitle3.innerHTML = cartoon[1].title;
        document.getElementById("likeImage1").src = cartoon[5].image;
        document.getElementById("likeImage2").src = cartoon[0].image;
        document.getElementById("likeImage3").src = cartoon[1].image;
        likeUrl1 = "single.html" + "?" + cartoon[5].id;
        likeUrl2 = "single.html" + "?" + cartoon[0].id;
        likeUrl3 = "single.html" + "?" + cartoon[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + cartoon[7].id) {
        likeTitle1.innerHTML = cartoon[4].title;
        likeTitle2.innerHTML = cartoon[6].title;
        likeTitle3.innerHTML = cartoon[2].title;
        document.getElementById("likeImage1").src = cartoon[2].image;
        document.getElementById("likeImage2").src = cartoon[6].image;
        document.getElementById("likeImage3").src = cartoon[2].image;
        likeUrl1 = "single.html" + "?" + cartoon[4].id;
        likeUrl2 = "single.html" + "?" + cartoon[6].id;
        likeUrl3 = "single.html" + "?" + cartoon[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }

    // 喜剧片
    else if (url === "?" + comedy[0].id) {
        likeTitle1.innerHTML = comedy[1].title;
        likeTitle2.innerHTML = comedy[2].title;
        likeTitle3.innerHTML = comedy[3].title;
        document.getElementById("likeImage1").src = comedy[1].image;
        document.getElementById("likeImage2").src = comedy[2].image;
        document.getElementById("likeImage3").src = comedy[3].image;
        likeUrl1 = "single.html" + "?" + comedy[1].id;
        likeUrl2 = "single.html" + "?" + comedy[2].id;
        likeUrl3 = "single.html" + "?" + comedy[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + comedy[1].id) {
        likeTitle1.innerHTML = comedy[6].title;
        likeTitle2.innerHTML = comedy[0].title;
        likeTitle3.innerHTML = comedy[2].title;
        document.getElementById("likeImage1").src = comedy[6].image;
        document.getElementById("likeImage2").src = comedy[0].image;
        document.getElementById("likeImage3").src = comedy[2].image;
        likeUrl1 = "single.html" + "?" + comedy[6].id;
        likeUrl2 = "single.html" + "?" + comedy[0].id;
        likeUrl3 = "single.html" + "?" + comedy[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + comedy[2].id) {
        likeTitle1.innerHTML = comedy[7].title;
        likeTitle2.innerHTML = comedy[1].title;
        likeTitle3.innerHTML = comedy[4].title;
        document.getElementById("likeImage1").src = comedy[7].image;
        document.getElementById("likeImage2").src = comedy[1].image;
        document.getElementById("likeImage3").src = comedy[4].image;
        likeUrl1 = "single.html" + "?" + comedy[7].id;
        likeUrl2 = "single.html" + "?" + comedy[1].id;
        likeUrl3 = "single.html" + "?" + comedy[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + comedy[3].id) {
        likeTitle1.innerHTML = comedy[1].title;
        likeTitle2.innerHTML = comedy[5].title;
        likeTitle3.innerHTML = comedy[2].title;
        document.getElementById("likeImage1").src = comedy[1].image;
        document.getElementById("likeImage2").src = comedy[5].image;
        document.getElementById("likeImage3").src = comedy[2].image;
        likeUrl1 = "single.html" + "?" + comedy[1].id;
        likeUrl2 = "single.html" + "?" + comedy[5].id;
        likeUrl3 = "single.html" + "?" + comedy[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + comedy[4].id) {
        likeTitle1.innerHTML = comedy[1].title;
        likeTitle2.innerHTML = comedy[7].title;
        likeTitle3.innerHTML = comedy[3].title;
        document.getElementById("likeImage1").src = comedy[1].image;
        document.getElementById("likeImage2").src = comedy[7].image;
        document.getElementById("likeImage3").src = comedy[3].image;
        likeUrl1 = "single.html" + "?" + comedy[1].id;
        likeUrl2 = "single.html" + "?" + comedy[7].id;
        likeUrl3 = "single.html" + "?" + comedy[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + comedy[5].id) {
        likeTitle1.innerHTML = comedy[2].title;
        likeTitle2.innerHTML = comedy[4].title;
        likeTitle3.innerHTML = comedy[6].title;
        document.getElementById("likeImage1").src = comedy[2].image;
        document.getElementById("likeImage2").src = comedy[4].image;
        document.getElementById("likeImage3").src = comedy[6].image;
        likeUrl1 = "single.html" + "?" + comedy[2].id;
        likeUrl2 = "single.html" + "?" + comedy[4].id;
        likeUrl3 = "single.html" + "?" + comedy[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + comedy[6].id) {
        likeTitle1.innerHTML = comedy[5].title;
        likeTitle2.innerHTML = comedy[0].title;
        likeTitle3.innerHTML = comedy[1].title;
        document.getElementById("likeImage1").src = comedy[5].image;
        document.getElementById("likeImage2").src = comedy[0].image;
        document.getElementById("likeImage3").src = comedy[1].image;
        likeUrl1 = "single.html" + "?" + comedy[5].id;
        likeUrl2 = "single.html" + "?" + comedy[0].id;
        likeUrl3 = "single.html" + "?" + comedy[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + comedy[7].id) {
        likeTitle1.innerHTML = comedy[4].title;
        likeTitle2.innerHTML = comedy[6].title;
        likeTitle3.innerHTML = comedy[2].title;
        document.getElementById("likeImage1").src = comedy[2].image;
        document.getElementById("likeImage2").src = comedy[6].image;
        document.getElementById("likeImage3").src = comedy[2].image;
        likeUrl1 = "single.html" + "?" + comedy[4].id;
        likeUrl2 = "single.html" + "?" + comedy[6].id;
        likeUrl3 = "single.html" + "?" + comedy[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }

    // 爱情片
    else if (url === "?" + love[0].id) {
        likeTitle1.innerHTML = love[1].title;
        likeTitle2.innerHTML = love[2].title;
        likeTitle3.innerHTML = love[3].title;
        document.getElementById("likeImage1").src = love[1].image;
        document.getElementById("likeImage2").src = love[2].image;
        document.getElementById("likeImage3").src = love[3].image;
        likeUrl1 = "single.html" + "?" + love[1].id;
        likeUrl2 = "single.html" + "?" + love[2].id;
        likeUrl3 = "single.html" + "?" + love[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + love[1].id) {
        likeTitle1.innerHTML = love[6].title;
        likeTitle2.innerHTML = love[0].title;
        likeTitle3.innerHTML = love[2].title;
        document.getElementById("likeImage1").src = love[6].image;
        document.getElementById("likeImage2").src = love[0].image;
        document.getElementById("likeImage3").src = love[2].image;
        likeUrl1 = "single.html" + "?" + love[6].id;
        likeUrl2 = "single.html" + "?" + love[0].id;
        likeUrl3 = "single.html" + "?" + love[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + love[2].id) {
        likeTitle1.innerHTML = love[7].title;
        likeTitle2.innerHTML = love[1].title;
        likeTitle3.innerHTML = love[4].title;
        document.getElementById("likeImage1").src = love[7].image;
        document.getElementById("likeImage2").src = love[1].image;
        document.getElementById("likeImage3").src = love[4].image;
        likeUrl1 = "single.html" + "?" + love[7].id;
        likeUrl2 = "single.html" + "?" + love[1].id;
        likeUrl3 = "single.html" + "?" + love[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + love[3].id) {
        likeTitle1.innerHTML = love[1].title;
        likeTitle2.innerHTML = love[5].title;
        likeTitle3.innerHTML = love[2].title;
        document.getElementById("likeImage1").src = love[1].image;
        document.getElementById("likeImage2").src = love[5].image;
        document.getElementById("likeImage3").src = love[2].image;
        likeUrl1 = "single.html" + "?" + love[1].id;
        likeUrl2 = "single.html" + "?" + love[5].id;
        likeUrl3 = "single.html" + "?" + love[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + love[4].id) {
        likeTitle1.innerHTML = love[1].title;
        likeTitle2.innerHTML = love[7].title;
        likeTitle3.innerHTML = love[3].title;
        document.getElementById("likeImage1").src = love[1].image;
        document.getElementById("likeImage2").src = love[7].image;
        document.getElementById("likeImage3").src = love[3].image;
        likeUrl1 = "single.html" + "?" + love[1].id;
        likeUrl2 = "single.html" + "?" + love[7].id;
        likeUrl3 = "single.html" + "?" + love[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + love[5].id) {
        likeTitle1.innerHTML = love[2].title;
        likeTitle2.innerHTML = love[4].title;
        likeTitle3.innerHTML = love[6].title;
        document.getElementById("likeImage1").src = love[2].image;
        document.getElementById("likeImage2").src = love[4].image;
        document.getElementById("likeImage3").src = love[6].image;
        likeUrl1 = "single.html" + "?" + love[2].id;
        likeUrl2 = "single.html" + "?" + love[4].id;
        likeUrl3 = "single.html" + "?" + love[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + love[6].id) {
        likeTitle1.innerHTML = love[5].title;
        likeTitle2.innerHTML = love[0].title;
        likeTitle3.innerHTML = love[1].title;
        document.getElementById("likeImage1").src = love[5].image;
        document.getElementById("likeImage2").src = love[0].image;
        document.getElementById("likeImage3").src = love[1].image;
        likeUrl1 = "single.html" + "?" + love[5].id;
        likeUrl2 = "single.html" + "?" + love[0].id;
        likeUrl3 = "single.html" + "?" + love[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + love[7].id) {
        likeTitle1.innerHTML = love[4].title;
        likeTitle2.innerHTML = love[6].title;
        likeTitle3.innerHTML = love[2].title;
        document.getElementById("likeImage1").src = love[2].image;
        document.getElementById("likeImage2").src = love[6].image;
        document.getElementById("likeImage3").src = love[2].image;
        likeUrl1 = "single.html" + "?" + love[4].id;
        likeUrl2 = "single.html" + "?" + love[6].id;
        likeUrl3 = "single.html" + "?" + love[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }

    // 恐怖片
    else if (url === "?" + thriller[0].id) {
        likeTitle1.innerHTML = thriller[1].title;
        likeTitle2.innerHTML = thriller[2].title;
        likeTitle3.innerHTML = thriller[3].title;
        document.getElementById("likeImage1").src = thriller[1].image;
        document.getElementById("likeImage2").src = thriller[2].image;
        document.getElementById("likeImage3").src = thriller[3].image;
        likeUrl1 = "single.html" + "?" + thriller[1].id;
        likeUrl2 = "single.html" + "?" + thriller[2].id;
        likeUrl3 = "single.html" + "?" + thriller[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + thriller[1].id) {
        likeTitle1.innerHTML = thriller[6].title;
        likeTitle2.innerHTML = thriller[0].title;
        likeTitle3.innerHTML = thriller[2].title;
        document.getElementById("likeImage1").src = thriller[6].image;
        document.getElementById("likeImage2").src = thriller[0].image;
        document.getElementById("likeImage3").src = thriller[2].image;
        likeUrl1 = "single.html" + "?" + thriller[6].id;
        likeUrl2 = "single.html" + "?" + thriller[0].id;
        likeUrl3 = "single.html" + "?" + thriller[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + thriller[2].id) {
        likeTitle1.innerHTML = thriller[7].title;
        likeTitle2.innerHTML = thriller[1].title;
        likeTitle3.innerHTML = thriller[4].title;
        document.getElementById("likeImage1").src = thriller[7].image;
        document.getElementById("likeImage2").src = thriller[1].image;
        document.getElementById("likeImage3").src = thriller[4].image;
        likeUrl1 = "single.html" + "?" + thriller[7].id;
        likeUrl2 = "single.html" + "?" + thriller[1].id;
        likeUrl3 = "single.html" + "?" + thriller[4].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else if (url === "?" + thriller[3].id) {
        likeTitle1.innerHTML = thriller[1].title;
        likeTitle2.innerHTML = thriller[5].title;
        likeTitle3.innerHTML = thriller[2].title;
        document.getElementById("likeImage1").src = thriller[1].image;
        document.getElementById("likeImage2").src = thriller[5].image;
        document.getElementById("likeImage3").src = thriller[2].image;
        likeUrl1 = "single.html" + "?" + thriller[1].id;
        likeUrl2 = "single.html" + "?" + thriller[5].id;
        likeUrl3 = "single.html" + "?" + thriller[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + thriller[4].id) {
        likeTitle1.innerHTML = thriller[1].title;
        likeTitle2.innerHTML = thriller[7].title;
        likeTitle3.innerHTML = thriller[3].title;
        document.getElementById("likeImage1").src = thriller[1].image;
        document.getElementById("likeImage2").src = thriller[7].image;
        document.getElementById("likeImage3").src = thriller[3].image;
        likeUrl1 = "single.html" + "?" + thriller[1].id;
        likeUrl2 = "single.html" + "?" + thriller[7].id;
        likeUrl3 = "single.html" + "?" + thriller[3].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + thriller[5].id) {
        likeTitle1.innerHTML = thriller[2].title;
        likeTitle2.innerHTML = thriller[4].title;
        likeTitle3.innerHTML = thriller[6].title;
        document.getElementById("likeImage1").src = thriller[2].image;
        document.getElementById("likeImage2").src = thriller[4].image;
        document.getElementById("likeImage3").src = thriller[6].image;
        likeUrl1 = "single.html" + "?" + thriller[2].id;
        likeUrl2 = "single.html" + "?" + thriller[4].id;
        likeUrl3 = "single.html" + "?" + thriller[6].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + thriller[6].id) {
        likeTitle1.innerHTML = thriller[5].title;
        likeTitle2.innerHTML = thriller[0].title;
        likeTitle3.innerHTML = thriller[1].title;
        document.getElementById("likeImage1").src = thriller[5].image;
        document.getElementById("likeImage2").src = thriller[0].image;
        document.getElementById("likeImage3").src = thriller[1].image;
        likeUrl1 = "single.html" + "?" + thriller[5].id;
        likeUrl2 = "single.html" + "?" + thriller[0].id;
        likeUrl3 = "single.html" + "?" + thriller[1].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    } else if (url === "?" + thriller[7].id) {
        likeTitle1.innerHTML = thriller[4].title;
        likeTitle2.innerHTML = thriller[6].title;
        likeTitle3.innerHTML = thriller[2].title;
        document.getElementById("likeImage1").src = thriller[2].image;
        document.getElementById("likeImage2").src = thriller[6].image;
        document.getElementById("likeImage3").src = thriller[2].image;
        likeUrl1 = "single.html" + "?" + thriller[4].id;
        likeUrl2 = "single.html" + "?" + thriller[6].id;
        likeUrl3 = "single.html" + "?" + thriller[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;

    } else {
        likeTitle1.innerHTML = newMovies[1].title;
        likeTitle2.innerHTML = newMovies[2].title;
        likeTitle3.innerHTML = newMovies[3].title;
        document.getElementById("likeImage1").src = newMovies[1].image;
        document.getElementById("likeImage2").src = newMovies[2].image;
        document.getElementById("likeImage3").src = newMovies[3].image;
        likeUrl1 = "single.html" + "?" + newMovies[0].id;
        likeUrl2 = "single.html" + "?" + newMovies[1].id;
        likeUrl3 = "single.html" + "?" + newMovies[2].id;
        document.getElementById("likeTitle1").href = document.getElementById("likeImageUrl1").href = likeUrl1;
        document.getElementById("likeTitle2").href = document.getElementById("likeImageUrl2").href = likeUrl2;
        document.getElementById("likeTitle3").href = document.getElementById("likeImageUrl3").href = likeUrl3;
    }
}

function SingleSearch() {
    var search = document.getElementById('SingleOpenUrl');

    search.onclick = function () {
        var key = document.getElementById('SingleKey').value;
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
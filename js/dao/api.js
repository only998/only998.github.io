var newMovies = localStorage.getItem("newMovies");
var art = localStorage.getItem("art");
var cartoon = localStorage.getItem("cartoon");
var comedy = localStorage.getItem("comedy");
var fantasy = localStorage.getItem("fantasy");
var love = localStorage.getItem("love");
var thriller = localStorage.getItem("thriller");
var classifycation = localStorage.getItem("calssifycation");

newMovies = JSON.parse(newMovies);
art = JSON.parse(art);
cartoon = JSON.parse(cartoon);
comedy = JSON.parse(comedy);
fantasy = JSON.parse(fantasy);
love = JSON.parse(love);
thriller = JSON.parse(thriller);
calssifycation = JSON.parse(classifycation);

function classification() {
    var classify1 = classifys[0].classify1;
    var classify2 = classifys[0].classify2;
    var classify3 = classifys[0].classify3;
    var classify4 = classifys[0].classify4;
    var classify5 = classifys[0].classify5;
    var classify6 = classifys[0].classify6;
    var classify7 = classifys[0].classify7;

    alert("网站目前共有7个分类："+classify1+" | "+classify2+" | "+classify3+" | "+classify4+" | "+classify5+" | "+classify6+" | "+classify7)
}

window.onload = function () {
    // 实现按电影名和ID查询
    Search();
};

function Search() {
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

function loadHtml() {
    document.getElementById("html").innerHTML = "<hr>\n" +
        "        <span>电影编号</span>：<span id=\"id1\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt1\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year1\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title1\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating1\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title1\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors1\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts1\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres1\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image1\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis1\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id2\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt2\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year2\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title2\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating2\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title2\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors2\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts2\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres2\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image2\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis2\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id3\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt3\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year3\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title3\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating3\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title3\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors3\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts3\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres3\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image3\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis3\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id4\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt4\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year4\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title4\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating4\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title4\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors4\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts4\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres4\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image4\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis4\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id5\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt5\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year5\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title5\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating5\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title5\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors5\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts5\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres5\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image5\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis5\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id6\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt6\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year6\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title6\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating6\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title6\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors6\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts6\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres6\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image6\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis6\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id7\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt7\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year7\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title7\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating7\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title7\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors7\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts7\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres7\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image7\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis7\"></span>\n" +
        "        <hr>\n" +
        "        <span>电影编号</span>：<span id=\"id8\"></span><br />\n" +
        "        <span>原链接</span>：<span id=\"alt8\"></span><br />\n" +
        "        <span>年份</span>：<span id=\"year8\"></span><br />\n" +
        "        <span>片名</span>：<span id=\"title8\"></span><br />\n" +
        "        <span>评分</span>：<span id=\"rating8\"></span><br />\n" +
        "        <span>又名</span>：<span id=\"original_title8\"></span><br />\n" +
        "        <span>导演</span>：<span id=\"directors8\"></span><br />\n" +
        "        <span>主演</span>：<span id=\"casts8\"></span><br />\n" +
        "        <span>类别</span>：<span id=\"genres8\"></span><br />\n" +
        "        <span>海报</span>：<span id=\"image8\"></span><br />\n" +
        "        <span>剧情简介</span>：<span id=\"synopsis8\"></span>\n" +
        "        <hr>";
}

function indexInfo(){
    loadHtml();
    document.getElementById("id1").innerHTML= newMovies[0].id;
    document.getElementById("id2").innerHTML= newMovies[1].id;
    document.getElementById("id3").innerHTML= newMovies[2].id;
    document.getElementById("id4").innerHTML= newMovies[3].id;
    document.getElementById("id5").innerHTML= newMovies[4].id;
    document.getElementById("id6").innerHTML= newMovies[5].id;
    document.getElementById("id7").innerHTML= newMovies[6].id;
    document.getElementById("id8").innerHTML= newMovies[7].id;

    document.getElementById("alt1").innerHTML= newMovies[0].alt;
    document.getElementById("alt2").innerHTML= newMovies[1].alt;
    document.getElementById("alt3").innerHTML= newMovies[2].alt;
    document.getElementById("alt4").innerHTML= newMovies[3].alt;
    document.getElementById("alt5").innerHTML= newMovies[4].alt;
    document.getElementById("alt6").innerHTML= newMovies[5].alt;
    document.getElementById("alt7").innerHTML= newMovies[6].alt;
    document.getElementById("alt8").innerHTML= newMovies[7].alt;

    document.getElementById("year1").innerHTML= newMovies[0].year;
    document.getElementById("year2").innerHTML= newMovies[1].year;
    document.getElementById("year3").innerHTML= newMovies[2].year;
    document.getElementById("year4").innerHTML= newMovies[3].year;
    document.getElementById("year5").innerHTML= newMovies[4].year;
    document.getElementById("year6").innerHTML= newMovies[5].year;
    document.getElementById("year7").innerHTML= newMovies[6].year;
    document.getElementById("year8").innerHTML= newMovies[7].year;

    document.getElementById("title1").innerHTML= newMovies[0].title;
    document.getElementById("title2").innerHTML= newMovies[1].title;
    document.getElementById("title3").innerHTML= newMovies[2].title;
    document.getElementById("title4").innerHTML= newMovies[3].title;
    document.getElementById("title5").innerHTML= newMovies[4].title;
    document.getElementById("title6").innerHTML= newMovies[5].title;
    document.getElementById("title7").innerHTML= newMovies[6].title;
    document.getElementById("title8").innerHTML= newMovies[7].title;

    document.getElementById("rating1").innerHTML= newMovies[0].rating;
    document.getElementById("rating2").innerHTML= newMovies[1].rating;
    document.getElementById("rating3").innerHTML= newMovies[2].rating;
    document.getElementById("rating4").innerHTML= newMovies[3].rating;
    document.getElementById("rating5").innerHTML= newMovies[4].rating;
    document.getElementById("rating6").innerHTML= newMovies[5].rating;
    document.getElementById("rating7").innerHTML= newMovies[6].rating;
    document.getElementById("rating8").innerHTML= newMovies[7].rating;

    document.getElementById("original_title1").innerHTML= newMovies[0].original_title;
    document.getElementById("original_title2").innerHTML= newMovies[1].original_title;
    document.getElementById("original_title3").innerHTML= newMovies[2].original_title;
    document.getElementById("original_title4").innerHTML= newMovies[3].original_title;
    document.getElementById("original_title5").innerHTML= newMovies[4].original_title;
    document.getElementById("original_title6").innerHTML= newMovies[5].original_title;
    document.getElementById("original_title7").innerHTML= newMovies[6].original_title;
    document.getElementById("original_title8").innerHTML= newMovies[7].original_title;

    document.getElementById("directors1").innerHTML= newMovies[0].directors;
    document.getElementById("directors2").innerHTML= newMovies[1].directors;
    document.getElementById("directors3").innerHTML= newMovies[2].directors;
    document.getElementById("directors4").innerHTML= newMovies[3].directors;
    document.getElementById("directors5").innerHTML= newMovies[4].directors;
    document.getElementById("directors6").innerHTML= newMovies[5].directors;
    document.getElementById("directors7").innerHTML= newMovies[6].directors;
    document.getElementById("directors8").innerHTML= newMovies[7].directors;

    document.getElementById("casts1").innerHTML= newMovies[0].casts;
    document.getElementById("casts2").innerHTML= newMovies[1].casts;
    document.getElementById("casts3").innerHTML= newMovies[2].casts;
    document.getElementById("casts4").innerHTML= newMovies[3].casts;
    document.getElementById("casts5").innerHTML= newMovies[4].casts;
    document.getElementById("casts6").innerHTML= newMovies[5].casts;
    document.getElementById("casts7").innerHTML= newMovies[6].casts;
    document.getElementById("casts8").innerHTML= newMovies[7].casts;

    document.getElementById("genres1").innerHTML= newMovies[0].genres;
    document.getElementById("genres2").innerHTML= newMovies[1].genres;
    document.getElementById("genres3").innerHTML= newMovies[2].genres;
    document.getElementById("genres4").innerHTML= newMovies[3].genres;
    document.getElementById("genres5").innerHTML= newMovies[4].genres;
    document.getElementById("genres6").innerHTML= newMovies[5].genres;
    document.getElementById("genres7").innerHTML= newMovies[6].genres;
    document.getElementById("genres8").innerHTML= newMovies[7].genres;

    document.getElementById("image1").innerHTML= newMovies[0].image;
    document.getElementById("image2").innerHTML= newMovies[1].image;
    document.getElementById("image3").innerHTML= newMovies[2].image;
    document.getElementById("image4").innerHTML= newMovies[3].image;
    document.getElementById("image5").innerHTML= newMovies[4].image;
    document.getElementById("image6").innerHTML= newMovies[5].image;
    document.getElementById("image7").innerHTML= newMovies[6].image;
    document.getElementById("image8").innerHTML= newMovies[7].image;


    document.getElementById("synopsis1").innerHTML= newMovies[0].synopsis;
    document.getElementById("synopsis2").innerHTML= newMovies[1].synopsis;
    document.getElementById("synopsis3").innerHTML= newMovies[2].synopsis;
    document.getElementById("synopsis4").innerHTML= newMovies[3].synopsis;
    document.getElementById("synopsis5").innerHTML= newMovies[4].synopsis;
    document.getElementById("synopsis6").innerHTML= newMovies[5].synopsis;
    document.getElementById("synopsis7").innerHTML= newMovies[6].synopsis;
    document.getElementById("synopsis8").innerHTML= newMovies[7].synopsis;

}

function fantasyInfo(){
    loadHtml();

    document.getElementById("id1").innerHTML= fantasy[0].id;
    document.getElementById("id2").innerHTML= fantasy[1].id;
    document.getElementById("id3").innerHTML= fantasy[2].id;
    document.getElementById("id4").innerHTML= fantasy[3].id;
    document.getElementById("id5").innerHTML= fantasy[4].id;
    document.getElementById("id6").innerHTML= fantasy[5].id;
    document.getElementById("id7").innerHTML= fantasy[6].id;
    document.getElementById("id8").innerHTML= fantasy[7].id;

    document.getElementById("alt1").innerHTML= fantasy[0].alt;
    document.getElementById("alt2").innerHTML= fantasy[1].alt;
    document.getElementById("alt3").innerHTML= fantasy[2].alt;
    document.getElementById("alt4").innerHTML= fantasy[3].alt;
    document.getElementById("alt5").innerHTML= fantasy[4].alt;
    document.getElementById("alt6").innerHTML= fantasy[5].alt;
    document.getElementById("alt7").innerHTML= fantasy[6].alt;
    document.getElementById("alt8").innerHTML= fantasy[7].alt;

    document.getElementById("year1").innerHTML= fantasy[0].year;
    document.getElementById("year2").innerHTML= fantasy[1].year;
    document.getElementById("year3").innerHTML= fantasy[2].year;
    document.getElementById("year4").innerHTML= fantasy[3].year;
    document.getElementById("year5").innerHTML= fantasy[4].year;
    document.getElementById("year6").innerHTML= fantasy[5].year;
    document.getElementById("year7").innerHTML= fantasy[6].year;
    document.getElementById("year8").innerHTML= fantasy[7].year;

    document.getElementById("title1").innerHTML= fantasy[0].title;
    document.getElementById("title2").innerHTML= fantasy[1].title;
    document.getElementById("title3").innerHTML= fantasy[2].title;
    document.getElementById("title4").innerHTML= fantasy[3].title;
    document.getElementById("title5").innerHTML= fantasy[4].title;
    document.getElementById("title6").innerHTML= fantasy[5].title;
    document.getElementById("title7").innerHTML= fantasy[6].title;
    document.getElementById("title8").innerHTML= fantasy[7].title;

    document.getElementById("rating1").innerHTML= fantasy[0].rating;
    document.getElementById("rating2").innerHTML= fantasy[1].rating;
    document.getElementById("rating3").innerHTML= fantasy[2].rating;
    document.getElementById("rating4").innerHTML= fantasy[3].rating;
    document.getElementById("rating5").innerHTML= fantasy[4].rating;
    document.getElementById("rating6").innerHTML= fantasy[5].rating;
    document.getElementById("rating7").innerHTML= fantasy[6].rating;
    document.getElementById("rating8").innerHTML= fantasy[7].rating;

    document.getElementById("original_title1").innerHTML= fantasy[0].original_title;
    document.getElementById("original_title2").innerHTML= fantasy[1].original_title;
    document.getElementById("original_title3").innerHTML= fantasy[2].original_title;
    document.getElementById("original_title4").innerHTML= fantasy[3].original_title;
    document.getElementById("original_title5").innerHTML= fantasy[4].original_title;
    document.getElementById("original_title6").innerHTML= fantasy[5].original_title;
    document.getElementById("original_title7").innerHTML= fantasy[6].original_title;
    document.getElementById("original_title8").innerHTML= fantasy[7].original_title;

    document.getElementById("directors1").innerHTML= fantasy[0].directors;
    document.getElementById("directors2").innerHTML= fantasy[1].directors;
    document.getElementById("directors3").innerHTML= fantasy[2].directors;
    document.getElementById("directors4").innerHTML= fantasy[3].directors;
    document.getElementById("directors5").innerHTML= fantasy[4].directors;
    document.getElementById("directors6").innerHTML= fantasy[5].directors;
    document.getElementById("directors7").innerHTML= fantasy[6].directors;
    document.getElementById("directors8").innerHTML= fantasy[7].directors;

    document.getElementById("casts1").innerHTML= fantasy[0].casts;
    document.getElementById("casts2").innerHTML= fantasy[1].casts;
    document.getElementById("casts3").innerHTML= fantasy[2].casts;
    document.getElementById("casts4").innerHTML= fantasy[3].casts;
    document.getElementById("casts5").innerHTML= fantasy[4].casts;
    document.getElementById("casts6").innerHTML= fantasy[5].casts;
    document.getElementById("casts7").innerHTML= fantasy[6].casts;
    document.getElementById("casts8").innerHTML= fantasy[7].casts;

    document.getElementById("genres1").innerHTML= fantasy[0].genres;
    document.getElementById("genres2").innerHTML= fantasy[1].genres;
    document.getElementById("genres3").innerHTML= fantasy[2].genres;
    document.getElementById("genres4").innerHTML= fantasy[3].genres;
    document.getElementById("genres5").innerHTML= fantasy[4].genres;
    document.getElementById("genres6").innerHTML= fantasy[5].genres;
    document.getElementById("genres7").innerHTML= fantasy[6].genres;
    document.getElementById("genres8").innerHTML= fantasy[7].genres;

    document.getElementById("image1").innerHTML= fantasy[0].image;
    document.getElementById("image2").innerHTML= fantasy[1].image;
    document.getElementById("image3").innerHTML= fantasy[2].image;
    document.getElementById("image4").innerHTML= fantasy[3].image;
    document.getElementById("image5").innerHTML= fantasy[4].image;
    document.getElementById("image6").innerHTML= fantasy[5].image;
    document.getElementById("image7").innerHTML= fantasy[6].image;
    document.getElementById("image8").innerHTML= fantasy[7].image;


    document.getElementById("synopsis1").innerHTML= fantasy[0].synopsis;
    document.getElementById("synopsis2").innerHTML= fantasy[1].synopsis;
    document.getElementById("synopsis3").innerHTML= fantasy[2].synopsis;
    document.getElementById("synopsis4").innerHTML= fantasy[3].synopsis;
    document.getElementById("synopsis5").innerHTML= fantasy[4].synopsis;
    document.getElementById("synopsis6").innerHTML= fantasy[5].synopsis;
    document.getElementById("synopsis7").innerHTML= fantasy[6].synopsis;
    document.getElementById("synopsis8").innerHTML= fantasy[7].synopsis;

}

function loveInfo(){
    loadHtml();

    document.getElementById("id1").innerHTML= love[0].id;
    document.getElementById("id2").innerHTML= love[1].id;
    document.getElementById("id3").innerHTML= love[2].id;
    document.getElementById("id4").innerHTML= love[3].id;
    document.getElementById("id5").innerHTML= love[4].id;
    document.getElementById("id6").innerHTML= love[5].id;
    document.getElementById("id7").innerHTML= love[6].id;
    document.getElementById("id8").innerHTML= love[7].id;

    document.getElementById("alt1").innerHTML= love[0].alt;
    document.getElementById("alt2").innerHTML= love[1].alt;
    document.getElementById("alt3").innerHTML= love[2].alt;
    document.getElementById("alt4").innerHTML= love[3].alt;
    document.getElementById("alt5").innerHTML= love[4].alt;
    document.getElementById("alt6").innerHTML= love[5].alt;
    document.getElementById("alt7").innerHTML= love[6].alt;
    document.getElementById("alt8").innerHTML= love[7].alt;

    document.getElementById("year1").innerHTML= love[0].year;
    document.getElementById("year2").innerHTML= love[1].year;
    document.getElementById("year3").innerHTML= love[2].year;
    document.getElementById("year4").innerHTML= love[3].year;
    document.getElementById("year5").innerHTML= love[4].year;
    document.getElementById("year6").innerHTML= love[5].year;
    document.getElementById("year7").innerHTML= love[6].year;
    document.getElementById("year8").innerHTML= love[7].year;

    document.getElementById("title1").innerHTML= love[0].title;
    document.getElementById("title2").innerHTML= love[1].title;
    document.getElementById("title3").innerHTML= love[2].title;
    document.getElementById("title4").innerHTML= love[3].title;
    document.getElementById("title5").innerHTML= love[4].title;
    document.getElementById("title6").innerHTML= love[5].title;
    document.getElementById("title7").innerHTML= love[6].title;
    document.getElementById("title8").innerHTML= love[7].title;

    document.getElementById("rating1").innerHTML= love[0].rating;
    document.getElementById("rating2").innerHTML= love[1].rating;
    document.getElementById("rating3").innerHTML= love[2].rating;
    document.getElementById("rating4").innerHTML= love[3].rating;
    document.getElementById("rating5").innerHTML= love[4].rating;
    document.getElementById("rating6").innerHTML= love[5].rating;
    document.getElementById("rating7").innerHTML= love[6].rating;
    document.getElementById("rating8").innerHTML= love[7].rating;

    document.getElementById("original_title1").innerHTML= love[0].original_title;
    document.getElementById("original_title2").innerHTML= love[1].original_title;
    document.getElementById("original_title3").innerHTML= love[2].original_title;
    document.getElementById("original_title4").innerHTML= love[3].original_title;
    document.getElementById("original_title5").innerHTML= love[4].original_title;
    document.getElementById("original_title6").innerHTML= love[5].original_title;
    document.getElementById("original_title7").innerHTML= love[6].original_title;
    document.getElementById("original_title8").innerHTML= love[7].original_title;

    document.getElementById("directors1").innerHTML= love[0].directors;
    document.getElementById("directors2").innerHTML= love[1].directors;
    document.getElementById("directors3").innerHTML= love[2].directors;
    document.getElementById("directors4").innerHTML= love[3].directors;
    document.getElementById("directors5").innerHTML= love[4].directors;
    document.getElementById("directors6").innerHTML= love[5].directors;
    document.getElementById("directors7").innerHTML= love[6].directors;
    document.getElementById("directors8").innerHTML= love[7].directors;

    document.getElementById("casts1").innerHTML= love[0].casts;
    document.getElementById("casts2").innerHTML= love[1].casts;
    document.getElementById("casts3").innerHTML= love[2].casts;
    document.getElementById("casts4").innerHTML= love[3].casts;
    document.getElementById("casts5").innerHTML= love[4].casts;
    document.getElementById("casts6").innerHTML= love[5].casts;
    document.getElementById("casts7").innerHTML= love[6].casts;
    document.getElementById("casts8").innerHTML= love[7].casts;

    document.getElementById("genres1").innerHTML= love[0].genres;
    document.getElementById("genres2").innerHTML= love[1].genres;
    document.getElementById("genres3").innerHTML= love[2].genres;
    document.getElementById("genres4").innerHTML= love[3].genres;
    document.getElementById("genres5").innerHTML= love[4].genres;
    document.getElementById("genres6").innerHTML= love[5].genres;
    document.getElementById("genres7").innerHTML= love[6].genres;
    document.getElementById("genres8").innerHTML= love[7].genres;

    document.getElementById("image1").innerHTML= love[0].image;
    document.getElementById("image2").innerHTML= love[1].image;
    document.getElementById("image3").innerHTML= love[2].image;
    document.getElementById("image4").innerHTML= love[3].image;
    document.getElementById("image5").innerHTML= love[4].image;
    document.getElementById("image6").innerHTML= love[5].image;
    document.getElementById("image7").innerHTML= love[6].image;
    document.getElementById("image8").innerHTML= love[7].image;


    document.getElementById("synopsis1").innerHTML= love[0].synopsis;
    document.getElementById("synopsis2").innerHTML= love[1].synopsis;
    document.getElementById("synopsis3").innerHTML= love[2].synopsis;
    document.getElementById("synopsis4").innerHTML= love[3].synopsis;
    document.getElementById("synopsis5").innerHTML= love[4].synopsis;
    document.getElementById("synopsis6").innerHTML= love[5].synopsis;
    document.getElementById("synopsis7").innerHTML= love[6].synopsis;
    document.getElementById("synopsis8").innerHTML= love[7].synopsis;

}

function comedyInfo(){
    loadHtml();

    document.getElementById("id1").innerHTML= comedy[0].id;
    document.getElementById("id2").innerHTML= comedy[1].id;
    document.getElementById("id3").innerHTML= comedy[2].id;
    document.getElementById("id4").innerHTML= comedy[3].id;
    document.getElementById("id5").innerHTML= comedy[4].id;
    document.getElementById("id6").innerHTML= comedy[5].id;
    document.getElementById("id7").innerHTML= comedy[6].id;
    document.getElementById("id8").innerHTML= comedy[7].id;

    document.getElementById("alt1").innerHTML= comedy[0].alt;
    document.getElementById("alt2").innerHTML= comedy[1].alt;
    document.getElementById("alt3").innerHTML= comedy[2].alt;
    document.getElementById("alt4").innerHTML= comedy[3].alt;
    document.getElementById("alt5").innerHTML= comedy[4].alt;
    document.getElementById("alt6").innerHTML= comedy[5].alt;
    document.getElementById("alt7").innerHTML= comedy[6].alt;
    document.getElementById("alt8").innerHTML= comedy[7].alt;

    document.getElementById("year1").innerHTML= comedy[0].year;
    document.getElementById("year2").innerHTML= comedy[1].year;
    document.getElementById("year3").innerHTML= comedy[2].year;
    document.getElementById("year4").innerHTML= comedy[3].year;
    document.getElementById("year5").innerHTML= comedy[4].year;
    document.getElementById("year6").innerHTML= comedy[5].year;
    document.getElementById("year7").innerHTML= comedy[6].year;
    document.getElementById("year8").innerHTML= comedy[7].year;

    document.getElementById("title1").innerHTML= comedy[0].title;
    document.getElementById("title2").innerHTML= comedy[1].title;
    document.getElementById("title3").innerHTML= comedy[2].title;
    document.getElementById("title4").innerHTML= comedy[3].title;
    document.getElementById("title5").innerHTML= comedy[4].title;
    document.getElementById("title6").innerHTML= comedy[5].title;
    document.getElementById("title7").innerHTML= comedy[6].title;
    document.getElementById("title8").innerHTML= comedy[7].title;

    document.getElementById("rating1").innerHTML= comedy[0].rating;
    document.getElementById("rating2").innerHTML= comedy[1].rating;
    document.getElementById("rating3").innerHTML= comedy[2].rating;
    document.getElementById("rating4").innerHTML= comedy[3].rating;
    document.getElementById("rating5").innerHTML= comedy[4].rating;
    document.getElementById("rating6").innerHTML= comedy[5].rating;
    document.getElementById("rating7").innerHTML= comedy[6].rating;
    document.getElementById("rating8").innerHTML= comedy[7].rating;

    document.getElementById("original_title1").innerHTML= comedy[0].original_title;
    document.getElementById("original_title2").innerHTML= comedy[1].original_title;
    document.getElementById("original_title3").innerHTML= comedy[2].original_title;
    document.getElementById("original_title4").innerHTML= comedy[3].original_title;
    document.getElementById("original_title5").innerHTML= comedy[4].original_title;
    document.getElementById("original_title6").innerHTML= comedy[5].original_title;
    document.getElementById("original_title7").innerHTML= comedy[6].original_title;
    document.getElementById("original_title8").innerHTML= comedy[7].original_title;

    document.getElementById("directors1").innerHTML= comedy[0].directors;
    document.getElementById("directors2").innerHTML= comedy[1].directors;
    document.getElementById("directors3").innerHTML= comedy[2].directors;
    document.getElementById("directors4").innerHTML= comedy[3].directors;
    document.getElementById("directors5").innerHTML= comedy[4].directors;
    document.getElementById("directors6").innerHTML= comedy[5].directors;
    document.getElementById("directors7").innerHTML= comedy[6].directors;
    document.getElementById("directors8").innerHTML= comedy[7].directors;

    document.getElementById("casts1").innerHTML= comedy[0].casts;
    document.getElementById("casts2").innerHTML= comedy[1].casts;
    document.getElementById("casts3").innerHTML= comedy[2].casts;
    document.getElementById("casts4").innerHTML= comedy[3].casts;
    document.getElementById("casts5").innerHTML= comedy[4].casts;
    document.getElementById("casts6").innerHTML= comedy[5].casts;
    document.getElementById("casts7").innerHTML= comedy[6].casts;
    document.getElementById("casts8").innerHTML= comedy[7].casts;

    document.getElementById("genres1").innerHTML= comedy[0].genres;
    document.getElementById("genres2").innerHTML= comedy[1].genres;
    document.getElementById("genres3").innerHTML= comedy[2].genres;
    document.getElementById("genres4").innerHTML= comedy[3].genres;
    document.getElementById("genres5").innerHTML= comedy[4].genres;
    document.getElementById("genres6").innerHTML= comedy[5].genres;
    document.getElementById("genres7").innerHTML= comedy[6].genres;
    document.getElementById("genres8").innerHTML= comedy[7].genres;

    document.getElementById("image1").innerHTML= comedy[0].image;
    document.getElementById("image2").innerHTML= comedy[1].image;
    document.getElementById("image3").innerHTML= comedy[2].image;
    document.getElementById("image4").innerHTML= comedy[3].image;
    document.getElementById("image5").innerHTML= comedy[4].image;
    document.getElementById("image6").innerHTML= comedy[5].image;
    document.getElementById("image7").innerHTML= comedy[6].image;
    document.getElementById("image8").innerHTML= comedy[7].image;


    document.getElementById("synopsis1").innerHTML= comedy[0].synopsis;
    document.getElementById("synopsis2").innerHTML= comedy[1].synopsis;
    document.getElementById("synopsis3").innerHTML= comedy[2].synopsis;
    document.getElementById("synopsis4").innerHTML= comedy[3].synopsis;
    document.getElementById("synopsis5").innerHTML= comedy[4].synopsis;
    document.getElementById("synopsis6").innerHTML= comedy[5].synopsis;
    document.getElementById("synopsis7").innerHTML= comedy[6].synopsis;
    document.getElementById("synopsis8").innerHTML= comedy[7].synopsis;

}

function artInfo(){
    loadHtml();

    document.getElementById("id1").innerHTML= art[0].id;
    document.getElementById("id2").innerHTML= art[1].id;
    document.getElementById("id3").innerHTML= art[2].id;
    document.getElementById("id4").innerHTML= art[3].id;
    document.getElementById("id5").innerHTML= art[4].id;
    document.getElementById("id6").innerHTML= art[5].id;
    document.getElementById("id7").innerHTML= art[6].id;
    document.getElementById("id8").innerHTML= art[7].id;

    document.getElementById("alt1").innerHTML= art[0].alt;
    document.getElementById("alt2").innerHTML= art[1].alt;
    document.getElementById("alt3").innerHTML= art[2].alt;
    document.getElementById("alt4").innerHTML= art[3].alt;
    document.getElementById("alt5").innerHTML= art[4].alt;
    document.getElementById("alt6").innerHTML= art[5].alt;
    document.getElementById("alt7").innerHTML= art[6].alt;
    document.getElementById("alt8").innerHTML= art[7].alt;

    document.getElementById("year1").innerHTML= art[0].year;
    document.getElementById("year2").innerHTML= art[1].year;
    document.getElementById("year3").innerHTML= art[2].year;
    document.getElementById("year4").innerHTML= art[3].year;
    document.getElementById("year5").innerHTML= art[4].year;
    document.getElementById("year6").innerHTML= art[5].year;
    document.getElementById("year7").innerHTML= art[6].year;
    document.getElementById("year8").innerHTML= art[7].year;

    document.getElementById("title1").innerHTML= art[0].title;
    document.getElementById("title2").innerHTML= art[1].title;
    document.getElementById("title3").innerHTML= art[2].title;
    document.getElementById("title4").innerHTML= art[3].title;
    document.getElementById("title5").innerHTML= art[4].title;
    document.getElementById("title6").innerHTML= art[5].title;
    document.getElementById("title7").innerHTML= art[6].title;
    document.getElementById("title8").innerHTML= art[7].title;

    document.getElementById("rating1").innerHTML= art[0].rating;
    document.getElementById("rating2").innerHTML= art[1].rating;
    document.getElementById("rating3").innerHTML= art[2].rating;
    document.getElementById("rating4").innerHTML= art[3].rating;
    document.getElementById("rating5").innerHTML= art[4].rating;
    document.getElementById("rating6").innerHTML= art[5].rating;
    document.getElementById("rating7").innerHTML= art[6].rating;
    document.getElementById("rating8").innerHTML= art[7].rating;

    document.getElementById("original_title1").innerHTML= art[0].original_title;
    document.getElementById("original_title2").innerHTML= art[1].original_title;
    document.getElementById("original_title3").innerHTML= art[2].original_title;
    document.getElementById("original_title4").innerHTML= art[3].original_title;
    document.getElementById("original_title5").innerHTML= art[4].original_title;
    document.getElementById("original_title6").innerHTML= art[5].original_title;
    document.getElementById("original_title7").innerHTML= art[6].original_title;
    document.getElementById("original_title8").innerHTML= art[7].original_title;

    document.getElementById("directors1").innerHTML= art[0].directors;
    document.getElementById("directors2").innerHTML= art[1].directors;
    document.getElementById("directors3").innerHTML= art[2].directors;
    document.getElementById("directors4").innerHTML= art[3].directors;
    document.getElementById("directors5").innerHTML= art[4].directors;
    document.getElementById("directors6").innerHTML= art[5].directors;
    document.getElementById("directors7").innerHTML= art[6].directors;
    document.getElementById("directors8").innerHTML= art[7].directors;

    document.getElementById("casts1").innerHTML= art[0].casts;
    document.getElementById("casts2").innerHTML= art[1].casts;
    document.getElementById("casts3").innerHTML= art[2].casts;
    document.getElementById("casts4").innerHTML= art[3].casts;
    document.getElementById("casts5").innerHTML= art[4].casts;
    document.getElementById("casts6").innerHTML= art[5].casts;
    document.getElementById("casts7").innerHTML= art[6].casts;
    document.getElementById("casts8").innerHTML= art[7].casts;

    document.getElementById("genres1").innerHTML= art[0].genres;
    document.getElementById("genres2").innerHTML= art[1].genres;
    document.getElementById("genres3").innerHTML= art[2].genres;
    document.getElementById("genres4").innerHTML= art[3].genres;
    document.getElementById("genres5").innerHTML= art[4].genres;
    document.getElementById("genres6").innerHTML= art[5].genres;
    document.getElementById("genres7").innerHTML= art[6].genres;
    document.getElementById("genres8").innerHTML= art[7].genres;

    document.getElementById("image1").innerHTML= art[0].image;
    document.getElementById("image2").innerHTML= art[1].image;
    document.getElementById("image3").innerHTML= art[2].image;
    document.getElementById("image4").innerHTML= art[3].image;
    document.getElementById("image5").innerHTML= art[4].image;
    document.getElementById("image6").innerHTML= art[5].image;
    document.getElementById("image7").innerHTML= art[6].image;
    document.getElementById("image8").innerHTML= art[7].image;


    document.getElementById("synopsis1").innerHTML= art[0].synopsis;
    document.getElementById("synopsis2").innerHTML= art[1].synopsis;
    document.getElementById("synopsis3").innerHTML= art[2].synopsis;
    document.getElementById("synopsis4").innerHTML= art[3].synopsis;
    document.getElementById("synopsis5").innerHTML= art[4].synopsis;
    document.getElementById("synopsis6").innerHTML= art[5].synopsis;
    document.getElementById("synopsis7").innerHTML= art[6].synopsis;
    document.getElementById("synopsis8").innerHTML= art[7].synopsis;

}

function cartoonInfo(){
    loadHtml();

    document.getElementById("id1").innerHTML= cartoon[0].id;
    document.getElementById("id2").innerHTML= cartoon[1].id;
    document.getElementById("id3").innerHTML= cartoon[2].id;
    document.getElementById("id4").innerHTML= cartoon[3].id;
    document.getElementById("id5").innerHTML= cartoon[4].id;
    document.getElementById("id6").innerHTML= cartoon[5].id;
    document.getElementById("id7").innerHTML= cartoon[6].id;
    document.getElementById("id8").innerHTML= cartoon[7].id;

    document.getElementById("alt1").innerHTML= cartoon[0].alt;
    document.getElementById("alt2").innerHTML= cartoon[1].alt;
    document.getElementById("alt3").innerHTML= cartoon[2].alt;
    document.getElementById("alt4").innerHTML= cartoon[3].alt;
    document.getElementById("alt5").innerHTML= cartoon[4].alt;
    document.getElementById("alt6").innerHTML= cartoon[5].alt;
    document.getElementById("alt7").innerHTML= cartoon[6].alt;
    document.getElementById("alt8").innerHTML= cartoon[7].alt;

    document.getElementById("year1").innerHTML= cartoon[0].year;
    document.getElementById("year2").innerHTML= cartoon[1].year;
    document.getElementById("year3").innerHTML= cartoon[2].year;
    document.getElementById("year4").innerHTML= cartoon[3].year;
    document.getElementById("year5").innerHTML= cartoon[4].year;
    document.getElementById("year6").innerHTML= cartoon[5].year;
    document.getElementById("year7").innerHTML= cartoon[6].year;
    document.getElementById("year8").innerHTML= cartoon[7].year;

    document.getElementById("title1").innerHTML= cartoon[0].title;
    document.getElementById("title2").innerHTML= cartoon[1].title;
    document.getElementById("title3").innerHTML= cartoon[2].title;
    document.getElementById("title4").innerHTML= cartoon[3].title;
    document.getElementById("title5").innerHTML= cartoon[4].title;
    document.getElementById("title6").innerHTML= cartoon[5].title;
    document.getElementById("title7").innerHTML= cartoon[6].title;
    document.getElementById("title8").innerHTML= cartoon[7].title;

    document.getElementById("rating1").innerHTML= cartoon[0].rating;
    document.getElementById("rating2").innerHTML= cartoon[1].rating;
    document.getElementById("rating3").innerHTML= cartoon[2].rating;
    document.getElementById("rating4").innerHTML= cartoon[3].rating;
    document.getElementById("rating5").innerHTML= cartoon[4].rating;
    document.getElementById("rating6").innerHTML= cartoon[5].rating;
    document.getElementById("rating7").innerHTML= cartoon[6].rating;
    document.getElementById("rating8").innerHTML= cartoon[7].rating;

    document.getElementById("original_title1").innerHTML= cartoon[0].original_title;
    document.getElementById("original_title2").innerHTML= cartoon[1].original_title;
    document.getElementById("original_title3").innerHTML= cartoon[2].original_title;
    document.getElementById("original_title4").innerHTML= cartoon[3].original_title;
    document.getElementById("original_title5").innerHTML= cartoon[4].original_title;
    document.getElementById("original_title6").innerHTML= cartoon[5].original_title;
    document.getElementById("original_title7").innerHTML= cartoon[6].original_title;
    document.getElementById("original_title8").innerHTML= cartoon[7].original_title;

    document.getElementById("directors1").innerHTML= cartoon[0].directors;
    document.getElementById("directors2").innerHTML= cartoon[1].directors;
    document.getElementById("directors3").innerHTML= cartoon[2].directors;
    document.getElementById("directors4").innerHTML= cartoon[3].directors;
    document.getElementById("directors5").innerHTML= cartoon[4].directors;
    document.getElementById("directors6").innerHTML= cartoon[5].directors;
    document.getElementById("directors7").innerHTML= cartoon[6].directors;
    document.getElementById("directors8").innerHTML= cartoon[7].directors;

    document.getElementById("casts1").innerHTML= cartoon[0].casts;
    document.getElementById("casts2").innerHTML= cartoon[1].casts;
    document.getElementById("casts3").innerHTML= cartoon[2].casts;
    document.getElementById("casts4").innerHTML= cartoon[3].casts;
    document.getElementById("casts5").innerHTML= cartoon[4].casts;
    document.getElementById("casts6").innerHTML= cartoon[5].casts;
    document.getElementById("casts7").innerHTML= cartoon[6].casts;
    document.getElementById("casts8").innerHTML= cartoon[7].casts;

    document.getElementById("genres1").innerHTML= cartoon[0].genres;
    document.getElementById("genres2").innerHTML= cartoon[1].genres;
    document.getElementById("genres3").innerHTML= cartoon[2].genres;
    document.getElementById("genres4").innerHTML= cartoon[3].genres;
    document.getElementById("genres5").innerHTML= cartoon[4].genres;
    document.getElementById("genres6").innerHTML= cartoon[5].genres;
    document.getElementById("genres7").innerHTML= cartoon[6].genres;
    document.getElementById("genres8").innerHTML= cartoon[7].genres;

    document.getElementById("image1").innerHTML= cartoon[0].image;
    document.getElementById("image2").innerHTML= cartoon[1].image;
    document.getElementById("image3").innerHTML= cartoon[2].image;
    document.getElementById("image4").innerHTML= cartoon[3].image;
    document.getElementById("image5").innerHTML= cartoon[4].image;
    document.getElementById("image6").innerHTML= cartoon[5].image;
    document.getElementById("image7").innerHTML= cartoon[6].image;
    document.getElementById("image8").innerHTML= cartoon[7].image;


    document.getElementById("synopsis1").innerHTML= cartoon[0].synopsis;
    document.getElementById("synopsis2").innerHTML= cartoon[1].synopsis;
    document.getElementById("synopsis3").innerHTML= cartoon[2].synopsis;
    document.getElementById("synopsis4").innerHTML= cartoon[3].synopsis;
    document.getElementById("synopsis5").innerHTML= cartoon[4].synopsis;
    document.getElementById("synopsis6").innerHTML= cartoon[5].synopsis;
    document.getElementById("synopsis7").innerHTML= cartoon[6].synopsis;
    document.getElementById("synopsis8").innerHTML= cartoon[7].synopsis;

}

function thrillerInfo(){
    loadHtml();

    document.getElementById("id1").innerHTML= thriller[0].id;
    document.getElementById("id2").innerHTML= thriller[1].id;
    document.getElementById("id3").innerHTML= thriller[2].id;
    document.getElementById("id4").innerHTML= thriller[3].id;
    document.getElementById("id5").innerHTML= thriller[4].id;
    document.getElementById("id6").innerHTML= thriller[5].id;
    document.getElementById("id7").innerHTML= thriller[6].id;
    document.getElementById("id8").innerHTML= thriller[7].id;

    document.getElementById("alt1").innerHTML= thriller[0].alt;
    document.getElementById("alt2").innerHTML= thriller[1].alt;
    document.getElementById("alt3").innerHTML= thriller[2].alt;
    document.getElementById("alt4").innerHTML= thriller[3].alt;
    document.getElementById("alt5").innerHTML= thriller[4].alt;
    document.getElementById("alt6").innerHTML= thriller[5].alt;
    document.getElementById("alt7").innerHTML= thriller[6].alt;
    document.getElementById("alt8").innerHTML= thriller[7].alt;

    document.getElementById("year1").innerHTML= thriller[0].year;
    document.getElementById("year2").innerHTML= thriller[1].year;
    document.getElementById("year3").innerHTML= thriller[2].year;
    document.getElementById("year4").innerHTML= thriller[3].year;
    document.getElementById("year5").innerHTML= thriller[4].year;
    document.getElementById("year6").innerHTML= thriller[5].year;
    document.getElementById("year7").innerHTML= thriller[6].year;
    document.getElementById("year8").innerHTML= thriller[7].year;

    document.getElementById("title1").innerHTML= thriller[0].title;
    document.getElementById("title2").innerHTML= thriller[1].title;
    document.getElementById("title3").innerHTML= thriller[2].title;
    document.getElementById("title4").innerHTML= thriller[3].title;
    document.getElementById("title5").innerHTML= thriller[4].title;
    document.getElementById("title6").innerHTML= thriller[5].title;
    document.getElementById("title7").innerHTML= thriller[6].title;
    document.getElementById("title8").innerHTML= thriller[7].title;

    document.getElementById("rating1").innerHTML= thriller[0].rating;
    document.getElementById("rating2").innerHTML= thriller[1].rating;
    document.getElementById("rating3").innerHTML= thriller[2].rating;
    document.getElementById("rating4").innerHTML= thriller[3].rating;
    document.getElementById("rating5").innerHTML= thriller[4].rating;
    document.getElementById("rating6").innerHTML= thriller[5].rating;
    document.getElementById("rating7").innerHTML= thriller[6].rating;
    document.getElementById("rating8").innerHTML= thriller[7].rating;

    document.getElementById("original_title1").innerHTML= thriller[0].original_title;
    document.getElementById("original_title2").innerHTML= thriller[1].original_title;
    document.getElementById("original_title3").innerHTML= thriller[2].original_title;
    document.getElementById("original_title4").innerHTML= thriller[3].original_title;
    document.getElementById("original_title5").innerHTML= thriller[4].original_title;
    document.getElementById("original_title6").innerHTML= thriller[5].original_title;
    document.getElementById("original_title7").innerHTML= thriller[6].original_title;
    document.getElementById("original_title8").innerHTML= thriller[7].original_title;

    document.getElementById("directors1").innerHTML= thriller[0].directors;
    document.getElementById("directors2").innerHTML= thriller[1].directors;
    document.getElementById("directors3").innerHTML= thriller[2].directors;
    document.getElementById("directors4").innerHTML= thriller[3].directors;
    document.getElementById("directors5").innerHTML= thriller[4].directors;
    document.getElementById("directors6").innerHTML= thriller[5].directors;
    document.getElementById("directors7").innerHTML= thriller[6].directors;
    document.getElementById("directors8").innerHTML= thriller[7].directors;

    document.getElementById("casts1").innerHTML= thriller[0].casts;
    document.getElementById("casts2").innerHTML= thriller[1].casts;
    document.getElementById("casts3").innerHTML= thriller[2].casts;
    document.getElementById("casts4").innerHTML= thriller[3].casts;
    document.getElementById("casts5").innerHTML= thriller[4].casts;
    document.getElementById("casts6").innerHTML= thriller[5].casts;
    document.getElementById("casts7").innerHTML= thriller[6].casts;
    document.getElementById("casts8").innerHTML= thriller[7].casts;

    document.getElementById("genres1").innerHTML= thriller[0].genres;
    document.getElementById("genres2").innerHTML= thriller[1].genres;
    document.getElementById("genres3").innerHTML= thriller[2].genres;
    document.getElementById("genres4").innerHTML= thriller[3].genres;
    document.getElementById("genres5").innerHTML= thriller[4].genres;
    document.getElementById("genres6").innerHTML= thriller[5].genres;
    document.getElementById("genres7").innerHTML= thriller[6].genres;
    document.getElementById("genres8").innerHTML= thriller[7].genres;

    document.getElementById("image1").innerHTML= thriller[0].image;
    document.getElementById("image2").innerHTML= thriller[1].image;
    document.getElementById("image3").innerHTML= thriller[2].image;
    document.getElementById("image4").innerHTML= thriller[3].image;
    document.getElementById("image5").innerHTML= thriller[4].image;
    document.getElementById("image6").innerHTML= thriller[5].image;
    document.getElementById("image7").innerHTML= thriller[6].image;
    document.getElementById("image8").innerHTML= thriller[7].image;


    document.getElementById("synopsis1").innerHTML= thriller[0].synopsis;
    document.getElementById("synopsis2").innerHTML= thriller[1].synopsis;
    document.getElementById("synopsis3").innerHTML= thriller[2].synopsis;
    document.getElementById("synopsis4").innerHTML= thriller[3].synopsis;
    document.getElementById("synopsis5").innerHTML= thriller[4].synopsis;
    document.getElementById("synopsis6").innerHTML= thriller[5].synopsis;
    document.getElementById("synopsis7").innerHTML= thriller[6].synopsis;
    document.getElementById("synopsis8").innerHTML= thriller[7].synopsis;

}
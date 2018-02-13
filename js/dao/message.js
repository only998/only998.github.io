/**
 * 自嗨留言板
 */

window.onload = function () {
    loadMsg();
};

function  loadMsg() {
    var tb = document.getElementById("show");
    tb.innerHTML = "";
    for (var i = 0; i < window.localStorage.length; i++) {
        var key = localStorage.key(i);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toLocaleDateString()
            + "&nbsp;" + date.toLocaleTimeString();
        var msgStr = localStorage.getItem(key);
        var msg = JSON.parse(msgStr);
        var row = tb.insertRow(i);

        if (msg.content !==undefined) {
            row.insertCell(0).innerHTML = msg.content;
            row.insertCell(1).innerHTML = msg.user;
            row.insertCell(2).innerHTML = msg.title;
            row.insertCell(3).innerHTML = datestr;
        }
    }
}

function addMsg() {
    var titleElement = document.getElementById("title");
    var contentElement = document.getElementById("content");
    var userElement = document.getElementById("user");

    var msg = {
        title: titleElement.value,
        content: contentElement.value,
        user: userElement.value
    };

    var time = new Date().getTime();
    localStorage.setItem(time, JSON.stringify(msg));
    titleElement.value = "";
    contentElement.value = "";
    userElement.value = "";
    alert("留言成功");
    loadMsg();
}

function clearMsg() {
    localStorage.clear();
    alert("全部留言信息已被清除。");
    loadMsg();
}
var classifys = [
    {
        classify1: "首页",
        classify2: "奇幻/科幻片",
        classify3: "爱情片",
        classify4: "喜剧片",
        classify5: "艺术片",
        classify6: "动画/冒险片",
        classify7: "惊悚/悬疑片"
    }
];

classifys = JSON.stringify(classifys);

localStorage.setItem("classifys", classifys);

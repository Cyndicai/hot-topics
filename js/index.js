const navItems = document.querySelectorAll("header nav ul li a");
let container = document.querySelector(".containerr");

let path = "https://cyndicai.github.io/hot-topics/content/home.html";

function handleClick(ev){
    ev.preventDefault();
    let url = ev.target.href;
    handleAjax(url);
    console.log(url);
}

function handleAjax(urlValue){
    fetch(urlValue)
        .then(function(rsp){
            return rsp.text();
        })
        .then(function(data){
            container.innerHTML = data;
        })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);

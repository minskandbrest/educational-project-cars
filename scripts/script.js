document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i<buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
 if (document.getElementById("name").value === "") {
     alert("Заполните поле Имя!");
 } else if (document.getElementById("phone").value === "") {
     alert("Заполните поле Телефон!");
 } else if (document.getElementById("car").value === "") {
     alert("Заполните поле Автомобиль!");
 } else {
     alert("Спасибо за хаявку мы свяжемся с вами в ближайшее время");
 }
}
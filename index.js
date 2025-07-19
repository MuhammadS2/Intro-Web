//let test_str = "  Hello World  ";
//
//
//console.log(test_str.length); // Длина строки
//
//console.log(test_str.charAt(4)); // По индексу
//
//console.log(test_str.slice(6, 11)); // Отрезок
//
//
//
//console.log(test_str.slice(6));
//
//console.log(test_str.toUpperCase());
//console.log(test_str.toLowerCase());
//
//console.log(test_str.trim());
//
//let tst = "Javascript"; // est
//
//let tst2 = tst.slice(1, 3);
//let tst3 = tst.charAt(8);
//
//console.log(tst2);
//console.log(tst3);
//
//console.log(tst2 + tst3)
//
//
//let userinfo;
//let userinfo2;
//
//userinfo = window.prompt("Введите свое имя");
//userinfo2 = window.prompt("Введите свое имя");
//
//console.log(`${userinfo} ${userinfo2}`);

//function math1(a, b) {
//    return a + b
//}
//
//console.log(math1(5, 10))
//console.log(math1(5, 20))
//console.log(math1(5, 45))
//
//function getSlice(str_ob, n, m) {
//    return str_ob.slice(n, m);
//}
//
//let result = getSlice("Javascript", 4, 10);
//console.log(result);
//
//result = getSlice("School", 3, 5);
//console.log(result);
//
//"Pycharm" -> char
//"Education" -> cat
//"Computer" -> put
//"Vscode" -> cod


//function str_to_int(a_str, b_str) {
//    let result = parseInt(a_str) + parseInt(b_str);
//    console.log(result);
//}
//
//let a = "50";
//let b = "5";
//
//str_to_int(a, b)
//str_to_int("5", "90")
//str_to_int("5", "67")
//str_to_int("5", "45")
//str_to_int("34", "90")
//
//let a = prompt("Возраст: ");
//
//if (a >= 65) {
//    console.log("Пенсия");
//} else if (a >= 25) {
//    console.log("Работа");
//} else if (a >= 18) {
//    console.log("Университет");
//} else if (a >= 7) {
//    console.log("Школа");
//} else {
//    console.log("ДетСад");
//}
//

//
//
//let info;
//let info2;
//
//
//
//
//
//let x5 = prompt("Введите число");
//let img = document.querySelector(".myimg");
//
//if (x5 < 10) {
//    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0fXaIs3b506Fci9sYncwilTBgnlI_Pxzog&s");
//} else if (x5 < 20) {
//    console.log("<20");
//} else if (x5 < 30) {
//    console.log("<30");
//} else if (x5 < 40) {
//    console.log("<40");
//} else {
//    console.log("Большое число");
//}


//
//
//document.querySelector("a").setAttribute("href", "https://www.youtube.com/");
//
//
//let my_img = document.querySelector("img");
//
//my_img.removeAttribute("alt");
//
//
//
//my_hh = document.querySelector(".hh");
//
//my_hh.style.backgroundColor = "red";
//
//
//let myh = document.createElement("h1");
//
//myh.textContent = "PyCharm";
//
//document.querySelector("div").appendChild(myh);


//document.getElementById("mybtn").addEventListener("click", function() {
//  alert("Кнопка нажата!");
//});

document.getElementById("mybtn").addEventListener("click", function() {
//    alert("You have pressed the button");
    document.querySelector(".hhh").textContent = "Вы поменяли контент!";
});

document.getElementById("mybtnback").addEventListener("click", function() {
//    alert("You have pressed the button");
    document.querySelector(".hhh").textContent = "Times IT School";
});




//let name = "Bahtiyor";
//let age = 45;
//let hobby = "Football";

//console.log(`Ism: ${name}; \nYosh: ${age}; \nHobbi: ${hobby}`)


//let name = prompt("Ismni yozing: ");
//let age = prompt("Yosh: ");
//let hobby = prompt("Hobbi: ");
//
//console.log(`Ism: ${name}; \nYosh: ${age}; \nHobbi: ${hobby}`)
//
//window.alert("All informations are accepted!")


//document.getElementById("mytext").textContent = "JavaScript orqali";



//let content = document.getElementById("mytext").textContent;
//
//console.log(content)
//
//let content1 = document.getElementById("mytext2").textContent;
//let content2 = document.getElementById("mytext3").textContent;
//let content3 = document.getElementById("mytext4").textContent;
//let content4 = document.getElementById("mytext5").textContent;
//
//console.log(content1)
//console.log(content2)
//console.log(content3)
//console.log(content4)



let content = document.querySelector("#mytext2").textContent;
console.log(content);


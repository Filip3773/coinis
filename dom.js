// console.log(document);
// console.log(document.title);
// console.dir(document);

document.title = "Novi title";

// console.log(document.body);

let list = document.getElementById("items");
// console.log(list);

// list.innerHTML = "<p>Ovo je test.</p>"

let items = document.querySelectorAll("#items li");
// console.log(items);

for (let item of items) {
    item.setAttribute("style", "background-color: blue");
    item.style.color = "white";
}

items[0].setAttribute("id", "first-item");

document.getElementById("first-item").innerText = "Item 1 New";

// console.log(document.querySelector("#header-title").innerText);
// console.log(document.querySelector("#header-title").textContent);
// console.log(document.querySelector("#header-title").innerHTML);

let darkButtons = document.getElementsByClassName("btn-dark");
// console.log(darkButtons);

// console.log(darkButtons[0].value);
darkButtons[0].setAttribute("disabled", true)

let form = document.getElementsByTagName("form")[0];
// console.log(form.firstElementChild);
// console.log(form.lastChild);

let inputs = form.querySelectorAll("input");
// console.log(inputs);

// console.log(form.children);
// console.log(form.childNodes);



let header = document.getElementById("header-title");
header.innerText = "Novi naslov"
console.log(form.previousElementSibling)

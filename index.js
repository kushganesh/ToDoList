
let input = document.querySelector("input");
let list = document.querySelector(".list-add");


function add() {
    if (input.value === "") {
        alert("Pls inter input");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        localSte()
    }
    input.value = "";

}
document.querySelector("button").addEventListener("click", add);
document.querySelector("input").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        console.log("play")
        add();

    }
})

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        localSte();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        localSte();
    }
})

function localSte() {
    localStorage.setItem("data", list.innerHTML);
}
function setBrower() {
    list.innerHTML = localStorage.getItem("data");
}
setBrower();
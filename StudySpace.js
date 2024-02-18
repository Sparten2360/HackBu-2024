
function buttonClicked() {
    var button = document.getElementById("imageButton");
    var button2 = document.getElementById("imageButton2");
    if (button.classList.contains("highlighted")) {
        button.classList.remove("highlighted");
        button2.classList.add("highlighted");
    } else {
        button.classList.add("highlighted");
        button2.classList.remove("highlighted");
    }
    console.log("Button clickd!");
}
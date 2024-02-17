console.log('hello world');
function buttonClicked() {
    var x = document.createElement("BUTTON");
    // making a image into a button using java script
    let count = 0;
    var t = document.createTextNode(count += 1);
    x.appendChild(t);
    document.body.appendChild(x);
}
// ---------------Without addEventListener we can write like that-----------

// document.getElementById('img1').onmouseover = abc;
// function abc() {
//     document.getElementById('img1').style.filter = 'grayscale(0%)';
// }
// document.getElementById('img1').onmouseout = xyz;
// function xyz() {
//     document.getElementById('img1').style.filter = 'grayscale(100%)';
// }




// -------------With addEventListener---------

document.getElementById('img1').addEventListener("mouseover",function abc() {
    this.style.filter = 'grayscale(0%)';
});
document.getElementById('img1').addEventListener("mouseout",function xyz() {
    this.style.filter = 'grayscale(100%)';
});

document.getElementById('img2').addEventListener("mouseover",function abc() {
    this.style.filter = 'grayscale(0%)';
});
document.getElementById('img2').addEventListener("mouseout",function xyz() {
    this.style.filter = 'grayscale(100%)';
});
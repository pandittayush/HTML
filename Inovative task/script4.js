

document.getElementById("leftEar").addEventListener("mouseover",changeColor)
function changeColor() {
    document.getElementById("rightEar").style.backgroundColor = "black";
}
document.getElementById("leftEar").addEventListener("mouseout",changeColor6)
function changeColor6() {
    document.getElementById("rightEar").style.backgroundColor = "white";
}
document.getElementById('rightEar').onmouseover = changeColor1;
function changeColor1() {
    document.getElementById('leftEar').style.backgroundColor = "black";
}
document.getElementById('rightEar').onmouseout = changeColor3;
function changeColor3() {
    document.getElementById('leftEar').style.backgroundColor = "white";
}
document.getElementById('nose').onmouseover = changeColor2;
function changeColor2() {
    document.getElementById('face').style.backgroundColor = "#E8BEAC";
}
document.getElementById('nose').onmouseout = changeColor4;
function changeColor4() {
    document.getElementById('face').style.backgroundColor = "white";
}
// var b = document.getElementById("leftEar").addEventListener("click",colorChanges)
// function colorChanges(){
//     document.getElementById("rightEar").style.backgroundcolor = "black";
// }
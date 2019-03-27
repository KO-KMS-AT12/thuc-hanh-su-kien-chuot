var id_ball = document.getElementById("id_ball");

function click() {
    id_ball.style.position = 'relative';
    id_ball.style.left = '0px';
}
window.onload = click();

function moveRight() {
    id_ball.style.left = parseInt(id_ball.style.left) + 10 + 'px';
}


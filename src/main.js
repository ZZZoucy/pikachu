const box = document.querySelector(".box");
const skin = document.querySelector(".skin");
const cover = document.querySelector(".cover");

box.onclick = () => {
    cover.style.display = "none";
    skin.style.display = "block";
};

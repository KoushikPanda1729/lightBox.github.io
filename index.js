const imgBox = document.querySelectorAll(".img-box img");
const lightBox = document.querySelector(".lightBox")
const lightBoxImg = document.querySelector(".lightBox img");
const overlay = document.querySelector(".overlay");
const lightBoxSpan = document.querySelector(".lightBox span");
console.log(lightBoxSpan);

imgBox.forEach(img => {
    img.addEventListener("click", (event) => {
        lightBoxImg.src = `${event.target.src}`;
        lightBox.style.transform = "scale(1)";
        overlay.style.display = "block";
    })
})

lightBoxSpan.addEventListener("click", () => {
    lightBox.style.transform = "scale(0)";
    overlay.style.display = "none";
})

overlay.addEventListener("click",()=>{
    lightBox.style.transform = "scale(0)";
    overlay.style.display = "none";
})
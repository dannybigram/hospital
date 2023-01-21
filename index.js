var menuBtn = document.querySelector(".faa");
var closeBtn = document.querySelector(".baa");
menuBtn.addEventListener("click", function(){
    document.querySelector(".navigation nav").style.height = "43vh";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    document.querySelector(".write-up").style.display = "none";
})
closeBtn.addEventListener("click", function(){
    document.querySelector(".navigation nav").style.height = "0";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    document.querySelector(".write-up").style.display = "block";
})
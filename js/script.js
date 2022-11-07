const open = document.querySelector('.menu');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navigation-bar');

open.addEventListener("click", function(){
    navigation.classList.remove("hide");
});

close.addEventListener("click", function(){
    navigation.classList.add("hide");
});

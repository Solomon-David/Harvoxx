window.onload=function(){

    const menu=document.querySelector(".menu");
    const menuitems=document.querySelectorAll(".menu-items");
    const hamburger=document.querySelector(".hamburger");
    const menuicon=document.querySelector(".menu-icon");
    const closeicon=document.querySelector(".close-icon");

    function toggleMenu(){
        if(menu.classList.contains("menu")){
            menu.classList.remove("menu");
            closeicon.style.display="none";
            menuicon.style.display="block";
        }
        else{
            menu.classList.add("menu");
            closeicon.style.display="block";
            menuicon.style.display="none";
        }
        console.log("Clicked")
    }

    hamburger.addEventListener("click",toggleMenu);

    menuitems.forEach(
        function(menuitem){
            menuitem.addEventListener("click", toggleMenu);
        }
    )

}
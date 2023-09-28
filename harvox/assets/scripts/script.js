window.onload=function(){
    var nav=document.querySelector("#nav");
    var menu=document.querySelector("#menu");
    var close=document.querySelector("#close");
    var navbtn=document.querySelector("#nav-btn");
    var vis=false
    
    function toggleMenu(){
        
        if(vis){
            close.style.display="none"
            nav.style.display="none";
            menu.style.display="block";
            console.log(vis)
        }
        else{
            console.log(vis)
            nav.style.display="inline-flex";
            close.style.display="block";
            menu.style.display="none";
        }
        vis=!vis

    }

    navbtn.addEventListener("click",toggleMenu);


}
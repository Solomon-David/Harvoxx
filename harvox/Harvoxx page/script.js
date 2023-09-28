window.onload=function(){
    var nav=document.querySelector("#nav-bar ul");
    var menu=document.querySelector("#menu");
    var close=document.querySelector("#close");
    var navbtn=document.querySelector("#nav-btn");
    var vis=true
    
    function toggleMenu(){
        
        if(vis){
            
            close.style.display="block";
          
            nav.style.display="grid";
            setTimeout(() => {
                 nav.classList.add("open")
            nav.classList.remove("close")
            }, 10);
            menu.style.display="none";
            console.log(vis)
            console.log(nav.classList.value)
        }
        else{
           
            
             nav.classList.remove("open")
            nav.classList.add("close")
            menu.style.display="block";
            setTimeout(() => {
                nav.style.display="none"
            }, 1010);
            close.style.display="none"
            console.log(vis)
             console.log(nav.classList.value)
        }
        vis=!vis

    }

    navbtn.addEventListener("click",toggleMenu);


}
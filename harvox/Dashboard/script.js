//js file
// import * as items from "./orders"
window.onload=function(){

//importing elements
    //for menu
    const menu=document.querySelector(".menu");
    const close=document.querySelector(".top>span");
    const aside=document.querySelector("aside");
    
    //for light/dark mode
    const switcher = document.querySelector(".switch");
    const light = document.querySelectorAll(".switch span")[0];
    const dark = document.querySelectorAll(".switch span")[1];

    // for orders
    const orders = document.querySelector(".orders .round_container");

    //functionality for menu
    
    menu.addEventListener("click", toggleMenu);
    
    close.addEventListener("click", toggleMenu);
    
    function toggleMenu(){
        aside.classList.toggle("visible");
    }

    //functionality for light/dark mode
    switcher.addEventListener("click", toggleTheme);

    function toggleTheme(){
        light.classList.toggle("active");
        dark.classList.toggle("active");
        
        
        document.body.setAttribute("data-theme", (document.body.getAttribute("data-theme")=="light")? "dark" : "light");
    }

    // functionality for adding orders
    function addOrder(order){
        // creating order
        let order_div=document.createElement("div");
        order_div.classList.add("order");
        
        //creating p's
        let pname = document.createElement("p")
        let pcode = document.createElement("p")
        let ppay = document.createElement("p")
        let pstat = document.createElement("p")
        let details = document.createElement("p")
        
        pname.appendChild(document.createTextNode(order.productName));
        pcode.appendChild(document.createTextNode(order.productNumber));
        ppay.appendChild(document.createTextNode(order.paymentStatus));
        pstat.appendChild(document.createTextNode(order.status));
        details.appendChild(document.createTextNode("Details"));

        // adding color and classes
        switch(pstat.innerText){
            case "Pending":
                pstat.style.color="gold"
                break;

            case "Declined":
                pstat.style.color="red"
                break;

            case "Active":
                pstat.style.color="blue"
                break;
        }

        details.style.color="blue";

        pname.classList.add("shows");
        details.classList.add("shows");

        //appending elements
        order_div.appendChild(pname);
        order_div.appendChild(pcode);
        order_div.appendChild(ppay);
        order_div.appendChild(pstat);
        order_div.appendChild(details);

        orders.appendChild(order_div);
    }

    Orders.forEach(order => addOrder(order))


    /*
    create an element that matches div.order
    create 4 p nodes
    give them the course name, course code, payment, and status as text nodes
    append them to div.order
    append div.order to div.orders.round_container


    */

    //end of window.onload
}


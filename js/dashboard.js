document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });



// Start Show and hide SubMenus

// JQuery for submenus
$(document).ready(function(){
    // Toogle submenus
    $('.nav_link').click(function(){
        $(this).next('.nav_list-submenu').slideToggle();
        $(this).find('.dropdownIco').toggleClass('rotateIcon');
    });
});






let icon=document.querySelector('.bx-chevron-right');

function rotateIcon(){
    if(icon){
        icon.style=`
            transform: rotate(90deg);
            transform-origin: 25% 50%;
            transition: transform .2s linear;
        `;
    }
}

function resetIcon(){
    
    if(!icon){
        icon.style=`
        transform: rotate(0deg);
        transform-origin: 25% 50%;
        transition: transform .2s linear;
    `;
    }
}

//function showUser(){

// if(document.getElementById("navUser").style.display=="flex"){
//     document.getElementById("navUser").style.display="none";

//     resetIcon();
    

//     }else{
//         document.getElementById("navUser").style.display="flex";
        
//         rotateIcon();
//     }


// }


// function showUser(element){

//     function example(element){
//         var name = $(element).attr('name');
//     }

//     if(document.querySelector(".nav_list-submenu").style.display=="flex"){
//         document.querySelector(".nav_list-submenu").style.display="none";


        

//         }else{
//             document.querySelector(".nav_list-submenu").style.display="flex";
            
        
//         }


// }








// function showUser(){

//     if(document.getElementById("navUser").style.display=="flex"){
//         document.getElementById("navUser").style.display="none";
  
//         document.querySelector('#iconUser').style=`
//             transform: rotate(0deg);
//             transform-origin: 25% 50%;
//             transition: transform .2s linear;
//             `;
//     }else{
//         document.getElementById("navUser").style.display="flex";

//         document.querySelector('#iconUser').style=`
//             transform: rotate(90deg);
//             transform-origin: 25% 50%;
//             transition: transform .2s linear;
//             `;
//     }
// }

// function showSettings(){

//     if(document.getElementById("navSettings").style.display=="flex"){
//         document.getElementById("navSettings").style.display="none";

//         let icon=document.querySelector('#iconSettings').style=`
//         transform: rotate(0deg);
//         transform-origin: 25% 50%;
//         transition: transform .2s linear;
        
//         `;

//     }else{
//         document.getElementById("navSettings").style.display="flex";
//         let icon=document.querySelector('#iconSettings').style=`
//             transform: rotate(90deg);
//             transform-origin: 25% 50%;
//             transition: transform .2s linear;
//             `;
//     }
// }

// function showStats(){

//     if(document.getElementById("navStats").style.display=="flex"){
//         document.getElementById("navStats").style.display="none";

//         document.querySelector('#iconStats').style=`
//             transform: rotate(00deg);
//             transform-origin: 25% 50%;
//             transition: transform .2s linear;
//             `;
        
//     }else{
//         document.getElementById("navStats").style.display="flex";
    
//         document.querySelector('#iconStats').style=`
//             transform: rotate(90deg);
//             transform-origin: 25% 50%;
//             transition: transform .2s linear;
            
//             `;
//     }
// }
// End Show and hide SubMenus


// Start of Theme Switch
let lightTheme = localStorage.getItem("lightTheme");
const prekidac = document.getElementById("switcher");

    const lightModeOn = () => {
        // 1. Add class to body
        document.body.classList.add('lightTheme');

        // 2. Local storage 
        localStorage.setItem('lightTheme', 'enabled');
    }

    const lightModeOff = () => {
        // 1. Remove class to body
        document.body.classList.remove('lightTheme');

        // 2. Local storage 
        localStorage.setItem('lightTheme', null);
    }

    if(lightTheme === "enabled"){
        lightModeOn();
    }

    prekidac.addEventListener("click", () => {
        
        lightTheme = localStorage.getItem("lightTheme");

        if(lightTheme !== 'enabled') {
            lightModeOn();
        }
        else{
            lightModeOff();
        }
    });
// End of Theme Switch

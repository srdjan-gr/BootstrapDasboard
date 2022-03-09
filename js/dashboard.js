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
function showUser(){

    if(document.getElementById("navUser").style.display=="flex"){
        document.getElementById("navUser").style.display="none";
    }else{
        document.getElementById("navUser").style.display="flex";
    }

    document.getElementById("nav_link-user").addEventListener('click', showUser());

}

function showSettings(){

    if(document.getElementById("navSettings").style.display=="flex"){
        document.getElementById("navSettings").style.display="none";
    }else{
        document.getElementById("navSettings").style.display="flex";
    }

    document.getElementById("nav_link-settings").addEventListener('click', showSettings());

}

function showStats(){

    if(document.getElementById("navStats").style.display=="flex"){
        document.getElementById("navStats").style.display="none";
    }else{
        document.getElementById("navStats").style.display="flex";
    }

    document.getElementById("nav_link-stats").addEventListener('click', showStats());

}
// End Show and hide SubMenus
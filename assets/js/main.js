const back_to_top_btn = document.getElementById('back_to_top_btn');



back_to_top_btn.addEventListener('click' , (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

















const hamburger_icon = document.querySelector('.hamburger--collapse');
const mobile_open_menu = document.querySelector('.mobile-open-menu');
const Mobile_Nav_Con = document.querySelector('.Mobile-Nav-Con');




hamburger_icon.addEventListener('click' , (e) => {
    hamburger_icon.classList.toggle('is-active')
    mobile_open_menu.classList.toggle('active')
    Mobile_Nav_Con.classList.toggle('active')
    
})

const dark_mode = document.querySelector('#dark_mode');
const dark_mode_icon_Dekstop = document.querySelector('.dark-mode-icon-Dekstop');
const dark_mode_icon_Mobile = document.querySelector('.dark-mode-icon-Mobile');
const Page = document.querySelector('#Page');
const Body = document.querySelector('#Body');
const _top_ = document.querySelector('.top');
const main_contents_top = document.querySelector('.main-contents-top');
const fisrt_content = document.querySelector('.fisrt-content');
const second_content = document.querySelector('.second-content');
const threeth_content = document.querySelector('.threeth-content');
const fourth_content = document.querySelector('.fourth-content');
const footer = document.querySelector('.footer');
const left_page = document.querySelector('.left-page');
const moblie_nav = document.querySelector('.moblie_nav');
let cost = 0 ;

function darkMode(){

    if(cost==0){
        dark_mode_icon_Dekstop.innerHTML = "<i class='fas fa-sun'></i>";
        dark_mode_icon_Mobile.innerHTML = "<i class='fas fa-sun'></i>";
        cost=1;
        localStorage.setItem('DarkModeDekstop' , "on");
    }
    else{
        dark_mode_icon_Dekstop.innerHTML = "<i class='fas fa-moon'></i>";
        dark_mode_icon_Mobile.innerHTML = "<i class='fas fa-moon'></i>";
        cost =0;
        localStorage.removeItem("DarkModeDekstop");
    }
    Page.classList.toggle('active');
    Body.classList.toggle('active');
    _top_.classList.toggle('active')
    main_contents_top.classList.toggle('active')
    fisrt_content.classList.toggle('active')
    second_content.classList.toggle('active')
    threeth_content.classList.toggle('active')
    fourth_content.classList.toggle('active')
    footer.classList.toggle('active')
    left_page.classList.toggle('active')
    moblie_nav.classList.toggle('active')
    mobile_open_menu.classList.toggle('active-dark-mode')
}

function darkModeMobile(){
    if(cost==0){
        dark_mode_icon_Mobile.innerHTML = "<i class='fas fa-sun'></i>";
        dark_mode_icon_Dekstop.innerHTML = "<i class='fas fa-sun'></i>";
        cost=1;
        localStorage.setItem('DarkModeMobile' , "on");
    }
    else{
        dark_mode_icon_Mobile.innerHTML = "<i class='fas fa-moon'></i>";
        dark_mode_icon_Dekstop.innerHTML = "<i class='fas fa-moon'></i>";
        cost =0;
        localStorage.removeItem("DarkModeMobile");
    }
    Page.classList.toggle('active');
    Body.classList.toggle('active');
    _top_.classList.toggle('active')
    main_contents_top.classList.toggle('active')
    fisrt_content.classList.toggle('active')
    second_content.classList.toggle('active')
    threeth_content.classList.toggle('active')
    fourth_content.classList.toggle('active')
    footer.classList.toggle('active')
    left_page.classList.toggle('active')
    moblie_nav.classList.toggle('active')
    mobile_open_menu.classList.toggle('active-dark-mode')
}

if(localStorage.getItem("DarkModeDekstop") == 'on'){
    cost=1;
    dark_mode_icon_Dekstop.innerHTML = "<i class='fas fa-sun'></i>";
    Page.classList.toggle('active');
    Body.classList.toggle('active');
    _top_.classList.toggle('active')
    main_contents_top.classList.toggle('active')
    fisrt_content.classList.toggle('active')
    second_content.classList.toggle('active')
    threeth_content.classList.toggle('active')
    fourth_content.classList.toggle('active')
    footer.classList.toggle('active')
    left_page.classList.toggle('active')
    moblie_nav.classList.toggle('active')
    mobile_open_menu.classList.toggle('active-dark-mode')
}
if(localStorage.getItem("DarkModeMobile") == 'on'){
    cost=1;
    dark_mode_icon_Mobile.innerHTML = "<i class='fas fa-sun'></i>"
    Page.classList.toggle('active');
    Body.classList.toggle('active');
    _top_.classList.toggle('active')
    main_contents_top.classList.toggle('active')
    fisrt_content.classList.toggle('active')
    second_content.classList.toggle('active')
    threeth_content.classList.toggle('active')
    fourth_content.classList.toggle('active')
    footer.classList.toggle('active')
    left_page.classList.toggle('active')
    moblie_nav.classList.toggle('active')
    mobile_open_menu.classList.toggle('active-dark-mode')
}






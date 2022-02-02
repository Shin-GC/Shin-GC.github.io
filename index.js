function darkMode() {
  // let dark = document.querySelector(".nav-item .material-icons").textContent;
  let dark = document.getElementsByClassName("material-icons")[0];
  let navItem = document.querySelectorAll(".nav-item a");
  let menuTitle = document.querySelectorAll(".menu-title");
  let subTitle = document.querySelectorAll(".menu-sub-title");
  let hobbyTitle = document.getElementsByClassName("hobby-title");
  let hobbyDesc = document.getElementsByClassName("hobby-desc");
  let talkTitle = document.getElementsByClassName("talk-title")[0];
  let talkDesc = document.getElementsByClassName("talk-desc")[0];
  let footerBg = document.getElementsByClassName("footer-bg")[0];
  let footerText = document.getElementsByClassName("footer-text")[0];
  let mouse = document.getElementsByClassName("mouse")[0];
  let mouseText = document.getElementsByClassName("mouse-text")[0];
  let arrow = document.getElementsByClassName("arrow")[0];
  
  
  if (dark.innerText === "brightness_5") {
    document.querySelector("body").style.backgroundColor = 'white';
    document.querySelector("#header").style.backgroundColor = "#eeeeee";
    dark.innerText = "brightness_3";
    mouse.style.color = "rgb(129 42 15)"
    mouseText.style.color = "rgb(129 42 15)"
    arrow.style.color = "rgb(129 42 15)"
    
    for (let i = 0; i <= navItem.length - 1; i++) {
      navItem[i].style.color = 'black';
    }
    document.querySelector(".brand-logo").style.color = 'black';
    document.querySelector(".home-content-hi").style.color = 'black';
    for (let i = 0; i <= menuTitle.length - 1; i++) {
      menuTitle[i].style.color = 'black';
    }
    document.querySelector(".home-content-desc").style.color = "rgb(129 42 15)";
    document.querySelector(".goal-content").style.color = "rgb(129 42 15)";
    for (let i = 0; i <= subTitle.length - 1; i++) {
      subTitle[i].style.color = "rgb(129 42 15)";
      subTitle[i].style.fontWeight = "bold";
    }
    
    for (let i = 0; i <= hobbyTitle.length - 1; i++) {
      hobbyTitle[i].style.color = "black";
      subTitle[i].style.fontWeight = "bold";
    }
    
    for (let i = 0; i <= hobbyDesc.length - 1; i++) {
      hobbyDesc[i].style.color = "rgb(129 42 15)";
    }
    
    document.querySelector(".goal-info-name").style.color = "rgb(129 42 15)";
    talkTitle.style.color = "black";
    talkDesc.style.color = "black";
    footerBg.style.backgroundColor = "#7D5B50"
    footerBg.style.backgroundColor = "RGB(238, 238, 238)"
    footerText.style.color = "black";
  } else if (dark.innerText === "brightness_3") {
    talkTitle.style.color = "white";
    talkDesc.style.color = "white";
    document.querySelector("body").style.backgroundColor = "var(--deep-brown)";
    document.querySelector("#header").style.backgroundColor = "var(--deep-brown)";
    dark.innerText = "brightness_5";
    footerBg.style.backgroundColor = "#7D5B50"
    footerText.style.color = "white";
    mouse.style.color = "var(--light-brown)"
    mouseText.style.color = "var(--light-brown)"
    arrow.style.color = "var(--light-brown)"
    
    
    for (let i = 0; i <= navItem.length - 1; i++) {
      navItem[i].style.color = 'white';
    }
    document.querySelector(".brand-logo").style.color = 'white';
    document.querySelector(".home-content-hi").style.color = 'white';
    for (let i = 0; i <= menuTitle.length - 1; i++) {
      menuTitle[i].style.color = 'white';
    }
    
    document.querySelector(".home-content-desc").style.color = "var(--light-brown)";
    document.querySelector(".goal-content").style.color = "var(--light-brown)";
    for (let i = 0; i <= subTitle.length - 1; i++) {
      subTitle[i].style.color = "var(--light-brown)";
      subTitle[i].style.fontWeight = "bold";
    }
    document.querySelector(".goal-info-name").style.color = "var(--light-brown)";
    
    for (let i = 0; i <= hobbyTitle.length - 1; i++) {
      hobbyTitle[i].style.color = "white";
      subTitle[i].style.fontWeight = "bold";
    }
    
    for (let i = 0; i <= hobbyDesc.length - 1; i++) {
      hobbyDesc[i].style.color = "var(--light-brown)";
    }
    
  }
}

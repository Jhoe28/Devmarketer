let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   for (tablink of tablinks) {
      tablink.classList.remove("active");
   }
   for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active");
   document.getElementById(tabname).classList.add("active-tab");
}

var typed = new Typed(".typing-1",{
   strings:["Web Developer", "Web Designer", "Graphic Designer","Digital Marketer", "Marketing Analyst", "Email Marketer"],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true
});
var typed = new Typed(".typing-2",{
   strings:["Web Developer", "Web Designer", "Graphic Designer"],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true
});
var typed = new Typed(".typing-3",{
   strings:["Digital Marketer", "Marketing Analyst", "Email Marketer"],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true
});
 const nav = document.querySelector(".nav"),
       navList = nav.querySelectorAll("li"),
       totalNavList = navList.length;
       allSection = document.querySelectorAll(".section"),
       totalSection = allSection.length;
       for (let i=0; i<totalNavList; i++) {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function () {
             for (let j=0; j<totalNavList; j++) {navList[j].querySelector("a").classList.remove("slide-in"); navList[j].querySelector("a").classList.remove("active");
             }
             
             this.classList.add("active");
             this.classList.add("slide-in");
             showSection(this);
             if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
             }
          })
       }
       function showSection(element) {
          for (let i=0; i<totalSection; i++) {
             allSection[i].classList.remove("slide-In");
          }
          const target =  element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("slide-In");
       }
      function updateNav(element) {
         for (i = 0; i < totalNavList; i++) {
          navList[i].querySelector("a").classList.remove("active");
          const target =  element.getAttribute("href").split("#")[1];
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
             navList[i].querySelector("a").classList.add("active");
          }
         }
      } document.querySelector(".hire-me").addEventListener("click", function (){
           const sectionIndex = this.getAttribute("data-section-index");
           console.log(sectionIndex);
           showSection(this);
           updateNav(this); 
       })
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",function () {
         asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn() {
         aside.classList.toggle("open");
         navTogglerBtn.classList.toggle("open");
         for (i=0; i<totalSection; i++) {
            allSection[i].classList.toggle("open");
         }
      }





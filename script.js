// NAV TOGGLE
menuToggle.onclick=()=>navMenu.classList.toggle("active");

// TYPING
const text="Empowering Your Financial Future.";
const typed=document.getElementById("typedText");
let i=0;

function type(){
if(i<text.length){
typed.innerHTML+=text[i];
i++;
setTimeout(type,70);
}else{
setTimeout(()=>{
typed.innerHTML="";
i=0;
type();
},2000);
}}
type();

// POPUP
openPopup.onclick=()=>authPopup.style.display="flex";
closePopup.onclick=()=>authPopup.style.display="none";

authForm.onsubmit=(e)=>{
e.preventDefault();
window.location="dashboard.html";
};

// TRANSLATE FIX
let lang="en";
translateBtn.onclick=()=>{
lang=lang==="en"?"sw":"en";
document.querySelectorAll("[data-en]").forEach(el=>{
el.innerText=el.dataset[lang];
});
};

// DARK MODE
const darkBtn=document.getElementById("darkModeBtn");

darkBtn.onclick=()=>{
document.body.classList.toggle("dark");
localStorage.setItem("theme",
document.body.classList.contains("dark")?"dark":"light");
};

// Load saved theme
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}
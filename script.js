const navBtn = document.querySelector('.navBtn');
const navList = document.querySelector('.nav-list');
const contactBtn = document.querySelector('.contact-btn')
const contact = document.querySelector('.contact')
// const body = document.querySelector("body")

navBtn.addEventListener("click", () =>{
    navList.classList.toggle("nav-toggle");
});
contactBtn.addEventListener('click', () => {
    console.log('click')
    contact.classList.toggle("contact-toggle")
})
// body.addEventListener("click", ()=>{
//     navList.classList.remove("nav-toggle")
//     contact.classList.remove("contact-toggle")
// })

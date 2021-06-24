// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

var modal = document.getElementById("myModal");
var closeModal = document.querySelector(".close");
// \/ All of your javascript should go here \/
closeModal.addEventListener("click",()=>{
    modal.style.display ="none"
})


const modalProm = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve()
      },5000)
})
modalProm.then(()=>{
    modal.style.display="block"
})

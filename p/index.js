/*-------------Menu drop down--------------------*/

const trigger = document.querySelector('.dropdown-trigger');
const menu = document.querySelector('.nav-links-container');

trigger.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.toggle('is-active');
});

document.addEventListener('click', function() {
  menu.classList.remove('is-active');
});

/*------------Contact form---------------------*/

const myForm = document.querySelector("#contact-form");

myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("Form data sent successfully!");
    document.querySelector("#mess").innerHTML="Your details has been submitted successfully!";
    setTimeout(()=>{
        document.querySelector("#mess").innerHTML=` `;
    },3000);
    
    myForm.reset();
});


/*--------------subscribe message----------------*/
   const subMessage = document.getElementById("sub-form");
  
   subMessage.addEventListener("submit",(event)=>{
    event.preventDefault();
    document.querySelector("#sub-mess").innerHTML="Your are subscribed successfully!";
    setTimeout(()=>{
        document.querySelector("#sub-mess").innerHTML=` `;
    },3000);
    
    subMessage.reset();
   });

/* ---------------testimonial cards----------------------- */

const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;
const displayTime = 5000; 
const me = document.querySelector(".testimonial-card");
function rotateTestimonials() {

  cards[currentIndex].classList.remove('is-active');

  currentIndex = (currentIndex + 1) % cards.length;

  cards[currentIndex].classList.add('is-active');
  
}

setInterval(rotateTestimonials, displayTime);




/*-----------testimonial side bars --------------*/


const nextBtn = document.querySelector("#f-btn");
const prevBtn = document.querySelector("#b-btn");


function updateSlider(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('is-active');
    } else {
      card.classList.remove('is-active');
    }
  });
}


nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  updateSlider(currentIndex);
});

// Previous Button Event
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1; 
  }
  updateSlider(currentIndex);
});



/*-------storing form data --------*/

const form = document.querySelector("#register-form");


form.addEventListener('submit',function(event){
  event.preventDefault();
  
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  userData.id = Date.now();

  const existingUser = localStorage.getItem('savedUser');

  let userArray = [];

  if(existingUser){
    userArray = JSON.parse(existingUser);
  }

  userArray.push(userData);
  
  localStorage.setItem('savedUser', JSON.stringify(userArray));
  console.log('Stored in localStorage!');


  form.reset();

});


const user_email = document.getElementById('email-id');

const password = document.getElementById('password');

const login = document.getElementById("login");

const userJson = JSON.parse(localStorage.getItem('savedUser'));

console.log(userJson);


console.log(userJson.email);
console.log(userJson.password);

login.addEventListener('submit',function(event){
  event.preventDefault();

  const emailId = user_email.value;

  const pass = password.value;

  const promise = new Promise((resolve,reject)=>{
    if((emailId === userJson.email) && (pass === userJson.password )){
      resolve('LOGIN SUCCESSFULL!!');
    }
    else{
      reject('INCORRECT CREDIENTIALS');
    }
  });

  promise.then((message)=>{
    document.getElementById('mes').innerHTML = message;
    setTimeout(()=>{
      document.getElementById('mes').innerHTML = '';
    },3000);
    
  }).catch((error)=>{
    document.getElementById('mes').innerHTML = error;
     setTimeout(()=>{
      document.getElementById('mes').innerHTML = '';
    },3000);
  }).finally(()=>{
    console.log('PROMISED FINISHED');
  });

  login.reset();

});

 


  

const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('jan 1, 2030 13:00:00').getTime();

//update every second
const interval = setInterval(() => {
   //get todays date and time (ms)
   const now = new Date().getTime();

   //distance from present date to launch date
   const distance = launchDate - now;

   //time calculation
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
   const mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
   const seconds = Math.floor(distance % (1000 * 60) / 1000);

   //display the result
   countdown.innerHTML = `
       <div>${days}<span>Days</span></div>
       <div>${hours}<span>Hours</span></div>
       <div>${mins}<span>Minutes</span></div>
       <div>${seconds}<span>Seconds</span></div>
   `;

   //If launc date passed
   if(distance < 0){
   	//stop countdown
   	clearInterval(interval);
   	countdown.style.color = 'white';
   	countdown.innerHTML = 'Launched'
   }


}, 1000);
function timer() {
   
   let seconds = $('#seconds');
   let minutes = $('#minutes');
   let hours = $('#hours');
   let isTicking = false;
   let timer;
   let startBtn = $('#start-timer');
   let stopBtn = $('#stop-timer');

   startBtn.on('click', step);
   stopBtn.on('click', stop);

   function step() {
      if(!isTicking) {
         timer = setInterval(secondsUpdate, 1000);
         isTicking = true;
      }
   }

   function stop() {
      clearInterval(timer);
      isTicking = false;
   }

   function secondsUpdate() {
      seconds.text(formatter(+seconds.text() + 1));
      if(+seconds.text() > 59) {
         seconds.text('00');
         minutes.text(formatter(+minutes.text() + 1));
      }
      if (+minutes.text() > 59) {
         minutes.text('00');
         hours.text(formatter(+hours.text() + 1));
      }
   }

   function formatter (time) {
      return ("0" + time).slice(-2);
   } 
}
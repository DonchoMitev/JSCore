function solve() {

   let btnCheckFirst = document.getElementsByName('user1Locked')[1];
   let btnCheckSecond = document.getElementsByName('user2Locked')[1];
   let btnCheckThird = document.getElementsByName('user3Locked')[1];

   let showHiddenElmntFirst = document.getElementById('user1HiddenFields');
   let showHiddenElmntSecond = document.getElementById('user2HiddenFields');
   let showHiddenElmntThird = document.getElementById('user3HiddenFields');

   let btnFirstUser = document.getElementsByTagName('button')[0];
   let btnSecondUser = document.getElementsByTagName('button')[1];
   let btnThirdUser = document.getElementsByTagName('button')[2];

   btnFirstUser.addEventListener('click', firstButtonClick);
   btnSecondUser.addEventListener('click', secondButtonClick);
   btnThirdUser.addEventListener('click', thirdButtonClick); 
 

   function firstButtonClick(ev) {
      let btn = ev.target;
      if (btnCheckFirst.checked) {

         if(btn.textContent == "Show more") {
            showHiddenElmntFirst.style.display = "block";
            btnFirstUser.textContent = "Hide it";
         }else {
            showHiddenElmntFirst.style.display = "none";
            btnFirstUser.textContent = "Show more";
         }
         
      }
   }

   function secondButtonClick(ev) {
      let btn = ev.target;
      if (btnCheckSecond.checked) {

         if(btn.textContent == "Show more") {
            showHiddenElmntSecond.style.display = "block";
            btnSecondUser.textContent = "Hide it";
         }else {
            showHiddenElmntSecond.style.display = "none";
            btnSecondUser.textContent = "Show more";
         }
         
      }
   }

   function thirdButtonClick(ev) {
      let btn = ev.target;
      if (btnCheckThird.checked) {

         if(btn.textContent == "Show more") {
            showHiddenElmntThird.style.display = "block";
            btnThirdUser.textContent = "Hide it";
         }else {
            showHiddenElmntThird.style.display = "none";
            btnThirdUser.textContent = "Show more";
         }
         
      }
   }
} 
function solve() {
   let buttons = document.getElementsByTagName('button');
   let output = document.querySelector('#output p');

   buttons[0].addEventListener('click', filter);
   buttons[1].addEventListener('click', sort);
   buttons[2].addEventListener('click', rotate);
   buttons[3].addEventListener('click', get);

   function filter() {
      let input = document.getElementById('input').value.split('');
      let select = document.getElementById('filterSecondaryCmd').value;
      console.log(select);
      switch (select) {
         case 'uppercase':
            input = input.filter(x => x == x.toUpperCase() && isNaN(x));
            break;
         case 'lowercase':
            input = input.filter(x => x == x.toLowerCase() && isNaN(x));
            break;
         case 'nums':
            input = input.filter(x => !isNaN(x));
            break;

      }
      let character = input[+document.getElementById('filterPosition').value - 1];
      output.textContent += character;
   }

   function sort() {
      let input = document.getElementById('input').value.split('').sort((a, b) => a.localeCompare(b));
      let select = document.getElementById('sortSecondaryCmd').value;
      if (select == 'Z') {
         input = input.reverse();
      }

      let character = input[+document.getElementById('sortPosition').value - 1];
      output.textContent += character;
   }

   function rotate() {
      let input = document.getElementById('input').value.split('');
      let rotate = +document.getElementById('rotatePosition').value;
      
      for (let i = 0; i < rotate; i++) {
         let firstElement = input[input.length - 1];
         for (let j = 0; j < input.length - 1; j++) {
            input[input.length - j - 1] = input[input.length - j - 2];
         }
         input[0] = firstElement;
         
      }
      let character = input[+document.getElementById('rotatePosition').value - 1];
      output.textContent += character;
   }

   function get() {
      let input = document.getElementById('input').value.split('');
      let character = input[+document.getElementById('getPosition').value - 1];
      output.textContent += character;
   }

}
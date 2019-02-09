function solve() {
  let furList = [];
  let defFactors = [];
  let totalPrice = 0;
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let furnutireList = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    for (const funriture of furnutireList) {
      let div = document.createElement('div');
      div.setAttribute('class', 'furniture');

      let name = document.createElement('p');
      name.innerHTML = `Name: ${funriture.name}`;

      let img = document.createElement('img');
      img.setAttribute('src', funriture.img);

      let price = document.createElement('p');
      price.innerHTML = `Price: ${funriture.price}`;

      let decFactor = document.createElement('p');
      decFactor.innerHTML = `Decoration factor: ${funriture.decFactor}`;

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      div.appendChild(name);
      div.appendChild(img);
      div.appendChild(price);
      div.appendChild(decFactor);
      div.appendChild(checkbox);

      document.getElementById('furniture-list').appendChild(div);
    }
  })

  document.getElementsByTagName('button')[1].addEventListener('click', () => {
      let array = Array.from(document.getElementById('furniture-list').children);

      for (const fur of array) {
        let checkbox = fur.getElementsByTagName('input')[0].checked;

        if(checkbox) {
          let name = fur.getElementsByTagName('p')[0].innerHTML.split(' ')[1];
          furList.push(name);
          let price = +fur.getElementsByTagName('p')[1].innerHTML.split(' ')[1];
          totalPrice += price;
          let deFac = +fur.getElementsByTagName('p')[2].innerHTML.split(': ')[1];
          defFactors.push(deFac);

        }
      }
      let textarea = document.getElementsByTagName('textarea')[1];
      textarea.value += `Bought furniture: ${furList.join(', ')}\n`;
      textarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
      console.log(defFactors);
      textarea.value += `Average decoration factor: ${defFactors.reduce((a,b) => a + b) / defFactors.length}` 
      console.log(defFactors.reduce((a,b) => a + b) / defFactors.length);
  })

}
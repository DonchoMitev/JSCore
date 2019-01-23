function solve(){
  let inputTextElement = document.getElementById('input');
  let inputTextElementValue = inputTextElement.textContent;
  let sentences = inputTextElementValue.split(".").filter(x => x.length > 0);

  console.log(sentences);
  let paragraphs;
  if (sentences.length > 0) {
    if (sentences.length < 3) {
      paragraphs = 1;
    }else {
      paragraphs = +(sentences.length/3)
    }
  }
  
}
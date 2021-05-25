
let counter = 0;
setInterval(() => {
let numb = document.querySelector('.number');
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
  numb.textContent = counter + "%";
  }
}, 80);
const btn = document.querySelector('#btn');
 
btn.addEventListener('click', () => {
  const inputOne = document.querySelector('.one').value;
  const inputTwo = document.querySelector('.two').value;
  if(inputOne  >=100 && inputOne <= 300 && inputTwo >= 100 && inputTwo <= 300){
  fetch(`https://dummyimage.com/${inputOne} x ${inputTwo}`)
    .then((response) => {
    console.log(response.url)
    document.querySelector('.result').innerHTML = `<img src="${response.url}"/>`
    })
  }
  else{
    console.log('error');
  }
});
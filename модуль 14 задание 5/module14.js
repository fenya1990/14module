const btn = document.querySelector('#btn');
 
btn.addEventListener('click', () => {
  const inputOne = document.querySelector('.one').value;
  const inputTwo = document.querySelector('.two').value;
  
  if (inputOne < 1 || inputOne > 10 || isNaN(inputOne)) {
        console.log('Номер страницы вне диапазона от 1 до 10');
        return;
      }

      if (inputTwo < 1 || inputTwo > 10 || isNaN(inputTwo)) {
        console.log('Лимит вне диапазона от 1 до 10');
        return;
      }

    if (inputOne < 1 || inputOne > 10 || isNaN(inputOne) && inputTwo < 1 || inputTwo > 10 || isNaN(inputTwo)) {
       console.log('Номер страницы и лимит вне диапазона от 1 до 10');
        return;
      } 
 const url = `https://jsonplaceholder.typicode.com/photos?_page=${inputOne}&_limit=${inputTwo}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const result = document.querySelector('.result');
          result.innerHTML = JSON.stringify(data, null, 2);
        console.log(result);
      //return result;
         renderImages(data);
        })
        .catch((error) => {
          console.log('Произошла ошибка при запросе данных');
        });
 function renderImages(imagesData) {
          const imagesContainer = document.getElementById('imagesContainer'); 
          imagesContainer.innerHTML = ''; 
          imagesData.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url; 
            imagesContainer.appendChild(imgElement);    
          });

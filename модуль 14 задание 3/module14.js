function task3() {
    const value = document.querySelector('input').value;
    if(value > 0 && value <= 10){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${value}`);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Результат: ', JSON.parse(xhr.response));
            const responseData = JSON.parse(xhr.response);
            renderImages(responseData);
        } else {
          console.log('Произошла ошибка: ', xhr.status);
        }
      };
      xhr.send();
    } else {
      console.log("Нельзя больше 10")
    }
  }
  function renderImages(imagesData) {
    const imagesContainer = document.getElementById('imagesContainer'); 
    imagesContainer.innerHTML = ''; 
    imagesData.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.url; 
      imagesContainer.appendChild(imgElement);
    });
  }  
  const btn = document.querySelector('#btn');
  btn.addEventListener("click", task3);

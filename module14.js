//задание 1
const parser = new DOMParser();
//console.log('parser', parser);
const xmlString =`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log('xmlString', xmlString);
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelector("name");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");
//console.log('name', name);
//console.log('age', age);
//console.log('prof', prof);
const result = {
 name: 'Ivan Ivanov',
  age:'35',
  prof: 'teacher',
};
const result2 = {
  name:'Петр Петров',
  age:'58',
  prof:'driver'
};
console.log('result', result);
console.log('result2', result2);

//задание2
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
const  list= data.list;
const result = {
  name: 'Petr',
  age: '20',
  prof: 'mechanic'
};
const result2 = {
  name: 'Vova',
  age: '60',
  prof: 'pilot'
};
console.log(result)
console.log(result2)

//задание 3
//html
<input>введите число</input>
<button id="btn">ок</button>

//script
function task3() {
    const value = document.querySelector('input').value;
    if(value > 0 && value <= 10){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?_limit=10');
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Результат: ', JSON.parse(xhr.response));
        } else {
          console.log('Произошла ошибка: ', xhr.status);
        }
      };
      xhr.send();
    } else {
      console.log("Нельзя больше 10")
    }
  }
  
  const btn = document.querySelector('#btn');
  btn.addEventListener("click", task3);


//задание 4
//HTML
<input class="one">введите число</input>
<input class="two">введите число</input>
<button id="btn">submit</button>
<div class="result"></div>

//script
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

//задание 5
//html
<input class="one">номер страницы</input>
<input class="two">лимит</input>
<button id="btn">запрос</button>
<div class="result"></div>
//script
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
        })
        .catch((error) => {
          console.log('Произошла ошибка при запросе данных');
        });
    });
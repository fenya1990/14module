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


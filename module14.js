//задание 1
const parser = new DOMParser();

const xmlString = `
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

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNodes = xmlDOM.querySelectorAll("student");

const result = [];

for (let i = 0; i < studentNodes.length; i++) {
  const nameNode = studentNodes[i].querySelector("name");
  const firstName = nameNode.querySelector("first").textContent;
  const secondName = nameNode.querySelector("second").textContent;
  const ageNode = studentNodes[i].querySelector("age");
  const profNode = studentNodes[i].querySelector("prof");

  result.push({
    name: `${firstName} ${secondName}`,
    age: ageNode.textContent,
    prof: profNode.textContent,
  });
}

console.log(result);

//задание2
const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": 20,
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": 60,
    "prof": "pilot"
   }
  ]
 }`;
 
 const data = JSON.parse(jsonString);
 const list = data.list;
 const result = list[0];
 const result2 = list[1];
 
 console.log(result);
 console.log(result2);

//const freelancers = [
   // { name: "Cindy", price: 25, occupation: "gardener" },
    //{ name: "Sue", price: 51, occupation: "programmer" },
    //{ name: "Max", price: 43, occupation: "teacher" },
    //{ name: "Ann", price: 81, occupation: "teacher" },

//  ];

//const names = ["Cindy", "Sue", "Max", "Ann"];
//const price = [25, 51, 43, 81];
//const occupation = ["gardner", "programmer", "teacher", "teacher"];
//for (var key in freelancers){
//console.table(names, price, occupation);
//setInterval(console.table, 1000);
//}
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let freelancers = [
    {name:'Cindy' , price: 25 , occupation:'gardener'},
    {name:'Sue' , price: 51 , occupation:'programmer'},
    {name:'Max' , price: 43 , occupation:'teacher'},
    {name:'Ann' , price: 81 , occupation:'teacher'},
]
let headers = ['name', 'price', 'occupation'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headertext => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headertext);
        header.appendchild(textNode);
        headerRow.appendChild(header);
        });
        table.appendChild(headerRow);
        myTable.appendChild(table);

})

'use strict';

const totOfTot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const timeArr = ["Location", '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', "Total"];

const division = document.getElementById('cookieStand');
const articleEl = document.createElement('article');
division.appendChild(articleEl);

const tableEl = document.createElement("table");
articleEl.appendChild(tableEl);

const headerRowEl = document.createElement("tr")
tableEl.appendChild(headerRowEl);

for (let i = 0; i < timeArr.length; i++) {
    let th2El = document.createElement('th');
    headerRowEl.appendChild(th2El);
    th2El.textContent = timeArr[i];
}

function getRandomNo(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);

}

function Store(name, min, max, avgCookie, cookiePurArray, total) {
    this.name = name
    this.min = min
    this.max = max
    this.avgCookie = avgCookie
    this.cookiePurArray = cookiePurArray;
    this.total = total;


};

Store.prototype.getCookiePerCust = function (min, max) {
    for (let i = 0; i < (timeArr.length - 1); i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.total += this.cookiePurArray[i];
        this.cookiePurArray[14] = this.total;

    }

};

Store.prototype.render = function () {

    this.getCookiePerCust();

    const dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);

    const td1El = document.createElement("td");
    dataRowEl.appendChild(td1El);
    td1El.textContent = this.name;

    for (let i = 0; i < this.cookiePurArray.length; i++) {
        let td2El = document.createElement('td');
        dataRowEl.appendChild(td2El);
        td2El.textContent = this.cookiePurArray[i];
        totOfTot[i] += this.cookiePurArray[i];

    }


};

const Seattle = new Store("Seattle", 23, 65, 6.3, [], 0);

const Tokyo = new Store("Tokio", 23, 65, 6.3, [], 0);

const Dubai = new Store("Dubai", 23, 65, 6.3, [], 0);

const Paris = new Store("Paris", 23, 65, 6.3, [], 0);

const Lima = new Store("Lima", 23, 65, 6.3, [], 0);

Seattle.render();

Tokyo.render();

Dubai.render();

Tokyo.render();

Paris.render();


const footerRowEl = document.createElement("tr");
tableEl.appendChild(footerRowEl);

const thFoot1 = document.createElement("th");
footerRowEl.appendChild(thFoot1);
thFoot1.textContent = "Hourly total";


for (let i = 0; i < totOfTot.length; i++) {
    const thFoot2 = document.createElement('th');
    footerRowEl.appendChild(thFoot2);
    thFoot2.textContent = totOfTot[i];
}









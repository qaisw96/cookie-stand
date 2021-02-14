'use strict';
/*
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const SeattleLocation = {
    name: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCokie: 6.3,
    arrCockiePur: [],
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    sum: 0,
    purchesPerHour: function (min, max) {
        for (let i = 0; i < 14; i++) {
            this.arrCockiePur[i] = Math.floor(getRandomNumber(this.minCust, this.maxCust) * this.avgCokie);
            this.sum += this.arrCockiePur[i];
            return console.log(this.arrCockiePur[i]);
        }
        this.arrCockiePur[14] = this.sum;
    },
    render: function () {
        const container = document.getElementById('cook');
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.timeArr.length; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = this.timeArr[i];
        }
    },
}

SeattleLocation.purchesPerHour();
SeattleLocation.render();
*/

function getRandomNo(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
const Seattle = {
    name: "Seattle",
    min: 23,
    max: 65,
    avgCookie: 6.3,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function (min, max) {
        for (let i = 0; i < (this.timeArr.length - 1); i++) {
            this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
            this.sum += this.cookiePurArray[i];
        }
        this.cookiePurArray[14] = this.sum;
    },
    render: function () {
        const division = document.getElementById('cookieStand');
        console.log(division);
        const articleEl = document.createElement('article');
        division.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.timeArr.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]} cookies`;
        }
    }
}
Seattle.getCookiePerCust();
Seattle.render();



const Tokyo = {
    name: "Tokyo",
    min: 3,
    max: 24,
    avgCookie: 1.2,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function (min, max) {
        for (let i = 0; i < (this.timeArr.length - 1); i++) {
            this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
            this.sum += this.cookiePurArray[i];
        }
        this.cookiePurArray[14] = this.sum;
    },
    render: function () {
        const division = document.getElementById('cookieStand');
        console.log(division);
        const articleEl = document.createElement('article');
        division.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.timeArr.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}cookies`;
        }
    }
}
Tokyo.getCookiePerCust();
Tokyo.render();



const dubai = {
    name: "Dubai",
    min: 11,
    max: 38,
    avgCookie: 3.7,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function (min, max) {
        for (let i = 0; i < (this.timeArr.length - 1); i++) {
            this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
            this.sum += this.cookiePurArray[i];
        }
        this.cookiePurArray[14] = this.sum;
    },
    render: function () {
        const division = document.getElementById('cookieStand');
        console.log(division);
        const articleEl = document.createElement('article');
        division.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.timeArr.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]} cookies`;
        }
    }
}
dubai.getCookiePerCust();
dubai.render();



const Paris = {
    name: "Paris",
    min: 11,
    max: 38,
    avgCookie: 3.7,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function (min, max) {
        for (let i = 0; i < (this.timeArr.length - 1); i++) {
            this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
            this.sum += this.cookiePurArray[i];
        }
        this.cookiePurArray[14] = this.sum;
    },
    render: function () {
        const division = document.getElementById('cookieStand');
        console.log(division);
        const articleEl = document.createElement('article');
        division.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.timeArr.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]} cookies`;
        }
    }
}
Paris.getCookiePerCust();
Paris.render();



const Lima = {
    name: "Lima",
    min: 11,
    max: 38,
    avgCookie: 3.7,
    cookiePurArray: [],
    sum: 0,
    timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    getCookiePerCust: function (min, max) {
        for (let i = 0; i < (this.timeArr.length - 1); i++) {
            this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
            this.sum += this.cookiePurArray[i];
        }
        this.cookiePurArray[14] = this.sum;
    },
    render: function () {
        const division = document.getElementById('cookieStand');
        console.log(division);
        const articleEl = document.createElement('article');
        division.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.timeArr.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]} cookies`;
        }
    }
}
Lima.getCookiePerCust();
Lima.render();

'use strict';
const division = document.getElementById('cookieStand');
const articleEl = document.createElement('article');
division.appendChild(articleEl);

const tableEl = document.createElement("table");
articleEl.appendChild(tableEl);


function getRandomNo(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);

}


function Store(name, min, max, avgCookie, total) {
    this.name = name
    this.min = min
    this.max = max
    this.avgCookie = avgCookie
    this.cookiePurArray = [];
    this.sum = 0;
    this.locationTotoal = 0;
    this.total = total;
    this.TotalAll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


};

Store.prototype.getCookiePerCust = function (min, max) {
    for (let i = 0; i < this.timeArr.length; i++) {
        this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
        this.sum += this.cookiePurArray[i];
        this.locationTotoal = this.sum;
        //this.total = + this.cookiePurArray[i];
        //this.TotalAll = this.total;



    }
};

Store.prototype.render = function () {


    const dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);

    const td1El = document.createElement("td");
    dataRowEl.appendChild(td1El);
    td1El.textContent = this.name;

    for (let i = 0; i < this.timeArr.length; i++) {
        let td2El = document.createElement('td');
        dataRowEl.appendChild(td2El);
        td2El.textContent = this.cookiePurArray[i];
    }

    const td1E3 = document.createElement("td");
    dataRowEl.appendChild(td1E3);
    td1E3.textContent = this.locationTotoal;

};

Store.prototype.tableHeader = function () {


    const headerRowEl = document.createElement("tr")
    tableEl.appendChild(headerRowEl);

    const th1El = document.createElement("th");
    headerRowEl.appendChild(th1El);
    th1El.textContent = "Location";
    for (let i = 0; i < this.timeArr.length; i++) {
        let th2El = document.createElement('th');
        headerRowEl.appendChild(th2El);
        th2El.textContent = this.timeArr[i];
        this.TotalAll[i] += this.cookiePurArray[i];
    }

    const th3El = document.createElement("th");
    headerRowEl.appendChild(th3El);
    th3El.textContent = "Location total";

}

Store.prototype.tableFooter = function () {
    const footerRowEl = document.createElement("tr");
    tableEl.appendChild(footerRowEl);

    const thFoot1 = document.createElement("th");
    footerRowEl.appendChild(thFoot1);
    thFoot1.textContent = "Hourly total";


    for (let i = 0; i < this.timeArr.length; i++) {
        const thFoot2 = document.createElement("th");
        footerRowEl.appendChild(thFoot2);
        thFoot2.textContent = this.TotalAll[i];

    }



    const thFoot3 = document.createElement("th");
    footerRowEl.appendChild(thFoot3);
    thFoot3.textContent = "Total";


}


//Store.prototype.finalTotal = function ()(






const Seattle = new Store(
    "Seattle",
    23,
    65,
    6.3
);

const Tokyo = new Store(
    "Tokio",
    23,
    65,
    6.3
);

const Dubai = new Store(
    "Dubai",
    23,
    65,
    6.3
);

const Paris = new Store(
    "Paris",
    23,
    65,
    6.3
);

const Lima = new Store(
    "Lima",
    23,
    65,
    6.3
);
Seattle.tableHeader()

Seattle.getCookiePerCust();
Seattle.render();

Tokyo.getCookiePerCust();
Tokyo.render();

Dubai.getCookiePerCust();
Dubai.render();

Tokyo.getCookiePerCust();
Tokyo.render();

Paris.getCookiePerCust();
Paris.render();

Seattle.tableFooter()


/*for (i = 0; i < 14; i++) {
    let totalEachOur =
}
*/
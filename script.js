function updatetime() {
    const now = new Date()
    document.querySelector('.date').textContent = now.toLocaleString();
}
setInterval(updatetime, 1000);

window.onload = function () {
    const text = document.querySelector('.text1');
    text.style.transform = 'translateX(0)';

    const btn = document.querySelector('.info');
    btn.style.transform = 'translateY(0)';

    const msg = document.querySelector('.txt');
    msg.style.transform = 'translateX(0)';
}
const nav = document.querySelector('.navigation');
const exit = document.querySelector('.exit-menu');
const menu = document.querySelector('.menu');
const exitMenu = document.querySelector(".exit");
function openmenu() {
    nav.classList.add("show");
    exit.classList.add("show");
    exitMenu.style.display = 'block';
    exitMenu.style.zIndex = '6'
    menu.style.display = 'none';
}
function exitmenu() {
    nav.classList.remove("show");
    exit.classList.remove("show");
    exitMenu.style.display = 'none';
    menu.style.display = 'block';
}

const prevMatches = document.querySelector(".past_matches_background");
const todayMatches = document.querySelector(".matches_background");

const chevronArrows = document.querySelectorAll(".fa-chevron-down");

function seeslip() {
    chevronArrows[0].classList.toggle('rotated');

    if (chevronArrows[0].classList.contains('rotated')) {
        prevMatches.style.display = "block";
        chevronArrows[0].style.rotate = '180deg';
    } else {
        chevronArrows[0].style.rotate = '0deg';
        prevMatches.style.display = 'none';
    }

}

function seeslip1() {
    chevronArrows[1].classList.toggle('rotated');

    if (chevronArrows[1].classList.contains('rotated')) {
        chevronArrows[1].style.rotate = '0deg';
        todayMatches.style.display = 'none';
    } else {
        chevronArrows[1].style.rotate = '180deg';
        todayMatches.style.display = 'block';
    }
}


const customer1Elem = document.querySelector(".customer_1");
const customer2Elem = document.querySelector(".customer_2");
const age = document.querySelector(".customer_3");

let customer1 = 0;
let target = 3000;

let customer2 = 0;
let target1 = 70;

function customerProgress() {
    if (customer1 < target) {
        customer1++;
        customer1Elem.textContent = customer1 + '+';
    }
    customer1Elem.style.fontWeight = '800';
}
setInterval(customerProgress, 30);


function customerProgress1() {
    if (customer2 < target1) {
        customer2++;
        customer2Elem.textContent = customer2 + '%';
    }
    customer2Elem.style.fontWeight = '800';
}
setInterval(customerProgress1, 200);



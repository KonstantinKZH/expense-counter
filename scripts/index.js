// Списки по категориям трат
// let expenses = [];
let expensesTransport = [];
let expensesCafesRestaurants = [];
let expensesPharmacy = [];
let expensesEntertainment = [];

const spendingMenuOption = document.getElementsByClassName('js-spending-menu-li');

const LIMIT = 10000;
const TOTAL = 0;

const inputNode = document.querySelector('.js-expenses-input');

const spendingMenuNode = document.querySelector('.js-spending-menu');
const historyNode = document.querySelector('.js-history');
const sumNode = document.querySelector('.js-sum');
const limitNode = document.querySelector('.js-limit__value');
const statusNode = document.querySelector('.js-status');
const changeLimitNode = document.querySelector('.js-limit__btn');
const popupNode = document.querySelector('.js-popup');
const popupInputNode = document.querySelector('.popup__content-input');
const minusAmountNode = document.querySelector('.js-minus-amount');
const measurementNode = document.querySelector('.js-unit-measurement');

const buttonNode = document.querySelector('.js-expenses-btn');
const resetBtnNode = document.querySelector('.js-reset-btn');
const popupBtnNode = document.querySelector('.popup__content-btn');
const popupCloseBtnNode = document.querySelector('.popup__close-btn');
const spendingMenuBtn = document.querySelector('.js-spending-menu__btn');

limitNode.innerText = `${LIMIT} руб.`;
sumNode.innerText = `${TOTAL} руб.`;
// console.log(measurementNode);

buttonNode.addEventListener('click', function(){
    if(inputNode.value === ''){
        return;
    };
    const expense = parseInt(inputNode.value);
    // Получаем название рубрики трат (НЕ УДАЛЯТЬ)
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains('active')){
            let nameExpenses = spendingMenuOption[i].textContent;
            // console.log(nameExpenses);
            recordingCostsArray(nameExpenses, expense);
        };
    };    
    // Делаем сброс строки ввода после каждого нажатия
    inputNode.value = '';     
});


// Функция возвращающая массивы (НЕ УДАЛЯТЬ)
function recordingCostsArray(nameExpenses, expense){
    switch(nameExpenses){
        case "Транспорт":
            expensesTransport.push(expense);
            // console.log(expensesTransport);
            outputListCosts(expensesTransport);
            calculatingAmountExpenses(expensesTransport);
            break;
        case "Кафе и рестораны":
            expensesCafesRestaurants.push(expense);
            // console.log(expensesCafesRestaurants);
            outputListCosts(expensesCafesRestaurants);
            calculatingAmountExpenses(expensesCafesRestaurants);
            break;
        case "Аптека":
            expensesPharmacy.push(expense);
            // console.log(expensesPharmacy);
            outputListCosts(expensesPharmacy);
            calculatingAmountExpenses(expensesPharmacy);
            break;
        case "Развлечения":
            expensesEntertainment.push(expense);
            // console.log(expensesEntertainment);
            outputListCosts(expensesEntertainment);
            calculatingAmountExpenses(expensesEntertainment);
            break;
    };
};

// Вывод списка затрат и получаем выбранный список


function outputListCosts(expenses){
    // Сохраняем трату в список
    let expensesListHTML = '';
    expenses.forEach(element=>{
        let elementHTML = `<li>${element} руб.</li>`;
        expensesListHTML +=elementHTML;
    });
    const html = `<ol>${expensesListHTML}</ol>`;
    historyNode.innerHTML = html;
};


function calculatingAmountExpenses(expenses){
    // Подсчёт суммы трат
    let sum = 0;
    expenses.forEach(element=>{
        sum += element;
    });
    sumNode.innerText = `${sum} руб.`;
    changingStatusColor(sum);
};


function changingStatusColor(sum){
    // Объявление статуса и изменение цвета надписи
    if(sum <= LIMIT){
        statusNode.innerText = 'всё хорошо';
        statusNode.classList.remove('status-red');
        statusNode.classList.add('status');
        minusAmountNode.innerHTML = "";
    } else{
        statusNode.innerText = 'всё плохо';
        statusNode.classList.add('status-red');
        minusAmount(LIMIT, sum);
    }; 
};


function minusAmount(LIMIT, sum){
    let minus = LIMIT - sum;
    minusAmountNode.innerHTML = ` (${minus} руб)`;
    minusAmountNode.classList.add('status-red');
};






// Кнопка вызова модального окна для замены лимита
changeLimitNode.addEventListener('click', function(){
    popupNode.classList.add('popup__open');
});

// Кнопка добавления нового лимита и замены статуса
popupBtnNode.addEventListener('click', function(){
    let popupInputNumberNode = parseInt(popupInputNode.value);
    // console.log(typeof popupInputNumberNode);
    limitNode.innerText = popupInputNumberNode;
    measurementNode.innerText = ' руб.';
    

    let difineNameArray;
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains('active')){
            let nameExpenses = spendingMenuOption[i].textContent;
            difineNameArray = defineArray(nameExpenses);
        };
    };

    // Подсчёт суммы трат
    let sum2 = 0;
    difineNameArray.forEach(element=>{
        sum2 += element;
    });

    sumNode.innerText = `${sum2} руб.`;

    // Меняем цвет статуса
    if(sum2 <= popupInputNumberNode){
        statusNode.innerText = 'всё хорошо';
    } else{
        statusNode.innerText = 'всё плохо';
        statusNode.classList.add('status-red');
    };

    togglePopup();
});

function defineArray(nameExpenses){
    if(nameExpenses === 'Транспорт'){
        return expensesTransport;
    } else if(nameExpenses === 'Кафе и рестораны'){
        return expensesCafesRestaurants;
    } else if(nameExpenses === 'Аптека'){
        return expensesPharmacy;
    } else if(nameExpenses === 'Развлечения'){
        return expensesEntertainment;
    };
};
// Объекты с массивами

let transport = {
    valueItem: 'Транспорт',
    array: expensesTransport 
};

let cafesRest= {
    valueItem: 'Кафе и рестораны',
    array: expensesCafesRestaurants
}

let pharmacy = {
    valueItem: 'Аптека',
    array: expensesPharmacy 
};

let entertainment = {
    valueItem: 'Развлечения',
    array: expensesEntertainment 
};

let arrayObjectsExpenses = [
    transport, 
    cafesRest, 
    pharmacy, 
    entertainment
];


// Кнопка сброса
resetBtnNode.addEventListener('click', function(){
    // Сбрасваем значение "общих трат"
    sum = 0; // Обратить внимание во время рефакторинга
    sumNode.innerText = `${sum} руб.`;

    // Убираем историю расходов с сайта
    historyNode.innerText = ``;

    // Удаляем все элементы из массива

    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains('active')){
            let nameExpenses = spendingMenuOption[i].textContent;
            deleteItems(nameExpenses);
        };
    }; 

    statusChange();
});




// Функция удаления всех элементов
function deleteItems(nameExpenses){
    for(let i=0; i<arrayObjectsExpenses.length; i++){
        if(arrayObjectsExpenses[i].valueItem === nameExpenses){
            arrayObjectsExpenses[i].array.splice(0);
            console.log(expensesTransport);
            console.log(expensesCafesRestaurants);
            console.log(expensesPharmacy);
            console.log(expensesEntertainment);
        };
    };
};

function statusChange(){
    statusNode.innerText = 'всё хорошо';
    statusNode.classList.remove('status-red');
    minusAmountNode.innerHTML = "";
};
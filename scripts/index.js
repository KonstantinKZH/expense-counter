// ПЕРЕМЕННЫЕ И КОНСТАНТЫ
const LIMIT = 10000;
const TOTAL = 0;
const currency = 'руб.'
const STATUS_EVERYTHING_GOOD = 'всё хорошо';
const STATUS_EVERYTHING_BAD = 'всё плохо';

const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';
const CLASSNAME_TEG_LI_DROPDOWN_MENU = 'js-spending-menu-li';
const CLASS_ACTIVE_CATEGORY = 'active';
const CLASSNAME_HIDE_DROPDOWN_MENU = 'spending-menu-li__hide';
const CLASSNAME_ARROW_UP = 'icon-arrow_up';
const CLASSNAME_ARROW_DOWN = 'icon-arrow_down';
const CLASSNAME_STATUS_RED = 'status-red';

const ID_CONTSINER_DROPDOWN_MENU = 'pullDownMenu';

const bodyNode_2 = document.querySelector('body');
const inputNode = document.querySelector('.js-expenses-input');
const spendingMenuNode = document.querySelector('.js-spending-menu');
const limitNode = document.querySelector('.js-limit__value');
const measurementNode = document.querySelector('.js-unit-measurement');
const sumNode = document.querySelector('.js-sum');
const statusNode = document.querySelector('.js-status');
const minusAmountNode = document.querySelector('.js-minus-amount');
const historyNode = document.querySelector('.js-history');
const popupNode = document.querySelector('.js-popup');
const popupContentNode = document.querySelector('.js-popup__content');
const popupInputNode = document.querySelector('.js-popup__content-input');

const buttonNode = document.querySelector('.js-expenses-btn');
const spendingMenuBtn = document.querySelector('.js-spending-menu__btn');
const btnOpenNode = document.querySelector('.js-limit__btn');
const resetBtnNode = document.querySelector('.js-reset-btn');
const popupBtnNode = document.querySelector('.js-popup__content-btn');
const popupCloseBtnNode = document.querySelector('.popup__close-btn');

limitNode.innerText = LIMIT;
sumNode.innerText = `${TOTAL} ${currency}`;

// МАССИВЫ
// Массив тегов <li> с классом - js-spending-menu-li
const spendingMenuOption = document.getElementsByClassName(CLASSNAME_TEG_LI_DROPDOWN_MENU);

// Массив, содеражащий объекты с данными о "массивах трат"
const arrayObjectsExpenses = [
    {contentTegLi: 'Транспорт', nameArray: []},
    {contentTegLi: 'Кафе и рестораны', nameArray: []},
    {contentTegLi: 'Аптека', nameArray: []},
    {contentTegLi: 'Развлечения', nameArray: []}
];


// Кнопка добавления затрат
buttonNode.addEventListener('click', function(){
    // Если поле пустое, ничего не делаем
    if(inputNode.value === ''){
        return;
    };
    // Записываем значение с поля ввода и переводим в целочисленное значение и в typeof - number
    const expense = parseInt(inputNode.value);
    // Определяем, в какой именно массив записывать затраты
    let arrayListExpenses = determineInWhichArrayEnterExpenses();
    // Добавляем затраты в данный массив
    arrayListExpenses.push(expense);

    // Выводим историю трат на экран
    outputListExpenses();

    // Суммируем расходы по категориям
    letSumUpExpensesCategory();

    // Делаем сброс строки ввода после каждого нажатия
    inputNode.value = '';     
});

// Кнопка расскрытия (закрытия) выпадающего меню
spendingMenuBtn.addEventListener('click', function(){
    // Меняем направление стрелки после клика и видимость меню
    changeDirectionOfArrow();
    expandMenu();
});



// Кнопка замены лимита
popupBtnNode.addEventListener('click', function(){
    if(popupInputNode.value === '') return;
    let newLimit = parseInt(popupInputNode.value);
    let currentExpensesAmount = parseInt(sumNode.innerText);
    limitNode.innerText = newLimit;
    
    if(newLimit < currentExpensesAmount) {
        difineStatus(currentExpensesAmount);
    }else{
        difineStatus(currentExpensesAmount);
    }

    togglePopup(); // Закрывает popup после замены лимита
    popupInputNode.value ='';
});


// Тут мы проверяем: клик произошол на popup-content или за пределами popup-content
popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode);
    // Если клик произошол за пределами контента, то нужно вызвать операцию скрыть
    if (isClickOutsideContent) {
        togglePopup();
    };
});

// Кнопка открывающая popup
btnOpenNode.addEventListener('click', function(){
    togglePopup();
});

// Кнопка закрывающая popup
popupCloseBtnNode.addEventListener('click', function(){
    togglePopup();
});

// Кнопка сброса
resetBtnNode.addEventListener('click', function(){
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains(CLASS_ACTIVE_CATEGORY)){
            let text = spendingMenuOption[i].textContent;

            for(let j=0; j<arrayObjectsExpenses.length; j++){
                if(arrayObjectsExpenses[j].contentTegLi === text){
                    let arrayClean = arrayObjectsExpenses[j].nameArray;
                    arrayClean.splice(0);
                };
            };
        };
    };
    let resetBalance = 0;
    sumNode.innerText = `${resetBalance} ${currency}`;
    minusAmountNode.innerText = ``;
    outputListExpenses();
    difineStatus(resetBalance);
});
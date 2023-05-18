// ФУНКЦИИ ДЛЯ РАБОТЫ ВЫПОДАЮЩЕГО МЕНЮ
// Функция скрывающая выподающее меню после загрузки страницы
window.onload = function(){
    for(let i = 1; i<spendingMenuOption.length; i++){
        spendingMenuOption[i].classList.add('spending-menu-li__hide');
    };
};

/* В эту переменную мы запишем индекс выбранного элемента, 
чтобы после скрытия меню элемент с этим индексом не пропал */
let indexCategory = 0;

// // Клик по элементам выподающего меню
document.getElementById("pullDownMenu").onclick = function(e){
    const itemMenu = e.target;
    console.log(itemMenu);
    if(itemMenu.classList.contains('js-spending-menu-li')){
        for(let i=0; i<spendingMenuOption.length; i++){
            if(spendingMenuBtn.classList.contains('icon-arrow_down')) continue;
            if(spendingMenuOption[i] == itemMenu){ 
                indexCategory = i; // Инициализируем значение инщекса той категории, по которой кликнули
                hideWhenClicked(i);
                replacingArrowPressing();
                listExpensesClick();
            };
        };
    };
};

// Функция выводящая список на экран при смене списка затрат
function listExpensesClick(){
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains('active')){
            let contentCategory = spendingMenuOption[i].textContent;
                switch(contentCategory){
                    case "Транспорт":
                        outputListCosts(expensesTransport);
                        calculatingAmountExpenses(expensesTransport);
                        // changingStatusColor(sum);
                        break;
                    case "Кафе и рестораны":
                        outputListCosts(expensesCafesRestaurants);
                        calculatingAmountExpenses(expensesCafesRestaurants);
                        // changingStatusColor(sum);
                        break;
                    case "Аптека":
                        outputListCosts(expensesPharmacy);
                        calculatingAmountExpenses(expensesPharmacy);
                        // changingStatusColor(sum);
                        break;
                    case "Развлечения":
                        outputListCosts(expensesEntertainment);
                        calculatingAmountExpenses(expensesEntertainment);
                        // changingStatusColor(sum);
                        break;
                };
        };
    };
};

// Кнопка открытия и закрытия выподающего меню
spendingMenuBtn.addEventListener('click', function(e){
    const target = e.target;
    if(target.classList.contains('icon-arrow_down')){
        for(let i=0; i<spendingMenuOption.length; i++){
            if(spendingMenuOption[i].classList.contains('spending-menu-li__show')) continue;
            spendingMenuOption[i].classList.remove('spending-menu-li__hide');
        };
        target.classList.remove('icon-arrow_down');
        target.classList.add('icon-arrow_up');
    } else{
        for(let i=0; i<spendingMenuOption.length; i++){
            if(spendingMenuOption[i].classList.contains('spending-menu-li__show')) continue;
            if(i === indexCategory) continue;
            spendingMenuOption[i].classList.add('spending-menu-li__hide');
        };
        target.classList.remove('icon-arrow_up');
        target.classList.add('icon-arrow_down');
    };
});

// Скрывает меню после выбора категории затрат
function hideWhenClicked(a){
    for(let k=0; k<spendingMenuOption.length; k++){
        if(k === a){
            spendingMenuOption[a].classList.add('active');
            continue; 
        };
        
        spendingMenuOption[k].classList.remove('active');
        spendingMenuOption[k].classList.remove('spending-menu-li__show');
        spendingMenuOption[k].classList.toggle('spending-menu-li__hide');
    };
};

// Изменяет направление стрелки после выбора затрат
function replacingArrowPressing(){
    spendingMenuBtn.classList.remove('icon-arrow_up');
    spendingMenuBtn.classList.add('icon-arrow_down');
};

// Скрывает меню при клике по иной области и меняет иконку стрелки на "иконку стрелки вниз"
window.onclick = function(e){
    const elem = e.target;
    for(let i=0; i<spendingMenuOption.length; i++){
        if(elem.classList.contains('js-spending-menu')) continue;
        if(elem.classList.contains('js-spending-menu__content')) continue;
        if(elem.classList.contains('js-spending-menu__ol')) continue;
        if(elem.classList.contains('js-spending-menu-li')) continue;
        if(elem.classList.contains('js-spending-menu__btn')) continue;
        if(i === indexCategory) continue;
        spendingMenuOption[i].classList.add('spending-menu-li__hide');
        spendingMenuBtn.classList.remove('icon-arrow_up');
        spendingMenuBtn.classList.add('icon-arrow_down');
    };
};
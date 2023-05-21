// Скрывает все пункты выпадающего меню, кроме того у которого есть класс "active"
window.onload = function(){
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains(CLASS_ACTIVE_CATEGORY)) continue;
        spendingMenuOption[i].classList.toggle(CLASSNAME_HIDE_DROPDOWN_MENU);
    };
};

// Определяем категорию, по которой мы будем кликать и после выбора скрываем меню
document.getElementById(ID_CONTSINER_DROPDOWN_MENU).onclick = function(e){
    const categoryExpenses = e.target;
    if(categoryExpenses.classList.contains(CLASSNAME_TEG_LI_DROPDOWN_MENU)){
        for(let i=0; i<spendingMenuOption.length; i++){
            spendingMenuOption[i].classList.remove(CLASS_ACTIVE_CATEGORY);
            spendingMenuOption[i].classList.add(CLASSNAME_HIDE_DROPDOWN_MENU);
            if(spendingMenuOption[i]==categoryExpenses){
                spendingMenuOption[i].classList.toggle(CLASS_ACTIVE_CATEGORY);
                spendingMenuOption[i].classList.toggle(CLASSNAME_HIDE_DROPDOWN_MENU);
                outputListExpenses(); // Находится в файле - output-expenses
                flipArrowAfterSelectingCategory();
                letSumUpExpensesCategory(); // Находится в файле - 
            };
        };
    };
};

// Возвращаем стрелку в положение с указанием вниз
function flipArrowAfterSelectingCategory(){
    if(spendingMenuBtn.classList.contains(CLASSNAME_ARROW_UP)){
        spendingMenuBtn.classList.remove(CLASSNAME_ARROW_UP);
        spendingMenuBtn.classList.add(CLASSNAME_ARROW_DOWN);
    };
};


// Меняем направление стрелки после клика
function changeDirectionOfArrow(){
    spendingMenuBtn.classList.toggle(CLASSNAME_ARROW_UP);
};
// Расскрывает (закрывает меню) меню
function expandMenu(){
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains(CLASS_ACTIVE_CATEGORY)) continue;
        spendingMenuOption[i].classList.toggle(CLASSNAME_HIDE_DROPDOWN_MENU);
    };
};
// Функция определяющая в какой массив записать затраты
function determineInWhichArrayEnterExpenses(){ 
    for(let i=0; i<arrayObjectsExpenses.length; i++){
        if(defineClickCategory() === arrayObjectsExpenses[i].contentTegLi){
            return arrayObjectsExpenses[i].nameArray;
        };
    };
};
// Определяет содержание тегов <li></li> (в строковом типе данных)
// Это нужно для того, чтобы определить - в какой именно массив выбрать для записи затрат
function defineClickCategory(){
    // Получаем название рубрики трат (НЕ УДАЛЯТЬ)
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains(CLASS_ACTIVE_CATEGORY)){
            let contentTegLi = spendingMenuOption[i].textContent;
            return contentTegLi;
        };
    };
};
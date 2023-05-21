// Выводим содержимое массивов (списков) в историю
function outputListExpenses(){
    let arrayListExpenses = null;

    for(let i=0; i<arrayObjectsExpenses.length; i++){
        if(arrayObjectsExpenses[i].contentTegLi === getTextFromlementWithActiveClass()){
            arrayListExpenses = arrayObjectsExpenses[i].nameArray;
        };
    };
    let expensesListHTML = '';
    arrayListExpenses.forEach(element =>{
        let elementHTML = `<li>${element} ${currency}</li>`;
        expensesListHTML += elementHTML;
    });
    const html = `<ol>${expensesListHTML}</ol>`;
    historyNode.innerHTML = html;
};

// Получаем содержимое тега <li></li> у которого имеется класс - active
function getTextFromlementWithActiveClass(){
    for(let i=0; i<spendingMenuOption.length; i++){
        if(spendingMenuOption[i].classList.contains(CLASS_ACTIVE_CATEGORY)){
            let textTegLi = spendingMenuOption[i].textContent;
            return textTegLi;
        };
    };
};
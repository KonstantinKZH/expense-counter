// Суммирование расходов по категориям
function letSumUpExpensesCategory(){
    let arrayListExpenses = null;

    for(let i=0; i<arrayObjectsExpenses.length; i++){
        if(arrayObjectsExpenses[i].contentTegLi === getTextFromlementWithActiveClass()){
            arrayListExpenses = arrayObjectsExpenses[i].nameArray;
        };
    };
    let sum = 0;
    arrayListExpenses.forEach(element =>{
        sum += element;
    });
    sumNode.innerText = `${sum} ${currency}`;

    // Здесь определяем статус
    difineStatus(sum);
};
// Функция - getTextFromlementWithActiveClass() - находится в файле - output-expenses
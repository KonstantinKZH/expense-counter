// Определет и устанавливает статус 
function difineStatus(sum){
    let minusAmount = parseInt(limitNode.innerText) - sum;
    if(sum < limitNode.innerText){
        statusNode.classList.remove(CLASSNAME_STATUS_RED);
        statusNode.innerText = STATUS_EVERYTHING_GOOD;
        minusAmountNode.innerText = ``;
    } else{
        statusNode.classList.add(CLASSNAME_STATUS_RED);
        statusNode.innerText = STATUS_EVERYTHING_BAD;
        minusAmountNode.innerText = ` (${minusAmount} ${currency})`;
    };
};
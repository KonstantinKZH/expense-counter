const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';

const bodyNode_2 = document.querySelector('body');
const popupContentNode = document.querySelector('.js-popup__content');
const btnOpenNode = document.querySelector('.js-limit__btn');

btnOpenNode.addEventListener('click', togglePopup);
popupCloseBtnNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
    // Тут мы проверяем: клик произошол на popup-content или за пределами popup-content
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode);

    // Если клик произошол за пределами контента, то нужно вызвать операцию скрыть
    if (isClickOutsideContent) {
        togglePopup();
    };
});

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode_2.classList.toggle(BODY_FIXED_CLASSNAME_2);
};
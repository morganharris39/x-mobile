// inject year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

// select button and ul items
const btnElement = document.querySelector("#primaryNav > button");
const navElement = document.querySelector("#primaryNav > ul")

// add open class when toggled
btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})
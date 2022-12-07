let myButton = document.querySelectorAll('.button-group > button');

myButton.forEach(function (key) {
    key.addEventListener('click', function () {
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})

function removeStyles() {
    for (let i = 0; i < myButton.length; i++) {
        document.querySelectorAll('.button-group > button')[i].removeAttribute('class');
    }
}
(function(){
    const divs = document.querySelectorAll('div');
    const button = document.querySelector('button');

    const logText = e => {
        console.log(e.currentTarget.classList.value);
        // stop bubbling
        e.stopPropagation();
    };

    divs.forEach(div => div.addEventListener('click', logText, {
        once: true
    }));

    button.addEventListener('click', () => {
        console.log('Click!');
    }, {
        // once: true
    });
}());
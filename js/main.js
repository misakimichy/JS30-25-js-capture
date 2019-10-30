(function(){
    const divs = document.querySelectorAll('div');
    const button = document.querySelector('button');

    const logText = e => {
        // stop bubbling
        // e.stopPropagation();
        console.log(e.currentTarget.classList.value);
    };

    divs.forEach(div => div.addEventListener('click', logText, {
        capture: false,
        once: true
    }));
}());
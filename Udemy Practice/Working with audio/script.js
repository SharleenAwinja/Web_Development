document.body.addEventListener('keypress', function(e) {
    let key = e.keyCode;
    if (key === 65)
        `<audio autoplay>
            <source src='./htmlaudio/clap.wav' type='audio/wav'>
        </audio>`
})
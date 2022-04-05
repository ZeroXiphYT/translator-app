var btn = document.getElementById('btn');
var finp = document.getElementById('from');
var tinp = document.getElementById('to');
var word = document.getElementById('Words');
var dv = document.getElementById('info');
var drk = document.querySelector('[type=checkbox]');
var ht = document.getElementById('html');
drk.addEventListener('click', function(){
    if(ht.classList.contains('dark')){
        ht.classList.remove('dark')
    }else{
        ht.classList.add('dark')
}})
btn.addEventListener('click', function () {
    var flang = finp.value;
    var tlang = tinp.value;
    var wd = word.value;
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
            'X-RapidAPI-Key': 'ddb139d611mshfedb5fc83349700p1c6667jsnafc6d7cc0f4c'
        },
        body: `{"q":"${wd}","source":"${flang}","target":"${tlang}"}`
    };

    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => dv.innerHTML = response.data.translations.translatedText)
        .catch(err => dv.innerHTML = err);
})
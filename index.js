document.querySelector('.btn-convert').addEventListener('click', function() {
    let trans = document.querySelector('.txa-origin').value;
    trans = trans.split('\n\n').join(' ');
    trans = trans.split('. ').join('.\n\n');

    document.querySelector('.txa-result').value = trans;
});
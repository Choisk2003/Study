var x = new Boolean(true);
var hw = document.getElementById('hw');
hw.addEventListener('click', function () {
    var pp = document.getElementById('pTag');
    if (x)
        pp.innerHTML = "wawawa";
    else
        pp.innerHTML = "hihihi";
    x = !x;
})
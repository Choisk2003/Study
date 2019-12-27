function setNow() {
    var d = new Date();
    d.setHours(d.getHours() + 9);

    document.getElementById('contents').value = "";

    document.getElementById('date').value = d.toISOString().substring(0, 10);

    document.getElementById('time').value = d.toISOString().substring(11, 16);
}

setNow();
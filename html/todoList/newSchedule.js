var scheduleInfo={
    content,
    date,
    time
}
var scheduleInfos = new Array;
var arrSize = 0;

var mainDiv = document.getElementById("mainDiv");

printSchedule();

function content() {
    return document.getElementById("contents").value;
}

function date() {
    return document.getElementById("date").value;
}

function time() {
    return document.getElementById("time").value;
}

function setArray() {
    if (content() == "") {
        alert("내용을 입력해 주세요");
        return false;
    }
    arrSize++;
    scheduleInfo.content = content();
    scheduleInfo.date = date();
    scheduleInfo.time = time();
    scheduleInfos.push(JSON.stringify(scheduleInfo));
    return true;
}

function newSchedule() {
    if(!setArray()){
        return;
    }
    uploadLocal(scheduleInfos, arrSize);
    printSchedule();
    setNow();
}

function printSchedule(){
    mainDiv.innerHTML = "";
    scheduleInfos = getScheduleInfos();
    arrSize = getArrSize();
    for (let i = 0; i < arrSize; i++) {
        scheduleInfo = JSON.parse(scheduleInfos[i]);
        mainDiv.innerHTML += "<div class='schedules' id='schedule" + i + "'>" + " <div class='scheduleDetails' id='scheduleContents'>" + scheduleInfo.content + "</div>" + "<div class='scheduleDetails' id='scheduleDate'>" + scheduleInfo.date + "</div>" + "<div class='scheduleDetails' id='scheduleTime'>" + scheduleInfo.time + "</div>" + "<btn class='scheduleDetails scheduleDel' onclick='del(this)'><img class='delPng' src='del.png'></btn>" + "</div>";
    }
}
function uploadLocal(scheduleInfos, SIZE) {
    localStorage.setItem("scheduleInfos", JSON.stringify(scheduleInfos));
    localStorage.setItem("arrSize", SIZE);
}

function  getScheduleInfos() {
    return JSON.parse(localStorage.getItem("scheduleInfos"));
}

function getArrSize() {
    return Number(localStorage.getItem("arrSize"));
}

function clearAll() {
    localStorage.clear();
    let a = [];
    localStorage.setItem("scheduleInfos", JSON.stringify(a));
    printSchedule();
}
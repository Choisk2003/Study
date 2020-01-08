function del(delDiv) {
    let delIndex = Number(delDiv.parentNode.id.substr(8, 1));
    for (let i = delIndex; i < arrSize; i++) {
        scheduleInfos[i] = scheduleInfos[i + 1];
    }
    scheduleInfos.pop();
    arrSize--;
    uploadLocal(scheduleInfos, arrSize);
    printSchedule();
}

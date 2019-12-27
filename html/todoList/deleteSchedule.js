function del() {
    var delBtn = document.getElementById("scheduleDel");
    delBtn.addEventListener('click', function () {
        let delIndex = Number(this.parentElement.id.substring(8, 9));
        for (let i = delIndex; i < arrSize; i++) {
            scheduleInfos[i] = scheduleInfos[i + 1];
        }
        scheduleInfos.pop();
        arrSize--;
        uploadLocal(scheduleInfos, arrSize);
        printSchedule();
    })
}
// setInterval(myTimer, 1000)

// function myTimer() {
//     var date = new Date()
//     document.querySelector('.watch').innerHTML = date.toLocaleTimeString()
//     // console.log(date.toLocaleTimeString())
// }



setInterval(showTime, 1000);

const appendHr = document.getElementById('hours')
const appendMin = document.getElementById('mins')
const appendSec = document.getElementById('secs')
const appendSession = document.getElementById('session')


function showTime() {
    var date = new Date()
    var hr = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var session = 'AM'

    if (hr == 0) {
        hr = 12
    }

    if (hr > 12) {
        hr = hr - 12
        session = 'PM'
    }

    hr = (hr < 10) ? '0' + hr : hr
    min = (min < 10) ? '0' + min : min
    sec = (sec < 10) ? '0' + sec : sec

    appendHr.innerHTML = hr
    appendMin.innerHTML = min
    appendSec.innerHTML = sec
    appendSession.innerHTML = session
}

function showDate() {
    var date = new Date()
    var currentDate = date.getUTCDate()
    var currentMonth = date.getUTCMonth() + 1
    var currentYear = date.getUTCFullYear()

    currentDate = (currentDate < 10) ? '0' + currentDate : currentDate
    currentMonth = (currentMonth < 10) ? '0' + currentMonth : currentMonth

    var result = currentDate + '/' + currentMonth + '/' + currentYear

    document.getElementById('date').innerHTML = result
}

function dayOfWeek() {
    var date = new Date()
    var currentDay = date.getUTCDay()

    var days = document.getElementsByClassName('btn-d')
    switch (currentDay) {
        case 0:
            days[0].classList.add('active')
            break;
        case 1:
            days[1].classList.add('active')
            break;
        case 2:
            days[2].classList.add('active')
            break;
        case 3:
            days[3].classList.add('active')
            break;
        case 4:
            days[4].classList.add('active')
            break;
        case 5:
            days[5].classList.add('active')
            break;
        case 6:
            days[6].classList.add('active')
            break;
        
    }
}

showDate()
dayOfWeek()
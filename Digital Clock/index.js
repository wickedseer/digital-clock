const hour_element = document.getElementById("hour");
const min_element = document.getElementById("minutes");
const sec_element = document.getElementById("seconds");
const ampm_element = document.getElementById("ampm");

function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    console.log(ampm);

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour_element.innerText = h;
    min_element.innerText = m;
    sec_element.innerText = s;
    ampm_element.innerText = ampm;

    setTimeout(() => {
        updateTime();
    }, 1000)

}

updateTime();

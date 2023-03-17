


let name = document.querySelector("#myName")
name.innerHTML = prompt("Lütfen isminizi giriniz!")

function showTime() {

    let tarih = new Date();
    
    var gunler = 
    ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML =`
    ${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}
    ${gunler[tarih.getDay()]}
    ` ;
    }
    setInterval(showTime,1000)
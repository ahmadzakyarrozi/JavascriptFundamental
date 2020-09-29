
            //Spread Operator
//join for array
var peaks = [ "Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]
var last = [...peaks.reverse()]
console.log(tahoe.join(','));
console.log(last.join(','));

//spread Operator 2
var morning = {
    breakfast   : "outmeal",
    lunch       : "peanut butter and jelly"
}

var dinner = "meat and cheese"

var backpackingMeals = {
    ...morning,
    dinner
}

console.log(backpackingMeals);

            //Classes
//commonclasses

//buat fungsi dulu
function Vacation (destination, length){
    this.destination = destination
    this.length = length
}

//buat prototype for print
Vacation.prototype.print = function() {
    console.log(this.destination + " !" + this.length + "days");
}
//buat objek baru
var maui = new Vacation ("Maui", "7")

//objek yang baru diprint
maui.print()

//Es6Classes
class Vacation2 {
    constructor(destination, length){
        this.destination = destination
        this.length = length
    }
    print(){
        console.log(`${this.destination} will take ${this.length} days`);
    }
}
var contoh = new Vacation2 ("Surabaya", "2")
console.log(contoh);

//with instance kelas menggunakan new dan bisa dipanggil
let trip = new Vacation2 ("palembang", "3")
console.log(trip);

//pewarisan/inheritance
class Expedition extends Vacation {
    constructor(destination, length, gear){
        super(destination,length)
        this.gear = gear
    }
    print(){
        super.print()
        console.log(`Bring your ${this.gear.join(" and your")}`);
    }
}
let strip = new Expedition("Mr. Erlangga", 3, ["Surabaya", "Yogyakarta", "Solo"])
console.log(strip);

//Putting It All Together (Challenge)

setInterval(logClockTime, 1000);
function logClockTime() {
    //Get Time string as civilian time
    var time = getClockTime();

    //Clear the console and log the time
    console.clear();
    console.log(time);
}

function getClockTime() {

    const date = new Date();
    var time = "";

    var time = {
        hours   : date.getHours(),
        minutes : date.getMinutes(),
        second  : date.getSeconds(),
        ampm    : "AM"

    }

    if (time.hours == 12) {
        time.ampm = "PM";
    }
    else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }


    if (time.hours < 10) {
        time.minutes = "0" +time.minutes;
    }

    if (time.second < 10) {
        time.second = "0" + time.second;
    }

    return time.hours + ":"
            + time.minutes + ":"
            + time.seconds + ":"
            +time.ampm;
}
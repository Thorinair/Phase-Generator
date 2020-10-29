const fs = require("fs");

var phases_src = require("./phases_src.json");
var phases = [];

function genItem(diff, phase) {
    var date = new Date(diff);
    var strDate = date.toDateString().split(" ");
    var strTime = date.toTimeString().split(" ")[0].split(":");

    var item = {};
    item.phase = phase;
    item.date = strDate[3] + " " + strDate[1] + " " + strDate[2];
    item.time = strTime[0] + ":" + strTime[1];

    return item;
}

phases_src.forEach(function(p, i) {
    if (i == 0) {
        phases.push(p);
    }
    else {
        var datePhasePrev = new Date(phases_src[i-1].date + " " + phases_src[i-1].time);
        var datePhaseNext = new Date(p.date + " " + p.time);
        var step = (datePhaseNext.getTime() - datePhasePrev.getTime()) / 4;

        phases.push(genItem(datePhasePrev.getTime() + step,     "Last Quarter"));   
        phases.push(genItem(datePhasePrev.getTime() + step * 2, "New Moon"));
        phases.push(genItem(datePhasePrev.getTime() + step * 3, "First Quarter"));

        phases.push(p);        
    }
});

fs.writeFileSync("./phases.json", JSON.stringify(phases), "utf-8");
var hero_list = {
    "Doomfist": "img/doomfist.png",
    "McCree": "img/mccree.png",
    "Phara": "img/phara.png",
    "Reaper": "img/reaper.png",
    "Soldier": "img/soldier.png",
    "Sombra": "img/sombra.png",
    "Tracer": "img/tracer.png",
    "Bastion": "img/bastion.png",
    "Hanzo": "img/hanzo.png",
    "Junkrat": "img/junkrat.png",
    "Mei": "img/mei.png",
    "Torbjorn": "img/torbjorn.png",
    "Widowmaker": "img/widowmaker.png",
    "Dva": "img/dva.png",
    "Orisa": "img/Orisa.png",
    "Reinhardt": "img/reinhardt.png",
    "Roadhog": "img/roadhog.png",
    "Winston": "img/winston.png",
    "Zarya": "img/zarya.png",
    "Ana": "img/ana.png",
    "Lucio": "img/lucio.png",
    "Mercy": "img/mercy.png",
    "Moira": "img/moira.png",
    "Symmetra": "img/symmetra.png",
    "Zenyatta": "img/zenyatta.png"
}

function grab_hero() {
    var hero = document.getElementById("choice").value;
    document.getElementById("hero_img").src = hero_list[hero];
};

document.getElementById("pick").innerHTML = "hero";
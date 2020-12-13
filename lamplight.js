const light             = document.querySelector(".light");
const lightbulb         = document.querySelector(".light span");
const mount             = document.querySelector(".mount");
const pedestal          = document.querySelector(".pedestal");
const lightSwitchStuff  = document.querySelector(".lightswitch-stuff");
const lightSwitch       = document.querySelector(".lightswitch");
const lightSwitchHandle = document.querySelector(".handle");
const lamp              = document.querySelector(".lamp");
const bg                = document.querySelector("body");
const desk              = document.querySelector(".desk");
let lightOn             = false;

function lightOnOrOff() {
    if (!lightOn) {
        lightOn = true;

        light.style.background = "tan";
        light.style.boxShadow = "none";
        lightbulb.style.boxShadow = "0 0 10px 50px beige";
        mount.style.background = "lightgray";
        lightSwitch.style.background = "lightgray";
        lightSwitchStuff.style.top = "8.8rem";
        lightSwitchHandle.style.background = "gray";
        pedestal.style.background = "saddlebrown";
        bg.style.background = "linear-gradient(to right, rgba(0,0,0,0.2) 10%, rgba(225, 215, 201, 0.5) 50%, rgba(225, 215, 201, 0.5) 50%, rgba(0,0,0,0.2) 90%)";
        desk.style.background = "rgb(94, 47, 26)";
    } else {
        lightOn = false;

        light.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), tan";
        light.style.boxShadow = "0 5px 10px black";
        lightbulb.style.boxShadow = "none";
        mount.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), gray";
        lightSwitch.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), lightgray";
        lightSwitchStuff.style.top = "5.8rem";
        lightSwitchHandle.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), gray";
        pedestal.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), saddlebrown";
        bg.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), #333";
        desk.style.background = "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), rgb(94, 47, 26)";
    }
}

lightSwitchStuff.addEventListener("click", lightOnOrOff);


let start = document.querySelector("#start");

let setting = document.querySelector("#settings");

let menu = document.querySelector("#menu");

let extra = document.querySelector("#extra");

let enterNameX = document.querySelector("#enterName")

function game()
{
    
    menu.style.display = "none";
    start.style.display = "block";
    extra.style.display = "none";
        
}

function settings()
{
    menu.style.display = "none";
    setting.style.display = "block";
    extra.style.display = "none";
}

function enterName()
{
    if(start.style.display === "block")
        {
            start.style.display = "none";
        }
    enterNameX.style.display = "block";
    extra.style.display = "none";

}

function darkmode()
{
    var x = document.getElementsByTagName("div")
    for(let i = 0; i < x.length; i++)
        {
            x = x[i];
            if(x.style.backgroundColor === "antiquewhite")
            {
                x.style.backgroundColor = "rgb(30, 18, 37)";
            }
            else if(x.style.backgroundColor === "rgb(30, 18, 37)")
                {
                    x.style.backgroundColor = "antiquewhite";
                }
        }   
}



function welcomeName()
{
    let name = document.getElementById("#nameEntry").value;
    let welcomeN = document.getElementById("#welcomeN")
    welcomeN.innerText = "Welcome to your career " + name;
}

function playAudio()
{
    const click = new Audio('click-21156.mp3')
    click.play();
}

document.querySelector("button").addEventListener("mouseover", playAudio)


    


function first()
{
    const startGamebutton=document.querySelector("#startGamebutton")
    const viewRulesButton=document.querySelector("#viewRulesbutton")
    const rulesDisplay=document.querySelector("#displayRules")

    startGamebutton.addEventListener("click",() => {
        
        location.href="/Space_Invasion_Math_Game/html/second.html"

    })

    viewRulesButton.addEventListener("click",() => {

        rulesDisplay.innerHTML="Shoot down the aliens before they get to Earth.<br> You have to 90secs per level.<br> The First Level is Addition and the Second Level is Substraction.<br> Good luck!"
    })
}
first();

/*
    let sound = new Audio()
    const button = document.querySelector(".fas fa-music")

    button.addEventListener("click",()=>{
        console.log("Music Button Clicked")

        sound.src="music_zapsplat_undercover.mp3";
        sound.play();
    })


*/

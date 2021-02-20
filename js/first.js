first = () =>
{
    const startGamebutton = document.querySelector("#startGamebutton")
    const viewRulesButton = document.querySelector("#viewRulesbutton")
    const rulesDisplay = document.querySelector("#displayRules")

    startGamebutton.addEventListener("click",() => {
        
        location.href = "/Space_Invasion_Math_Game/html/second.html"

    })

    viewRulesButton.addEventListener("click",() => {

        rulesDisplay.innerHTML = `Shoot down the aliens before they get to Earth. 
            <br> You have to 90secs for Level One (1) and 60secs to complete Level Two (2)
            <br> The First Level is Addition and the Second Level is Substraction.
            <br> Good luck!`
    })

    viewRulesButton.addEventListener("click",() => {

        rulesDisplay.innerHTML = ``;
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

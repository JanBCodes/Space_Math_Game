first = () =>
{
    const startGamebutton = document.querySelector("#startGamebutton")
    // const sectionContainer = document.querySelector("#section")
    const viewRulesButton = document.querySelector("#viewRulesbutton")
    const rulesDisplay = document.querySelector("#displayRules")
    const musicToggle = document.querySelector("#musicButton")
    let click = `on`;

    startGamebutton.addEventListener("click",() => {
        
        location.href = "./html/second.html"

    })

    viewRulesButton.addEventListener("click",() => {

        if (click == `on`)
        {
            click = `off`;

            // sectionContainer.style.backgroundImage = "hide"

            rulesDisplay.innerHTML = `Shoot down the aliens before they get to Earth. 
            <br/> You have to 90secs for Level One (1) and 60secs to complete Level Two (2)
            <br/> The First Level is Addition and the Second Level is Substraction.
            <br/> Good luck!`

        }
        else if (click == `off`)
        {
            click = `on`;

            rulesDisplay.innerHTML = ``;

        }

    })

    let musicOnOff = true
    let sound = new Audio();

    sound.src="../audio/music_zapsplat_undercover.mp3";
    sound.oncanplaythrough = () => {

        sound.readyToPlay = true;

    }

    musicToggle.addEventListener(`click`, () => {

        console.log(sound.readyToPlay)

        if(sound && sound.readyToPlay && musicOnOff) // check for the sound AND if it has loaded AND my flag is TRUE
        {  
            sound.currentTime = 5;       // the second I want the audio to start
            sound.play();                // play the audio I have
            musicToggle.style.backgroundColor = "green" 
            musicOnOff = false;
        }
        else
        {
            sound.pause(); 
            musicToggle.style.backgroundColor = "red" 
            musicOnOff = true
        }
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

second = () =>
{
    const playerName = document.querySelector("#playerName")
    const easy = document.querySelector("#easy")
    const hard = document.querySelector("#hard")

    sessionStorage.setItem("Name",`${playerName}`)

    easy.addEventListener("click",() => {
        
        sessionStorage.setItem("Level","Easy")
        location.href = "/Space_Invasion_Math_Game/html/main.html"

    })

    hard.addEventListener("click",() => {
        
        sessionStorage.setItem("Level","Hard")
        location.href = "/Space_Invasion_Math_Game/html/main.html"
    })
}
second();
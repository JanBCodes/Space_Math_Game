second = () =>
{
    const playerName = document.querySelector("#playerName")
    const easy = document.querySelector("#easy")
    const hard = document.querySelector("#hard")

    sessionStorage.setItem("Name",`${playerName}`)

    easy.addEventListener("click",() => {
        
        sessionStorage.setItem("Level","Easy")
        location.href = "../html/main.html"

    })

    hard.addEventListener("click",() => {
        
        sessionStorage.setItem("Level","Hard")
        location.href = "../html/main.html"
    })
}
second();
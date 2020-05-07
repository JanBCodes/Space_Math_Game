function main()
{   
    
    //430px to cannon//
    //-------- DOM FETCHERS --------//
    const spaceShips=document.querySelector("#spaceShips");
    const shooter=document.querySelector("#shooter");
    const ship1=document.querySelector("#ship1");
    const ship2=document.querySelector("#ship2");
    const ship3=document.querySelector("#ship3");
    const ship4=document.querySelector("#ship4");
    const ship5=document.querySelector("#ship5");
    const timer=document.querySelector("#timer")
   
    
    //------- EVENT LISTENERS -------//
    /*
    document.onkeydown = logKey
    window.addEventListener("keydown", function(logKey){

        if (logKey.keyCode=="37")//left
        {
            shooter.style.marginLeft=(`30px`);
        }
        else if(logKey.keyCode=="39")//right
        {
            shooter.style.marginLeft=(`-30px`);
        }

    })    
*/
    //------- VARIABLES -------//
    let counter=0;
    let timerCountdown=15;

        //------- MATH LOGIC ----//
        // Addition
        const random_first_num=Math.floor(Math.random() * 25) + 1;
        const random_second_num=Math.floor(Math.random() * 9) + 1;
        const sum=random_first_num+random_second_num //add to shooter/canon
    

    //------- EVENT HANDLERS ----//

    //------- TIMED FUNCTIONS ----//
   // setTimeout(stop, 0)
   
        play=
        setInterval(function(){
            
            timerCountdown--;
            timer.innerHTML=`${timerCountdown}`
            if(timerCountdown==0)
            {
                
                clearInterval(play)
                clearInterval(a)
                clearInterval(b)
                clearInterval(c)
                clearInterval(d)
                clearInterval(e)
                alert("Game Over")
            }
        },1000)


        a=setInterval(function(){
            counter+=20;
            ship1.style.marginTop=(`${counter}px`);  
        },1000);
        b=setInterval(function(){
            ship2.style.marginTop=(`${counter}px`);
        },1800);
        c=setInterval(function(){    
            ship3.style.marginTop=(`${counter}px`)
        },1500);
        d=setInterval(function(){ 
            ship4.style.marginTop=(`${counter}px`)
        },1200);
        e=setInterval(function(){
            ship5.style.marginTop=(`${counter}px`)
        },1350);
    
    
}
main();



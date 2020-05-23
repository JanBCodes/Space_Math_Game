const MainUI=
{

    allSShips   :   document.querySelectorAll(".ships"),
        ship1   :   document.querySelector("#ship1"),
        ship2   :   document.querySelector("#ship2"),
        ship3   :   document.querySelector("#ship3"),
        ship4   :   document.querySelector("#ship4"),
        ship5   :   document.querySelector("#ship5"),
        shooter :   document.querySelector("#shooter"),
        timer   :   document.querySelector("#timer"),
        missed  :   document.querySelector("#miss"),
        hits    :   document.querySelector("#hit"),
        firePin :   document.querySelector("span"),

    moveAllSpaceship(marginAdded)
    {
        for(let i=0; i<=this.allSShips.length; i++)
        {
            this.allSShips[i].style.marginTop=`${marginAdded}px`
           
            if(i==this.allSShips.length)
            {
                break;
            }  
        }
    },

    displayQuestionsandAnswer()
    {
        const answerArray=[]

        for(let i=0; i<this.allSShips.length; i++)
        {
            const firstNum=Math.floor(Math.random() * 25) + 1;
            const secondNum=Math.floor(Math.random() * 9) + 1;
            let answer=firstNum+secondNum;
        
            this.allSShips[i].innerHTML=`${firstNum} + ${secondNum}`;

            if(i==this.allSShips.length)
            {
                break;
            }
            answerArray.push(answer);
        }

        let randomAnswer=Math.floor(Math.random() * 4)
        this.shooter.innerHTML=`${answerArray[randomAnswer]}`;
        //console.log(answerArray)
    },

    moveShooter(shooterMarginStart)
    {
        this.shooter.style.marginLeft=`${shooterMarginStart}px`;
    },

    fireShooter()//!!!!!!!!!! What do I want happen?
    {
        //this.shooter.style.marginLeft=`${marginToMoveBy}px`;
        /*
            I want the bullets(picture) to shoot from center of shooter/cannon
            then validate if the answer is correct

            thinking to group create dynamically elements for the shooter bullets.
        
            */
        this.firePin.style.backgroundImage=`url(/Space_Invasion_Math_Game/img/shotsfired.png)`
        
    },

    addMissed(miss)
    {
        this.missed.innerHTML=`Missed: ${miss}`;
    },

    addHits(hits)
    {
        this.hits.innerHTML=`Hits: ${hits}`;
    },
    
    timeTracker(startTimer)
    {
        this.timer.innerHTML=`Timer: ${startTimer}`;       
    }
};

export default MainUI;
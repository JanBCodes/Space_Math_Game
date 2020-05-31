const MainUI=
{
    bodyheight  :   document.querySelector("#body"),
    allSShips   :   document.querySelectorAll(".ships"),
        main    :   document.querySelector("#spaceShips"),
        ship1   :   document.querySelector("#ship1"),
        ship2   :   document.querySelector("#ship2"),
        ship3   :   document.querySelector("#ship3"),
        ship4   :   document.querySelector("#ship4"),
        ship5   :   document.querySelector("#ship5"),
        cannon  :   document.querySelector("#cannon"),
        timer   :   document.querySelector("#timer"),
        missed  :   document.querySelector("#miss"),
        hits    :   document.querySelector("#hit"),
        bullet :   document.querySelector("#initialShot"),
        collide :   document.querySelector("#contactWithSship"),
        section :   document.querySelector("section"),

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
        let answerArray=[]

        for(let i=0; i<this.allSShips.length; i++)
        {   //possibly convert to Bus.Logic !!fix
            const firstNum=Math.floor(Math.random() * 25) + 1;
            const secondNum=Math.floor(Math.random() * 9) + 1;
            const answer=firstNum+secondNum;
        
            this.allSShips[i].innerHTML=`${firstNum} + ${secondNum}`;

            if(i==this.allSShips.length)
            {
                break;
            }
            answerArray.push(answer);
        }

        const randomAnswer=Math.floor(Math.random() * 4);
        const answerChosen=`${answerArray[randomAnswer]}`
        this.cannon.innerHTML=`${answerChosen}`
        
        //console.log(randomAnswer+1) //return answer element
        //console.log(answerChosen)
        //console.log(answerArray)
        //console.log(answerArray.length)

        return randomAnswer //returns the answer index
        //this.cannon.innerHTML=`${answerArray[randomAnswer]}`
        
    },
    /*
    removeShip()
    {
        MainUI.allSShips[i].remove() Nope remove parent dynamically
        MainUI.impact(bullet.top)
    },
    */
    movecannon(cannonMarginStart)
    {
        this.cannon.style.marginLeft=`${cannonMarginStart}px`;
    },

    firecannon(position,rectX)//!! What do I want happen?
    {
        this.bullet.style.backgroundImage=`url(/Space_Invasion_Math_Game/img/missile.png)`;
        this.bullet.style.bottom=`${position}px`;
        this.bullet.style.position=`absolute`;
        this.bullet.style.marginLeft=`${rectX}px`;
    },

    removebullet()
    {
        this.bullet.style.backgroundImage=`none`;
        this.bullet.style.bottom=`${0}px`;
    },
  
    impact(position,rectX)
    {
        this.collide.style.backgroundImage=`url(/Space_Invasion_Math_Game/img/boom2.png)`;
        this.collide.style.top=`${position}px`;
        this.collide.style.position=`absolute`;
        this.collide.style.marginLeft=`${rectX}px`;
    },
    removeImpact()
    {
        this.collide.style.backgroundImage=`none`;
        this.collide.style.botton=`${0}px`;
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

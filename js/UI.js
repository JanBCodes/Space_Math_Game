import levelOneQuestion from "./Blo.js";

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

    displayQuestions()
    {
        firstNum=levelOneQuestion.randomFirstNum;
        secondNum=levelOneQuestion.randomSecondNum;

        for(let i=0; i<this.allSShips.length; i++)
        {
            firstNum=levelOneQuestion.randomFirstNum;
            secondNum=levelOneQuestion.randomSecondNum;

            this.allSShips[i].innerHTML=`${firstNum} + ${secondNum} & ${i}` ;

            if(i==this.allSShips.length)
            {
                break;
            }
        }
    },

    displayAnswer(answer)
    {
        this.shooter.innerHTML=`${answer}`;
        
    },

    moveShooter(shooterMarginStart)
    {
        this.shooter.style.marginLeft=`${shooterMarginStart}px`;
    },

    fireShooter()//!!!!!!!!!! What do I want happen?
    {
        //this.shooter.style.marginLeft=`${marginToMoveBy}px`;
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
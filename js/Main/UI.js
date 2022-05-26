const MainUI =
{
    bodyheight  :   document.querySelector("#body"),
    allSShips   :   document.querySelectorAll(".questionContainer"),
        main    :   document.querySelector("#spaceShipsContainer"),
        ship1   :   document.querySelector("#ship1"),
        ship2   :   document.querySelector("#ship2"),
        ship3   :   document.querySelector("#ship3"),
        ship4   :   document.querySelector("#ship4"),
        ship5   :   document.querySelector("#ship5"),
        cannon  :   document.querySelector("#cannon"),
answerDisplay   :   document.querySelector("#answerContainer"),
        timer   :   document.querySelector("#timer"),
        missed  :   document.querySelector("#miss"),
        hits    :   document.querySelector("#hit"),
        level   :   document.querySelector("#level"),
        bullet  :   document.querySelector("#initialShot"),
        collide :   document.querySelector("#contactWithSship"),
        section :   document.querySelector("section"),

    displayQuestionsandAnswer(Operator)
    {
    
        let answerArray = []

        if(Operator === `+`)
        {
            for(let i = 0; i < this.allSShips.length; i++)
            {   
                const firstNum = Math.floor(Math.random() * 25) + 1;
                const secondNum = Math.floor(Math.random() * 9) + 1;
                const answer = firstNum+secondNum;
            
                this.allSShips[i].innerHTML = `${firstNum} ${Operator} ${secondNum}`;
    
                if(i == this.allSShips.length)
                {
                    break;
                }
                answerArray.push (answer);
            }

            const randomAnswer = Math.floor(Math.random() * 4);
            const answerChosen = `${answerArray[randomAnswer]}`
            this.answerDisplay.innerHTML = `${answerChosen}`
            return randomAnswer //returns the answer index
                           
            answerArray = []
        }
        
        else if (Operator === `-`)
        {
            for(let i = 0; i < this.allSShips.length; i++)
            {   
                const firstNum = Math.floor(Math.random() * 25) + 1;
                const secondNum = Math.floor(Math.random() * 9) + 1;
                const answer = firstNum - secondNum
            
                if(firstNum > secondNum)
                {
                    this.allSShips[i].innerHTML = `${firstNum} ${Operator} ${secondNum}`;
                    answerArray.push (answer);

                }
                // this.allSShips[i].innerHTML = `${firstNum} ${Operator} ${secondNum}`;
    
                if(i == this.allSShips.length)
                {
                    break;
                }
                // answerArray.push (answer);
            }
            const randomAnswer = Math.floor(Math.random() * 4);
            const answerChosen = `${answerArray[randomAnswer]}`
            this.answerDisplay.innerHTML = `${answerChosen}`
            return randomAnswer //returns the answer index

            answerArray = []

        }
        else if(Operator === `/`)
        {
            for(let i = 0; i < this.allSShips.length; i++)
            {   
                const firstNum = Math.floor(Math.random() * 25) + 1;
                const secondNum = Math.floor(Math.random() * 9) + 1;
                const answer = Math.floor(firstNum / secondNum);
            
                if(firstNum > secondNum && firstNum % secondNum === 0)
                {
                    this.allSShips[i].innerHTML = `${firstNum} ${Operator} ${secondNum}`;
                    answerArray.push (answer);           
                }

                if(i == this.allSShips.length)
                {
                    break;
                }
                // answerArray.push (answer);
            }
            const randomAnswer = Math.floor(Math.random() * 4);
            const answerChosen = `${answerArray[randomAnswer]}`
            this.answerDisplay.innerHTML = `${answerChosen}`
            return randomAnswer //returns the answer index

            answerArray = []

            
        }        
    },
    
    removeShip(x)
    {
        this.allSShips[x].style.backgroundImage =`none`;
        this.allSShips[x].innerHTML =``;
    },

    moveCannon(gridColumn)
    {
        this.cannon.style.gridColumn = `${gridColumn}`;
    },
 
    fireCannon(gridColumn, position) //!! What do I want happen?
    {
        this.bullet.style.backgroundImage = `url(../img/missile.png)`;
        this.bullet.style.bottom = `${position}px`;
        this.bullet.style.gridColumn = gridColumn;
    },

    removeBullet()
    {
        this.bullet.style.backgroundImage = `none`;
        this.bullet.style.bottom = `${0}px`;
    },
  
    impact(position, gridColumn)
    {
        this.collide.style.backgroundImage = `url(../img/VZvx.gif)`;
        this.collide.style.position = `relative`;
        this.collide.style.bottom = `${position}px`;
        this.collide.style.gridColumn = gridColumn;
    },

    removeExplosion()
    {
        this.collide.style.backgroundImage = `none`;
        this.collide.style.bottom = `${0}px`;
    },

    addMissed(miss)
    {
        this.missed.innerHTML = `Misses: ${miss}`;
    },

    addHits(hits)
    {
        this.hits.innerHTML = `Hits: ${hits}`;
    },
    
    timeTracker(startTimer)
    {
        this.timer.innerHTML = `Timer: ${startTimer}`;       
    }

};

export default MainUI;

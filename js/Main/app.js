import MainUI from "./UI.js"

const app =
{
    init() //Level One - Addition 90sec
    {   
        let levelOn = 120; // Start first Level with 90secs
        let moveAllSpaceship;
        let counter = 0;
        let addBy = 0;
        let secondsPerTimer;;
        let gamePlayLevel = 1;
        

        let newQuesandAnswer = MainUI.displayQuestionsandAnswer(`+`) //returns answer index or sShip index
        console.log(`Correct Ship Slot (i + 1) = ` + `${newQuesandAnswer+1}`);

/*********************************************************************************************************************************/

/*********************************************************************************************************************************/
    
        let levelSelected = () =>
        {
            let playerDifficultySet = sessionStorage.getItem("Level")

            if (playerDifficultySet == "Hard")
            {
                secondsPerTimer = 500
            }
            else if (playerDifficultySet == "Easy")
            {
                secondsPerTimer = 1000
            }

            // console.log(playerDifficultySet)
        }
        levelSelected()

/*********************************************************************************************************************************/

/*********************************************************************************************************************************/

        const startMovingAllShipsRandomly = (addBy) =>
        {
            moveAllSpaceship = 

                setInterval(() => {
                    counter += addBy
                    MainUI.ship1.style.marginTop = (`${counter}px`)
                },2000);

                setInterval(() => {
                    MainUI.ship2.style.marginTop = (`${counter}px`)
                },1800);

                setInterval(() => {
                    MainUI.ship3.style.marginTop = (`${counter}px`)
                },2500);

                setInterval(() => {
                    MainUI.ship4.style.marginTop = (`${counter}px`)
                },2200);

                setInterval(() => {
                    MainUI.ship5.style.marginTop = (`${counter}px`)
                },2350);  

        }
        startMovingAllShipsRandomly(15)

        const stopAllShip = () => {

            clearInterval(moveAllSpaceship) 

        }


/*********************************************************************************************************************************/

/*********************************************************************************************************************************/

        let timerLevel = levelOn;    //fix for Level 2 60sec

        let levelTimer = setInterval(()=>{

            const cannonRecTop = MainUI.cannon.getBoundingClientRect().top;
            const mainRecBottom = MainUI.main.getBoundingClientRect().bottom; 

            MainUI.timeTracker (timerLevel)

            if( timerLevel <= 0)
            {                
                MainUI.timeTracker( "Congrats Next Level Awaits!" )
                clearInterval (levelTimer)
                stopAllShip()
                levelTwo()
                gamePlayLevel = 2;
            }

        /***********************************************************************************
        Calculate if Collision with Cannon   - GAME OVER  
        ***********************************************************************************/
            if (mainRecBottom >= cannonRecTop+85)
            {
                stopAllShip()
                clearInterval ( levelTimer )
            }

            timerLevel -- ;

        }, secondsPerTimer);


        const levelTwo = () => {

            counter = 0;
            levelOn = 60;
            timerLevel = levelOn; 
            startMovingAllShipsRandomly(15)
            MainUI.timeTracker(levelOn)

            MainUI.displayQuestionsandAnswer(`-`)
            
            let levelTimer = setInterval(()=>{

                const cannonRecTop = MainUI.cannon.getBoundingClientRect().top;
                const mainRecBottom = MainUI.main.getBoundingClientRect().bottom; 
    
                MainUI.timeTracker (timerLevel)
    
                if( timerLevel <= 0)
                {                    
                    MainUI.timeTracker()
                    clearInterval (levelTimer)
                    stopAllShip()
                    levelThree()
                    gamePlayLevel = 3;

                }
    
            /***********************************************************************************
            Calculate if Collision with Cannon   - GAME OVER  
            ***********************************************************************************/
                if (mainRecBottom >= cannonRecTop+85)
                {
                    stopAllShip()
                    clearInterval ( levelTimer )
                }
    
                timerLevel -- ;
    
            }, secondsPerTimer);

        }

        const levelThree = () => {

            counter = 0;
            levelOn = 60;
            timerLevel = levelOn; 
            startMovingAllShipsRandomly(15)
            MainUI.timeTracker(levelOn)


            MainUI.displayQuestionsandAnswer(`/`)
            
            let levelTimer = setInterval(()=>{

                const cannonRecTop = MainUI.cannon.getBoundingClientRect().top;
                const mainRecBottom = MainUI.main.getBoundingClientRect().bottom; 
    
                MainUI.timeTracker (timerLevel)
    
                if( timerLevel <= 0)
                {                    
                    MainUI.timeTracker(levelOn)
                    clearInterval (levelTimer)
                    stopAllShip()
                }
    
            /***********************************************************************************
            Calculate if Collision with Cannon   - GAME OVER  
            ***********************************************************************************/
                if (mainRecBottom >= cannonRecTop+85)
                {
                    stopAllShip()
                    clearInterval ( levelTimer )
                }
    
                timerLevel -- ;
    
            }, secondsPerTimer);
        } 

// *********************************************************************************************************************************

// *********************************************************************************************************************************

        let gridColumnStart = 3; 
        const moveGridColumn = 1;

        document.addEventListener("keydown", event=>{

            /***********************************************************************************
            Restrict Movement of Ship Slots. Only 1 2 3 4 5 Slots Available
            ***********************************************************************************/

            if( gridColumnStart == 0)
            {
                gridColumnStart = 1;
            }

            if( gridColumnStart == 6)
            {
                gridColumnStart = 5;
            }

            // *********************************************************************************************************************************
            if (event.key == "ArrowLeft" && gridColumnStart >= 1)
            {
                gridColumnStart -= moveGridColumn;

                MainUI.moveCannon(gridColumnStart);
            }

            else if (event.key == "ArrowRight" && gridColumnStart < 5)
            {
                gridColumnStart += moveGridColumn;
                MainUI.moveCannon( gridColumnStart )
            }

            else if (event.key == "ArrowUp" || event.key == " ")
            {

            /***********************************************************************************
             What Happens When I Fire Cannon? 
                Bullet Travels to Ship
                Bullet Disappears Upon Impact with Ship
                Upon Impact :
                    Correct Answer
                        - Alien/Fireworks is Expelled if Answer is Correct
                        - New Questions Generate
                        - Ships Reset to Starting Position
                        - One Point is Added to Hit Counter

                    Wrong Answer
                        - Ship Shot Disappears
                        - New Questions Generate
                        - One Point is Added to Miss Counter

            ***********************************************************************************/
                let bulletPosition = 0;
                
                const missleColumnGrid = gridColumnStart;

                let bulletTimer = setInterval(() => {

                    let spaceShipBottomRec = MainUI.main.getBoundingClientRect(); //must stay in setInterval to be recalculated with every loop
                    let bulletRec = MainUI.bullet.getBoundingClientRect(); //must stay in setInterval to be recalculated with every loop
                    let hits = 0;
                    let misses = 0;

                    MainUI.fireCannon(missleColumnGrid, bulletPosition)


                    if (bulletRec.bottom <= spaceShipBottomRec.bottom)
                    {
                        /***********************************************************************************
                        Validation the Correct Answer to Ship Selected via Cannon Grid == Answer Grid
                        ***********************************************************************************/

                        /* Fix Here*/              
                        if ( missleColumnGrid == newQuesandAnswer+1) // Correct Answer
                        {
                            // console.log (`Correct Answer chosen`);
                            hits++;
                            // console.log(hits)
                            MainUI.addHits(hits)


                       }
                        else if ( missleColumnGrid != newQuesandAnswer+1) // Wrong Answer
                        {
                            // console.log (`Wrong Answer chosen`);
                            misses++;
                            MainUI.addMissed(misses)
                        }

                    //    console.log (`**Next Correct Ship Slot= ` + `${newQuesandAnswer+1}`);

                       /***********************************************************************************
                        Animation Control of Firing Bullets
                        ***********************************************************************************/
                        clearInterval (bulletTimer)//stop bullet from travelling past Spaceships(MAIN)

                        MainUI.removeBullet();//make bullet upon collision disappear+

                        MainUI.impact(bulletPosition + 150, missleColumnGrid); //replace bullet with exploding [IF CORRECT!] fix

                        setTimeout(() => {
                            MainUI.removeExplosion()
                        }, 150)

                        

                        if(gamePlayLevel = 1)
                        {
                            newQuesandAnswer = MainUI.displayQuestionsandAnswer(`+`) 
                        }
                        else if(gamePlayLevel = 2)
                        {
                            newQuesandAnswer = MainUI.displayQuestionsandAnswer(`-`) 
                        }
                        else if(gamePlayLevel = 3)
                        {
                            newQuesandAnswer = MainUI.displayQuestionsandAnswer(`/`) 
                        }

                        // console.log (`Missle Column Grid = ` + `${missleColumnGrid}`);
                        console.log (`Answer Slot (index + 1) = ` + `${newQuesandAnswer+1}`);

                    } 

                    bulletPosition+=35;

                }, 20);

                /*  Calculate if collision with Spaceship
                        then Remove Bullet - done
                        show Explosion - done

                    If Correct Answer
                        Regenerate SShips Positions to Start & New Questions
                        Update Hits

                    If Wrong Answer
                        Regenerate Questions
                        Update Misses 
                        
                    Calculate if Collision with Cannon   - GAME OVER  

                    If Successful for Level 2 - Call Level Two Function

                    Add Level Two Rules
                        
                */
            } //End of Else If (Arrow Up)

        });
    
    },//end of init
};
app.init();

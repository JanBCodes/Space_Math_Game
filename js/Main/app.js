import MainUI from "./UI.js"

const app =
{
    init() //Level One - Addition 90sec
    {   
        let levelSelected = () =>
        {
            let levelSelected = sessionStorage.getItem("Level")

            if (levelSelected == "Hard")
            {
                return 800;
            }
            else if (levelSelected == "Easy")
            {
                return 1200;
            }
        }
        //!!!!!!!!!!!!!!!!!!PAUSE()!!!!!!!!!!!!!!!!!!!!!!!!
        /* ***** Load Dom Content Loader !!!!!!!!!!!!!!!!!! fix 
        */

// *********************************************************************************************************************************


        let newQuesandAnswer = MainUI.displayQuestionsandAnswer() //returns answer index or sShip index
        console.log(`Correct Ship Slot (index + 1) = ` + `${newQuesandAnswer+1}`);
    
        // MainUI.moveAllSpaceship(0,15) // Ships start Moving
// *********************************************************************************************************************************

      
/*  
        // let mainRect=MainUI.main.getBoundingClientRect()

        // let marginTop=0;
        // const marginTopAdded=15;
          
           MainUI.removeExplosion();
            let cannonRec = MainUI.cannon.getBoundingClientRect();
            let mainRect = MainUI.main.getBoundingClientRect(); 

        //     //console.log(cannonRec.top)
        //     //console.log(mainRect.bottom)

        //     //marginTop+=marginTopAdded;

            if (cannonRec.top <= mainRect.bottom)
            {
                 //Game Over  fix // wrong rec values
                clearInterval(levelOneTimer)
                clearInterval(moveShipTimer)
                MainUI.timeTracker("Game Over!")
            }    
 */

// *********************************************************************************************************************************

        let timerLevelOne = 5;    //fix for Level 2 60sec

        const levelOneTimer = setInterval(()=>{

            MainUI.timeTracker (timerLevelOne )

                if( timerLevelOne <= 0)
                {                
                    // console.log("Enter 0 Time Tracker")
                    MainUI.timeTracker( "Congrats Next Level Awaits!" )
                    clearInterval ( levelOneTimer )//stops timer at 0

                    //start Level Two //Call level 2 function
                }

            timerLevelOne -- ;

        }, 1000);
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
                        - Alien is Expelled if Answer is Correct
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
                            console.log(hits)
                            MainUI.addHits(hits)


                       }
                        else  // Wrong Answer
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

                        MainUI.impact( bulletPosition, missleColumnGrid); //replace bullet with exploding alien [IF CORRECT!] fix

                        setTimeout(() => {
                            MainUI.removeExplosion()
                        }, 150)

                        newQuesandAnswer = MainUI.displayQuestionsandAnswer() 

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

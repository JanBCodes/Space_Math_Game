import MainUI from "./UI.js"

const app=
{
    init()//Level One - Addition 90sec
    {   
        let levelSelected = () =>
        {
            let levelSelected=sessionStorage.getItem("Level")

            if(levelSelected=="Hard")
            {
                return 800;
            }
            else if(levelSelected=="Easy")
            {
                return 1200;
            }
        }
        //!!!!!!!!!!!!!!!!!!PAUSE()!!!!!!!!!!!!!!!!!!!!!!!!
        /* ***** Load Dom Content Loader !!!!!!!!!!!!!!!!!! fix 
        */

    //-----------------------    

        let newQuesandAnswer=MainUI.displayQuestionsandAnswer() //returns answer index or sShip index
        console.log(`Correct Ship = ` + `${newQuesandAnswer+1}`);
    
        //const moveShipTimer=MainUI.moveAllSpaceship(0) // Ships start Moving
    //-----------------------

/*         
        let mainRect=MainUI.main.getBoundingClientRect()

        let marginTop=0;
        const marginTopAdded=15;

          
          
            MainUI.removeExplosion();
            let cannonRec=MainUI.cannon.getBoundingClientRect();
            let mainRect=MainUI.main.getBoundingClientRect(); 

            //console.log(cannonRec.top)
            //console.log(mainRect.bottom)

            //marginTop+=marginTopAdded;

            if(cannonRec.top<=mainRect.bottom)
            {
                 //Game Over  fix // wrong rec values
                clearInterval(levelOneTimer)
                clearInterval(moveShipTimer)
                MainUI.timeTracker("Game Over!")
            }     */    
            


    //-----------------------
        let timerLevelOne=90;    //fix for Level 2 60sec

        const levelOneTimer=setInterval(()=>{

            MainUI.timeTracker(timerLevelOne)

                if(timerLevelOne<=0)
                {                
                    MainUI.timeTracker("Congrats Next Level Awaits!")
                    clearInterval(levelOneTimer)//stops timer at 0
                    clearInterval(moveShipTimer)//stops ships from moving
                    //start Level Two //Call level 2 function
                }

            timerLevelOne--;

        },1000);
    //-----------------------


// --------------------------------------------


        let gridColumnStart = 3; 
        const moveGridColumn = 1;

        document.addEventListener("keydown", event=>{

            if (event.key == "ArrowLeft" && gridColumnStart != 0)
            {
                gridColumnStart -= moveGridColumn;

                MainUI.moveCannon(gridColumnStart);
            }

            else if (event.key == "ArrowRight" && gridColumnStart != 5)
            {
                gridColumnStart += moveGridColumn;
                MainUI.moveCannon(gridColumnStart)
            }

            else if (event.key == "ArrowUp" || event.key==" ")
            {
                let bulletPosition = 20
                
                const missleColumnGrid = gridColumnStart;

                let bulletTimer = setInterval(()=> {

                    let spaceShipBottomRec = MainUI.main.getBoundingClientRect(); //must stay in setInterval to be recalculated with every loop
                    let bulletRec = MainUI.bullet.getBoundingClientRect(); //must stay in setInterval to be recalculated with every loop

                    MainUI.fireCannon(missleColumnGrid, bulletPosition)

                    if (bulletRec.bottom <= spaceShipBottomRec.bottom)
                    {
                        clearInterval(bulletTimer)//stop bullet from travelling past Spaceships(MAIN)

                        MainUI.removeBullet();//make bullet upon collision disappear+
                        
                        MainUI.impact(spaceShipBottomRec.top, missleColumnGrid); //replace bullet with exploding alien [IF CORRECT!] fix



    
                    }





                    //MainUI.removeExplosion();//remove exploded alien  
                        
                    console.log("Bullet Bottom    " + `${bulletRec.bottom}`) // --
                    console.log("spaceShipsContainer     "  +`${spaceShipBottomRec.bottom}`) //++

                    bulletPosition+=75;

                }, 100)

/*  Calculate if collision with Spaceship
        then Remove Bullet
        show Explosion

    If Correct Answer
        Regenerate SShips Positions & New Questions
        Update Hits

    If Wrong Answer
        Regenerate Questions
        Update Misses 
        
    Calculate if Collision with Cannon   - GAME OVER  

    If Successful for Level 2 - Call Level Two Function

    Add Level Two Rules
        
*/
                

            }

        });

            // else if(event.key == "ArrowUp" || event.key==" ")
            // {
            //     let bulletPosition=150;
            //     let centerBullet=MainUI.cannon.getBoundingClientRect();// to set bullet center of cannon

            //     let bulletTimer=setInterval(()=> { 

            //         let mainRect=MainUI.main.getBoundingClientRect();//must stay in setInterval to be recalculated with every loop
            //         let bulletRec=MainUI.bullet.getBoundingClientRect();//must stay in setInterval to be recalculated with every loop
            //         let ship1Rec=MainUI.ship1.getBoundingClientRect()
            //         let ship2Rec=MainUI.ship2.getBoundingClientRect()
            //         let ship3Rec=MainUI.ship3.getBoundingClientRect()
            //         let ship4Rec=MainUI.ship4.getBoundingClientRect()
            //         let ship5Rec=MainUI.ship3.getBoundingClientRect()


            //         MainUI.removeExplosion();//remove exploded alien  
            //         MainUI.fireCannon(bulletPosition,centerBullet.left+10);
                
            //         //console.log("Bullet Bottom" + `${bulletRec.bottom}`)
            //         //console.log(mainRect.bottom)

            //         if(bulletRec.bottom <= mainRect.bottom)// && VALIDATION OF ARRAY CHOSEN fix
            //         {
            //             let miss=0
            //             let hits=0
            //             clearInterval(bulletTimer)//stop bullet from travelling past Spaceships(MAIN)
            //             MainUI.removeBullet();//make bullet upon collision disappear
                        
            //             //MainUI.impact(bulletRec.top,centerBullet.left-10); //replace bullet with exploding alien [IF CORRECT!] fix

            //             //!!_--------------- Validating Answer to cannon to space ship

                    //     for(let i=0; i <= MainUI.allSShips.length; i++)
                    //     {   
                    //         console.log(`Correct Ship = ` + `${NewQuesandAnswer+1}`)
                    
                    //         //let bulletRec=MainUI.bullet.getBoundingClientRect()
                    //         //console.log(MainUI.allSShips.length)
                    //         //console.log(NewQuesandAnswer)
                            
                    //         if(bulletRec.right <= ship1Rec.right && bulletRec.left >= ship1Rec.left && NewQuesandAnswer==`${i}`)
                    //         {
                    //             //new ques & ans plus 
                    //             MainUI.impact(ship1Rec.top,centerBullet.left-10)
                    //             MainUI.allSShips[i].bottom 
                    //             MainUI.addHits(hits+=1)
                    //             // MainUI.moveAllSpaceship()
                    //             MainUI.displayQuestionsandAnswer()
                                
                                
                    //         }
                    //         else if(bulletRec.right<=ship2Rec.right && bulletRec.left>=ship2Rec.left && NewQuesandAnswer==`${i}`)
                    //         {
                    //             MainUI.impact(bulletRec.top,centerBullet.left-10)
                    //             MainUI.removeShip(NewQuesandAnswer)
                                
                    //             MainUI.addHits(hits+=1)
                    //             // MainUI.moveAllSpaceship()
                    //             MainUI.displayQuestionsandAnswer()
                                
                    //         }
                    //         else if(bulletRec.right<=ship3Rec.right && bulletRec.left>=ship3Rec.left && NewQuesandAnswer==`${i}`)
                    //         {
                    //             MainUI.removeShip(NewQuesandAnswer)
                    //             MainUI.impact(bulletRec.top,centerBullet.left-10)
                    //             MainUI.addHits(hits+=1)
                    //             // MainUI.moveAllSpaceship()
                    //             MainUI.displayQuestionsandAnswer()
                                
                    //         }
                    //         else if(bulletRec.right<=ship4Rec.right && bulletRec.left>=ship4Rec.left && NewQuesandAnswer==`${i}`)
                    //         {
                    //             MainUI.removeShip(NewQuesandAnswer)
                    //             MainUI.impact(bulletRec.top,centerBullet.left-10)
                    //             MainUI.addHits(hits+=1)
                    //             // MainUI.moveAllSpaceship()
                    //             MainUI.displayQuestionsandAnswer()
                                
                    //         }
                    //         else if(bulletRec.right<=ship5Rec.right && bulletRec.left>=ship5Rec.left && NewQuesandAnswer==`${i}`)
                    //         {
                    //             MainUI.removeShip(NewQuesandAnswer)
                    //             MainUI.impact(bulletRec.top,centerBullet.left-10)
                    //             MainUI.addHits(hits+=1)
                    //             // MainUI.moveAllSpaceship()
                    //             MainUI.displayQuestionsandAnswer()
                    //         }
                    //         // else
                    //         // {
                    //         //     MainUI.displayQuestionsandAnswer()
                    //         //     MainUI.addMissed(miss+=1)
                    //         // }
                            

                    //     }//end of for loop

                    // } //end of If 

            //         bulletPosition+=50;
            // // },20) // end of Bullet Timer 


            // }//end of else if/ ArrowUp Keycode
        // });//end of keydown event handler     
    },//end of init
};
app.init();

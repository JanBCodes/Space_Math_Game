import MainUI from "./UI.js"

const app=
{
    init()//Level One - Addition 90sec
    {   
        function levelSelected()
        {
            let levelSelected=sessionStorage.getItem("Level")

            if(levelSelected=="Hard")
            {
                return 400;
            }
            else if(levelSelected=="Easy")
            {
                return 800;
            }
        }

                //!!!!!!!!!!!!!!!!!!PAUSE()!!!!!!!!!!!!!!!!!!!!!!!!
        /* ***** Load Dom Content Loader !!!!!!!!!!!!!!!!!!
        */


    //-----------------------    

        let NewQuesandAnswer=MainUI.displayQuestionsandAnswer() //returns answer index or sShip index

        //-----------------------
        let marginTop=0;
        const marginTopAdded=20;

        const interalRef= setInterval(()=>{
           
            marginTop+=marginTopAdded;

            MainUI.moveAllSpaceship(marginTop);

                if(rectValues.cannonRec.top > rectValues.ship1Rec.bottom) //Game Over
                {
                    clearInterval(levelOneTimer)
                    clearInterval(interalRef)
                }

        },levelSelected());

    //-----------------------
        let timerLevelOne=10;    //fix

        const levelOneTimer=setInterval(()=>{

            MainUI.timeTracker(timerLevelOne)

                if(timerLevelOne<=0)
                {                
                    MainUI.timeTracker("Congrats Next Level Awaits!")
                    clearInterval(levelOneTimer)
                    clearInterval(interalRef)
                    //start Level Two
                }

            timerLevelOne--;

        },1000);
    //-----------------------
        let cannonMarginStart=0;
        const cannonMarginMoveBy=50;
               
        document.addEventListener("keydown", event=>{

            if(cannonMarginStart<=0 ) //!!!!!!FIX ME
            {
                cannonMarginStart=0;
            }
            else if(cannonMarginStart>=900)
            {
                cannonMarginStart=875;
            }

            if (event.key=="ArrowLeft")
            {
                cannonMarginStart-=cannonMarginMoveBy;
                MainUI.movecannon(cannonMarginStart);
            }
            else if(event.key=="ArrowRight")
            {
                cannonMarginStart+=cannonMarginMoveBy;
                MainUI.movecannon(cannonMarginStart)
            }

else if(event.key=="ArrowUp" || event.key==" ")
{
    //add time to timer? !! fix
    
const rectValues={

    bulletRec :MainUI.bullet.getBoundingClientRect(),
    cannonRec :MainUI.cannon.getBoundingClientRect(),
    mainRect  :MainUI.main.getBoundingClientRect(),
    ship1Rec  :MainUI.ship1.getBoundingClientRect(),
    ship2Rec  :MainUI.ship2.getBoundingClientRect(),
    ship3Rec  :MainUI.ship3.getBoundingClientRect(),
    ship4Rec  :MainUI.ship4.getBoundingClientRect(),
    ship5Rec  :MainUI.ship3.getBoundingClientRect()

}

    let bulletPosition=150  
    let centerBullet=rectValues.cannonRec.left ;// to set bullet center of cannon
    
    const bulletTimer=setInterval(()=> { //This controls the firing of the bullet
       
        MainUI.firecannon(bulletPosition,centerBullet)
        //MainUI.removeImpact()//remove exploded alien
        bulletPosition+=50;
        //console.log(centerBullet)

        if(rectValues.bulletRec.bottom>rectValues.ship1Rec.bottom) // What happens when the bullet and ship collide
        {
            console.log(`Inside IF`)
        
            //MainUI.removebullet()
            //MainUI.firecannon(bulletPosition,centerBullet)
            clearInterval(bulletTimer)//stop bullet time/from moving
            MainUI.removebullet()//bullet disappears
            
            MainUI.impact(rectValues.ship1Rec.top, centerBullet-10)
            clearInterval(interalRef)//stop sships moving only if wrong!! fix
            
            console.log(rectValues.bulletRec.y)
            console.log(rectValues.ship1Rec.bottom)
            console.log(rectValues.mainRect.right)
            
        }

},50);



//!!_--------------- Validating Answer to cannon to space ship
    //let NewQuesandAnswer=(MainUI.displayQuestionsandAnswer()) //returns answer index or sShip index
    //console.log(`"Correct Answer Index" + ${NewQuesandAnswer}`)
/*
for(let i=0; i<5; i++)
{
    if (rectValues.bulletRec.x)// bullet range == element range 
    {

    }
} 

    if(MainUI.ship1==(NewQuesandAnswer))
    {
        MainUI.ship2.style.backgroundImage=`none`
        MainUI.impact(rectValues.bulletRec.top)
        MainUI.removeImpact()
        console.log(NewQuesandAnswer)
    }
    else if(MainUI.cannon.innerHTML!=NewQuesandAnswer)
    {
        MainUI.impact(rectValues.bulletRec.top)
        MainUI.removeImpact()
    }
*/
    //setTimeout(clearInterval(bulletTimer),5000)


               }//end of else if/ ArrowUp Keycode
        });//end of keydown event handler     
    },//end of init
};
app.init();



/*      console.log(rectValues.ship1Rec)
        console.log(rectValues.ship1Rec)
        console.log(rectValues.ship2Rec)
        console.log(rectValues.ship3Rec)
        console.log(rectValues.cannonRec)
        console.log(rectValues.bulletRec)
*/
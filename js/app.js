import MainUI from "./UI.js"


const app=
{
    init()//Level One - Addition 90sec
    {   
        //!!!!!!!!!!!!!!!!!!PAUSE()!!!!!!!!!!!!!!!!!!!!!!!!

        const time=800;
        /* ***** Load Dom Content Loader !!!!!!!!!!!!!!!!!!
        /* *****Selected from Front Page !!!!!!!!!!!!!!!!
        if(levelSelected=="Hard")
        {
            time=500;
        }
        else
        {
            time=800;
        }
        */

    //-----------------------    

        MainUI.displayQuestionsandAnswer()

        //-----------------------
        let marginTop=0;
        const marginTopAdded=1;

        const interalRef= setInterval(()=>{
           
            marginTop+=marginTopAdded;

            MainUI.moveAllSpaceship(marginTop);

            const shooterRect=MainUI.shooter.getBoundingClientRect();
            const allShipsRect=MainUI.ship1.getBoundingClientRect();

            if(shooterRect.top > allShipsRect.bottom)
            {
                clearInterval(levelOneTimer)
                clearInterval(interalRef)
            }

        },time);

    //-----------------------
        let timerLevelOne=10;    
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
        let shooterMarginStart=0;
        const shooterMarginMoveBy=50;
               
        document.addEventListener("keydown", event=>{

            if(shooterMarginStart<=50)
            {
                shooterMarginStart=50;
            }
            else if(shooterMarginStart>=900)
            {
                shooterMarginStart=850;
            }

            if (event.key=="ArrowLeft")
            {
                shooterMarginStart-=shooterMarginMoveBy;
                MainUI.moveShooter(shooterMarginStart);
            }
            else if(event.key=="ArrowRight")
            {
                shooterMarginStart+=shooterMarginMoveBy;
                MainUI.moveShooter(shooterMarginStart)
            }
            else if(event.key=="ArrowUp" || event.key==" ")
            {
                setInterval(()=> {
                
                    MainUI.fireShooter();

                },500)

                MainUI.fireShooter();
            }
        });

        
    },//end of init

};
app.init();


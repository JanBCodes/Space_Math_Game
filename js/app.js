import MainUI from "./UI.js"
//import Question from "./Dao.js";
import levelOneQuestion from "./Blo.js"

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
        let marginTop=0;

        let firstNum=levelOneQuestion.randomFirstNum;
        let secondNum=levelOneQuestion.randomSecondNum;
        let correctAns=(firstNum+secondNum)

        MainUI.displayQuestions()

        MainUI.displayAnswer(correctAns)


        const interalRef= setInterval(function(){
           
            marginTop+=10;

            MainUI.moveAllSpaceship(marginTop);

        },time);

    //-----------------------
        let timerLevelOne=90;    
        const levelOneTimer=setInterval(function(){

            MainUI.timeTracker(timerLevelOne)

            if(timerLevelOne<=0)
            {                
                MainUI.timeTracker("Congrats Next Level Awaits!")
                clearInterval(levelOneTimer)
                clearInterval(interalRef)
            }

            timerLevelOne--;

        },1000);
    //-----------------------
        let shooterMarginStart=0;
        let shooterMarginMoveBy=50;
               
        document.addEventListener("keydown", function(event){

            console.log(event.key)

            if (event.key=="ArrowLeft")
            {
                shooterMarginStart-=shooterMarginMoveBy;
                MainUI.moveShooter(shooterMarginStart)
            }
            else if(event.key=="ArrowRight")
            {
                shooterMarginStart+=shooterMarginMoveBy;
                MainUI.moveShooter(shooterMarginStart)
            }
            else if(event.key=="ArrowUp" || event.key==" ")
            {
                MainUI.fireShooter()
            }
        });
    },//end of init

};
app.init();


import { state } from "./state.js";
import { alarm } from "./alarm.js";
import {addZero} from "./util.js";
import { changeActiveBtn } from "./controler.js";

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

/*const addZero = (n) =>{
    if(n<10){
        return '0'+n;
    }
    return n;
}*/

export const showTime = (seconds) =>{
    minutesElem.textContent = addZero(Math.floor(seconds /60));
    secondsElem.textContent = addZero(seconds % 60);
};


export const startTimer = () =>{
    state.timeLeft -= 5;
    //console.log('.timeLeft:', state.timeLeft);
    showTime(state.timeLeft);
    //console.log(showTime);

    if(state.timeLeft > 0 && state.isActive){        
        state.timerId = setTimeout(startTimer,1000);
        
    }
    if(state.timeLeft <= 0){
        alarm();

        if(state.status === 'work'){
        console.log(state.activeTodo);
            state.activeTodo.pomodoro +=1;
            
            if(state.activeTodo.pomodoro % state.count)
            {
                state.status = 'break';
            }else{
                    state.status = 'relax';
                }
            
        }else{          
            state.status = 'work';
        }
        state.timeLeft= state[state.status]*60;
        changeActiveBtn(state.status); 
        //console.log(state.activeTodo);
        startTimer();
        
    }
};
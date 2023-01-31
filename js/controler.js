import { state } from "./state.js";
import { startTimer } from "./timer.js";


const btnStart = document.querySelector('.control__btn_start');

export const initControl = () =>{
    btnStart.addEventListener(
    'cick',
    () =>{
       // console.log('нажали старт');
        if(state.isActive){
                clearTimeout(state.timerId);
                state.isActive = false;
                btnStart.textContent='старт';
                
        }else{
                state.isActive = true;
                btnStart.textContent = "пауза";
                startTimer();
        }
        
        }
    );
};



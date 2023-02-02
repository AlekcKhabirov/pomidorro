import { state } from "./state.js";
import {showTime, startTimer } from "./timer.js";

const btnStart = document.querySelector('.control__btn_start');
const btnStop = document.querySelector('.control__btn_stop');
const navigationBtns = document.querySelectorAll('.navigation__btn');
//console.log('navigationBtns:',navigationBtns);
export const changeActiveBtn = (dataUse) =>{
        //const btn = document.querySelector(`[data-use ="${dataUse}] `);
        //console.log('btn:',btn);
        state.status=dataUse;
        

        for(let i=0;i<navigationBtns.length;i++){
                if(navigationBtns[i].dataset.use ===dataUse){
                        navigationBtns[i].classList.add('navigation__btn_active');
                } else{
                        navigationBtns[i].classList.remove('navigation__btn_active');
                }                
        }        
};

const stop = ()=>{
        clearTimeout(state.timerId);
        state.isActive = false;
        btnStart.textContent='старт';
        state.timeLeft= state[state.status]*60;
        showTime(state.timeLeft);
};

export const initControl = () =>{
        btnStart.addEventListener(
        'click',
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

        btnStop.addEventListener('click',stop);

        for(let i=0;i < navigationBtns.length;i++){
                navigationBtns[i].addEventListener('click',()=>{
                        changeActiveBtn(navigationBtns[i].dataset.use);
                        stop();
                }
                );
        }

        showTime(state.timeLeft);
};




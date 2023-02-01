import { initControl } from "./controler.js";
import { state } from "./state.js";

const initPomodoro = () =>{
    initControl();

    state.activeTodo = {
        id:'default',
        pomodoro:2,
        title:'test',
    };
};

initPomodoro();
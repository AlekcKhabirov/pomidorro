const WORK_TIME=3;
const WORK_BREAK =1;
const WORK_RELAX =2;

export const state ={
    work:WORK_TIME,
    break:WORK_BREAK,
    relax:WORK_RELAX,
    status: 'work',
    count: 4,
    timeLeft: WORK_TIME*60,
    isActive: false,
    timerId: 0,
};



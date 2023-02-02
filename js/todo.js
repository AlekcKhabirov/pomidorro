import { state } from "./state.js";

const titleElem =document.querySelector('.title');
const countNumElem = document.querySelector('.count_num');
const todoListElem = document.querySelector('.todo__list');

const li =document.createElement('li');
li.classList.add('todo__item');

const todoAddBtn =document.createElement('button');
todoAddBtn.classList.add('todo__add');
todoAddBtn.textContent = 'Добавить новую задачу';
li.append(todoAddBtn);
/* <li class="todo__item">
        <button class="todo__add">Добавить новую задачу</button>
        </li>
        */

const getTodo =() =>{
    const todoList=JSON.parse(localStorage.getItem('pomodoro') || '[]');

    if( !todoList.length){
        todoList.push({
            id:'default',
            pomodoro:0,
            title:'test',
        });
    }
    return todoList;
};

const addTodo = (title) =>{
    const todo = {
        title,
        pomodoro: 0,
        id: Math.random().toString(16).substring(2,8),
    };
};

const renderTodoList = (list) =>{
    todoListElem.textContent = '';

    list.forEach((todo) =>{
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo__item');

        const todoItemWrapper = document.createElement('div');
        todoItemWrapper.classList.add('todo__item-wrapper');
        todoItem.append(todoItemWrapper);

        const todoBtn = document.createElement('button');
        todoBtn.classList.add('todo__btn ');
        todoBtn.textContent = todo.title;

        const editBtn = document.createElement('button');
        editBtn.classList.add('todo__edit ');
        editBtn.ariaLabel= 'Редактировать задачу';

        const delBtn = document.createElement('button');
        delBtn.classList.add('todo__del ');
        delBtn.ariaLabel = 'Удалить задачу';

        todoItemWrapper.append(todoBtn, editBtn, delBtn);

        todoListElem.prepend(todoItem);
    });
    todoListElem.append(li);
};
/*  <div class="todo__item-wrapper">
            <button class="todo__btn">Написать Pomodoro</button>
            <button class="todo__edit" aria-label="Редактировать"></button>
            <button class="todo__del" aria-label="Удалить"></button>
          </div>
        </li>*/

const showTodo = () =>{
    titleElem.textContent = state.activeTodo.title;
    countNumElem.textContent = state.activeTodo.countNum;
};
export const initTodo = () =>{
    const todoList=getTodo();
    state.activeTodo = todoList[0];
    showTodo();

    renderTodoList(todoList);
    //console.log('todoList:',todoList);

    todoAddBtn.addEventListener('click',()=>
    {
        const title = prompt('введите новую задачу');
        const todo = addTodo(title); 
    }
    );
};
import { state } from "./state.js";

const titleElem =document.querySelector('.title');
const countNumElem = document.querySelector('.count_num');
const todoListElem = document.querySelector('.todo__list');

const getTodo =() =>JSON.parse(localStorage.getItem('pomodoro')||'[]');
       
/*const getTodo =() =>{
    const todoList=JSON.parse(localStorage.getItem('pomodoro') || '[]');

    if( !todoList.length){
        todoList.push({
            id:'default',
            pomodoro:0,
            title:'test',
        });
    }
    return todoList;
};*/

const addTodo = (title) =>{
    const todo = {
        title,
        pomodoro: 0,
        id: Math.random().toString(16).substring(2,8),
    };
    const todoList = getTodo();
    todoList.push(todo);

    localStorage.setItem('pomodoro', JSON.stringify(todoList));
    return todo;
};

const createTodoListItem = (todo) =>{
    if(todo.id!=='default'){
        const todoItem=document.createElement('li');
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

        todoBtn.addEventListener('click',() =>{});
        editBtn.addEventListener('click',() =>{});
        delBtn.addEventListener('click',() =>{});
    }
};





   /* list.forEach((todo) =>{
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

        todoBtn.addEventListener('click',() =>{});
        editBtn.addEventListener('click',() =>{});
        delBtn.addEventListener('click',() =>{});
    });
    todoListElem.append(li);
};*/

const renderTodoList = (list) =>{
    todoListElem.textContent = '';

    list.forEach(createTodoListItem);
   // todoListElem.append(li);
};

const showTodo = () =>{
    titleElem.textContent = state.activeTodo.title;
    countNumElem.textContent = state.activeTodo.countNum;
};

const createBtnAddTodo =() =>{
    const li =document.createElement('li');
    li.classList.add('todo__item');

    const todoAddBtn =document.createElement('button');
    todoAddBtn.classList.add('todo__add');
    todoAddBtn.textContent = 'Добавить новую задачу';
    li.append(todoAddBtn);

    todoAddBtn.addEventListener('click',()=>
        {
            const title = prompt('введите новую задачу','задача');
            if(title)
            {
                const todo = addTodo(title);
                createTodoListItem(todo); 
            }else{
                alert('введите задачу в поле ввода');
            }
        }
        );
    return li;
};

export const initTodo = () =>{
    const todoList=getTodo();

    if(!todoList.length){
        state.activeTodo=[{
            id:'default',
            pomodoro: 0,
            title:'помидорка'
        },];
    }else{
        state.activeTodo = todoList[todoList.length -1];
    }
    
    showTodo();

    renderTodoList(todoList);
    //console.log('todoList:',todoList);
    const listItemBtnAddTodo =createBtnAddTodo();

    todoListElem.append(listItemBtnAddTodo);

    /*todoAddBtn.addEventListener('click',()=>
    {
        const title = prompt('введите новую задачу','задача')?.trim();
        if(title)
        {
            const todo = addTodo(title);
            createTodoListItem(todo); 
        }else{
            alert('введите задачу в поле ввода');
        }
    }
    );*/
};
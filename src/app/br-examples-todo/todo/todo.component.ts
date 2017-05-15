import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTodo: string;
  todos: any;
  todoObj: any;
//dsadas

  constructor() {
    this.newTodo='';
    this.todos = []; // TESTE INTEGRAçÃO
    
   }

   addTodo(event) {
     this.todoObj= {
       newTodo: this.newTodo,
       completed: false
     }
   
   this.todos.push(this.todoObj);
   this.newTodo='';
   event.preventDefault();
  }
  deleteTodo(index){
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos(){
    for(var i=(this.todos.lenght -1);i>-1;i--){
      if(this.todos[i].completed){
        this.todos.splice(i,1);
      }
    }
  }


  ngOnInit() {
  }

}

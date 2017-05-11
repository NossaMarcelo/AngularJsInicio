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


  constructor() {
    this.newTodo='';
    this.todos = [];
    
   }

  ngOnInit() {
  }

}

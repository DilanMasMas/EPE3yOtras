import { Component, OnInit } from '@angular/core';
import { escribirD } from '../models/escribir.interface';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
todos: escribirD[];
  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res =>  this.todos = res);
  }

}

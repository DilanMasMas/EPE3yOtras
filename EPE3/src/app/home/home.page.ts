import { Component, OnInit } from '@angular/core';
import { escribirD } from '../models/escribir.interface';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todo: escribirD = {
    escribir: '',
    priority: ''
  };
  todoId = null;
  todos = null;

 
  constructor(private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.todos = res);
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    //nos muestra el cargando
    await loading.present();

    if (this.todoId) {
      //se actualiza
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        //se ocualta el cargando
        loading.dismiss();
        //redireccionar a usuario
        this.nav.navigateForward('/');
        this.todo.escribir=" ";
        this.todo.priority=" ";

      });
    } else {
      //se añade uno nuevo
      this.todoService.addTodo(this.todo).then(() => {
        //se ocualta el cargando
        loading.dismiss();
        //redireccionar a usuario
        this.nav.navigateForward('/');
        this.todo.escribir=" ";
        this.todo.priority=" ";
      });
    }
  }
  onRemove(idTodo: string) {
    this.todoService.removeTodo(idTodo);;
  }
}
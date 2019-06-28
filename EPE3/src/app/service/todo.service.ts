import { Injectable } from '@angular/core';
//importa conexion a firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { escribirD } from '../models/escribir.interface';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<escribirD>;
  //almacenar todas las tareas en un array
  private todos: Observable<escribirD[]>;

  constructor(db:AngularFirestore) {
    //tabla
    this.todosCollection = db.collection<escribirD>('todos');
    //carga los datos de "todo"
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      Actions =>{
        return Actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{ id, ...data};
        });
      }
    ));
   }

getTodos() {
  return this.todos;
}
//devuelve un objeto de documento
getTodo(id: string){
  return this.todosCollection.doc<escribirD>(id).valueChanges();
}
//actualiza toda la tarea que recibe como parametro "Todo"
updateTodo(todo:escribirD, id:string){
  return this.todosCollection.doc(id).update(todo);
}
addTodo(Todo:escribirD){
return this.todosCollection.add(Todo);
}
removeTodo(id:string){
  return this.todosCollection.doc(id).delete();
}

}
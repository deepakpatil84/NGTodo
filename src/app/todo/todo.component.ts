import { Component,ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, ITodo } from '../state-management/store';
import { RemoveTodo, EditTodo } from '../state-management/actions'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  
  @Input()
  todo: ITodo;

  constructor(private store: Store<State>){}

  remove(){
    this.store.dispatch(new RemoveTodo(this.todo.id));
  }
  edit(){
    this.store.dispatch(new EditTodo({id: this.todo.id,text: 'Edited '+Math.random()}));
  }
}


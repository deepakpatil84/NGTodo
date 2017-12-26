import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, ITodo } from './state-management/store';
import { AddTodo, RemoveTodo, EditTodo } from './state-management/actions'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
  todos$: Observable<ITodo[]>;

  constructor(private store: Store<State>){
      this.todos$ = store.select('todos');      
  }

  addTodo(){
    this.store.dispatch(new AddTodo('test' + Math.random()))
  }
}


import { Action } from '@ngrx/store';
import { ITodo } from './store';

export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  FETCH_TODOS: 'FETCH_TODOS',
  UPDATE_TODO: 'UPDATE_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
};

export class AddTodo implements Action {
  type = ActionTypes.ADD_TODO;
  constructor(public payload: string){}
}


export class EditTodo implements Action {
  type = ActionTypes.UPDATE_TODO
  constructor(public payload: ITodo){}
}

export class RemoveTodo implements Action {
  type = ActionTypes.REMOVE_TODO
  constructor(public payload: number){}
}
export type Actions =
  AddTodo | EditTodo | RemoveTodo
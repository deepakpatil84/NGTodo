import { ActionReducer, Action } from '@ngrx/store';
import { ActionTypes, Actions, AddTodo, EditTodo, RemoveTodo } from './actions'
import { State, intitialState, ITodo } from './store'

export default (state = intitialState, action: Actions): State => {
    switch (action.type) {
      case ActionTypes.ADD_TODO: {
        action = <AddTodo>action;
        return { todos: [...state.todos, { id: Math.random(), text: action.payload }] }
      }
      case ActionTypes.UPDATE_TODO: {
        let toUpdate = (<EditTodo>action).payload;
        return {
          todos: state.todos.map((todo: ITodo) => {
            if (todo.id === toUpdate.id) {
              return {
                id: todo.id,
                text: toUpdate.text
              };
            } else {
              return todo;
            }
          })
        }
      }
      case ActionTypes.REMOVE_TODO: {
        action = <RemoveTodo>action;
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        }
      }
    }
    return state;
  }

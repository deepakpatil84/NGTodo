export interface ITodo{
  id: number,
  text: string
}
  
export interface State {
  todos:ITodo[]
};

export const intitialState: State = {
    todos:[{id:123,text:'34343'}]
};
import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', [], todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

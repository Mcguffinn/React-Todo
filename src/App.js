import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    task: "clean room",
    id: 1,
    done: false
  },
  {
    task: "finish code",
    id: 265465,
    done: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: list,
      done: false
    };
  }

  add = x =>{
    // x.preventDefault();
    const newList = {task: x, id:Date.now(), done: false}
    this.setState({
      todoList: [...this.state.todoList, newList]
    })
  }

  toggleClear = x =>{
    this.setState({
      todoList: this.state.todoList.map(data =>{
        if (data.x === x) {
          return{
            ...data,
            done: !data.done
          };
        }
          else{
            return data;
          }
      })
    })
  }

  clear = () =>{
    this.setState({
      todoList: this.state.todoList.filter(data => !data.done)
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          list={this.state.todoList}
          toggleClear={this.toggleClear}
        />
        <TodoForm
          add ={this.add}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;

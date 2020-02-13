import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newList: ''
        };
    }

    handleChanges = e => {
        this.setState({
            newList: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.add(this.state.newList);
        this.setState({
            newList: ''
        })
    }
    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChanges}
                type="text"
                name="todo"
                id="todo"
                value={this.state.newList}
                placeholder="...todo"
              />
              <button>Add Todo</button>
            </form>
            <button onClick={this.props.clear}>Clear finished Tasks</button>

        </div>
            
        );
    };
    

}

  

export default TodoForm;
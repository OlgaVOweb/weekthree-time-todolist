import { Component } from "react";
import plus from './plus.png'

export class Todolist extends Component {
    state = {
        userText: "",
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userText: e})
    }
   
    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        } else {
        let listTodo = this.state.todoList;
        listTodo.push(input);
        this.setState({todoList: listTodo, userText: ''})
    }
    }

    deleteItem() {
        let listTodo = this.state.todoList;
        listTodo.length = 0;
        this.setState({todoList: listTodo})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What do you want to do today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userText} />
            </div>
            <div className="container">
            <button onClick={() => this.addItem(this.state.userText)} className="btn add">ADD</button>
            </div>
            <ul>
                {this.state.todoList.map((item, i) => (
                    <li onClick={this.crossedWord} key={i}>
                        <img className="mini" src={plus} width="20px" alt="plus"/>
                        {item}</li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className="btn del">DELL</button>
            </div>
            </form>
            </div>
        )
    }
}
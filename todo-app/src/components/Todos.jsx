import React from 'react';
import AddTodo from './AddTodo';
import Todo
 from './Todo';



 

export default class Todos extends React.Component{
    state={
        todos:
        localStorage.getItem("todos") ?
        JSON.parse(localStorage.getItem("todos")):
        []
    }

    addNewToDo=(todoValue)=>{
        if(todoValue){
            const todos=[...this.state.todos];
            todos.push({
                id: new Date().getTime(),
                value:todoValue,
                isDone:false
            })
            this.updateState(todos);
        }
    }

    onDelete=(todoId)=>{
        const todos=this.state.todos.filter(item=>
            item.id!=todoId);

            this.updateState(todos);
    }

    handleDone=(todoId)=>{
       const todos=[...this.state.todos];
       todos.map(item=>{
            if(item.id==todoId){
                item.isDone=!item.isDone;
            }
            return item;
       });
       this.updateState(todos);   
    }

    updateState(todos){
        this.setState({todos});
       localStorage.setItem("todos",JSON.stringify(todos));
    }

    render(){
        return(
            <div>
                <h1>Todos App</h1>
                {
                    this.state.todos?.length==0?
                    <h1>No todos are present</h1>
                    :
                    this.state.todos.map((item,index)=>{
                        return <Todo key={index}  
                        index={index+1}
                        todo={item}
                        onDelete={this.onDelete}
                        handleDone={this.handleDone}
                        ></Todo>
                    })
                }
                <AddTodo addTodo={this.addNewToDo}></AddTodo>
            </div>

        );
    }
}

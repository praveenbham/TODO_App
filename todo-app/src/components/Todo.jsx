
import React from "react"

export default class Todo extends React.Component{

    onDelete=()=>{
        this.props.onDelete(this.props.todo.id);
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                       {this.props.index} 
                    </div>
                    <div className="col-md-1">
                        <input type="checkbox"
                        checked={this.props.todo.isDone}
                        onChange={()=>this.props.handleDone(this.props.todo.id)}
                        />
                    </div>
                    <div className="col-md-6" 
                    style={
                        {textDecoration: this.props.todo.isDone?'line-through':''}
                    }>
                        {this.props.todo.value}
                    </div>
                    <div className="col-md-4">
                        <button 
                        onClick={this.onDelete}
                        className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}
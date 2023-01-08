import React from 'react'


export default class AddTodo extends React.Component{
    state={
        value:''
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value:''});
    }

    onChange=(event)=>{
        this.setState({value:event.target.value});
    }

    render(){
        return (
            <div className='container'>
                <form onSubmit={this.onSubmit}>
                    <div className='mb-3'>
                        <input id="input" type="text" 
                        className='form-control'
                        value={this.state.value}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Add todos</button>
                </form>
            </div>

        )
    }
}
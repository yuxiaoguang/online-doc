import React from 'react';

class MyComponent extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.refs['Input_ref'].focus();
    }
    render(){
        return(
            <section>
                <input name='email' value='' ref='Input_ref'/>
                <button onClick={this.handleClick}>点我，输入框获取焦点</button>
                <br/>
                <br/>
                <br/>
            </section>
        )
    }
}

export default MyComponent;

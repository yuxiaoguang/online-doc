import React from 'react';
class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h2>{this.props.message}</h2>
        );
    }

}
class Togger extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggerSwitch: false, isAdvance: 'Advance', name: '我被关闭了~'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(previousState){
        this.setState({
            toggerSwitch: !this.state.toggerSwitch,
            name: !this.state.toggerSwitch ? '重新打开了' : '我被关闭了~'
        })
    }
    render(){
        return (
            <div>
                [{this.state.toggerSwitch.toString()}]
                <button onClick={this.handleClick}>
                    {this.state.toggerSwitch ? 'ON' : 'OFF'}
                </button>
                <hr/>
                <Content message={this.state.name}/>
            </div>
        )
    }
}

export default Togger;

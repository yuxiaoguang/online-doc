import React from "react";
import PropTypes from "prop-types";

function FormattedDate(props) {
    return <h2>
        Now is FormattedDate： {props.date.toLocaleTimeString()}
        <small> {props.name}</small>
        <br/>
        <small> {props.age}</small>
        <hr/>
       性别： {props.sex}
        <hr/>
        {props.sex}
    </h2>
}

let sex = '123';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.timeID = setInterval(() => this.tick(), 1000);
    }
    tick(){
        this.setState({date: new Date()});
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render(){
        FormattedDate.defaultProps = {
            name: 'I am name',
            age: 22,
            // user: {name: 'zz', age: 28}
        }
        FormattedDate.propTypes = {
            sex: PropTypes.string,
            user: PropTypes.object
        }
        return (
            <section>
                <h1> I have becomed a timer component.</h1>
                <h1> I am an another timer clock.</h1>
                <FormattedDate date={this.state.date} name='我是名字' sex={sex}/>
            </section>
        )
    }
}

export default Timer;

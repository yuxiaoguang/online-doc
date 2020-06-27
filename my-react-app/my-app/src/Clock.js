import React from 'react';
export default function Clock(props) {
    const element =
        <div>
            <h1>I have becomed a Clock component, too~</h1>
            <h1>Hello World!World!World!</h1>
            <h2>现在是：{props.date.toLocaleTimeString()}</h2>
            {props.user}
        </div>
    return element;
}

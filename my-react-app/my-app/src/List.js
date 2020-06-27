import React from 'react';
class List extends React.Component{
    render(){
        const names = Array.of('zhangsan', 'lisi', 'wangwu');
        return(
            <ul>
                {
                    names.map(name => <li key={name.toString()}>{name}</li>)
                }
            </ul>
        )
    }
}
export default List;

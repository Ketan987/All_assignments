import React from 'react';
import Third from './third';
import UserContext from './UserContext';

class Second extends React.Component {
    static contextType = UserContext

    render(){
        return(
        <div>
            Componenet E context {this.context}
            <Third />
        </div>
        )
    }
}

export default Second;
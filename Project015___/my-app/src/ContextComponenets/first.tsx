import React from 'react';
import Second from './second';
import {UserProvider} from './UserContext';

class First extends React.Component {
    render() {
        return(
        <div>
            <UserProvider value = "ketan">
                <Second />
            </UserProvider>
        </div>
        )
    }
}

export default First;
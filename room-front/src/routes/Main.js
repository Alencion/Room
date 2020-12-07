import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import Room from './Room'
import Home from './Home'
import Header from '../components/Header'

const Main = (props) => {
    const [user, setUser] = useState(null);
    const loading = true;

    useEffect(() => {
      axios.post('/user/info').then(response => {
        setUser(response.data);
      })
    }, []);

    return (
        <div className="main">
            <Header user={user}/>
            <Route path="/" exact render={() => <Home user={user}/>}/>
            <Route path="/room" component={Room} />
        </div>
    );

}

export default Main;
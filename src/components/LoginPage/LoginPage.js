import React from 'react';

const LoginPage = () => {
    const handleFromSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    return (
        <div>
            <form>
                <h2>Music Drone</h2>
                <input type="text" placeholder="Login"/><br/>
                <input type="password" placeholder="Password"/><br/>
                <input type="submit" value="Login" onClick={handleFromSubmit}/>
            </form>
        </div>
    );
};

export default LoginPage;
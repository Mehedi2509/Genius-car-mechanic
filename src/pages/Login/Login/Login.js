import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setUser } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
            })
    }
    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-warning mt-5">Google Sign In</button>
        </div>
    );
};

export default Login;
import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
    };


    return (

        <div className="flex justify-center items-center mt-10">
            <form onSubmit={handleLogin} className="w-full max-w-md bg-white shadow-2xl rounded px-8 py-6">
                <h2 className="text-2xl font-medium mb-4">Giriş</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Kullanıcı Adı
                    </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Şifre
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex items-center justify-between mt-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Giriş Yap
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Login
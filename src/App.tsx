import { useState } from 'react'

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
              username,
              password,
              expiresInMins: 30,
            }),
        });
      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
      } else {
        setMessage(data.error || 'Login failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {message && <p className="mb-4 text-red-500">{message}</p>}
        <form action="" className="bg-gray-200 p-3">
          <h1 className="m-2 text-3xl font-bold">Login</h1>
          Username: <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        className="my-1" 
                        name="username" 
                        placeholder='Username'
                        required/>
          <br />
          Password: <input type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="my-1"
                            name="password"
                            placeholder='Password'
                            required/>
          <br />
          <button 
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-green-700 text-white border-b-emerald-950 p-3 mt-2 rounded-md">
                  Login
          </button>
        </form>
      </div>
    </>
  )
}

export default App

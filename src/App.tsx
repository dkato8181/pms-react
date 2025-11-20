function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form action="" className="bg-gray-200 p-3">
          <h1 className="m-2 text-3xl font-bold">Login</h1>
          Email: <input type="email" className="my-1" name="email" placeholder='Email'/>
          <br />
          Password: <input type="password" className="my-1" name="password" placeholder='Password'/>
          <br />
          <button type="submit" className="bg-green-700 text-white border-b-emerald-950 p-3 mt-2 rounded-md">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App

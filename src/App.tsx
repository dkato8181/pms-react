function App() {

  return (
    <>
      <h1 className="m-2 text-3xl font-bold">Login</h1>
      <form action="">
        <input type="email" name="email" placeholder='Email'/>
        <br />
        <input type="password" name="password" placeholder='Password'/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App

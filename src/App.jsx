
import './App.css'

function App() {


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const User = { name, email };
    console.log(User);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(User)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          alert('user added successful')
          form.reset()
        }
      })

  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Ad User" />
      </form>
    </>
  )
}

export default App

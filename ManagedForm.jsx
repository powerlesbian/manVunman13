'use strict';

function ManagedForm() {
  /* 1. Your React.useState code goes here */


  const [name, setName] = React.useState('');


  /* 2. Update this function */
  function updateName() {}

  function handleSubmit(event) {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <input type="submit" value="Submit" />
 } />
        <button>Submit</button>
      </form>
      <p>My name is {name}</p>
    </>
  );
}

ReactDOM.render(<ManagedForm />, document.getElementById('ManagedForm'));

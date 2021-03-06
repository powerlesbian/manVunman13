'use strict';

function UnmanagedForm() {
  function submitForm(event) {

    /* 3. You code goes here */
/*ifrom instructions: Add an id to the input element
Have the form call the submitForm function on submit
Set the innerHTML of the element with the id name-span to the value of the input element*/
let name = document.getElementById('name').value;
document.getElementById('name-span').innerHTML = name;
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <label>Name: </label>
        <input type="text" id="name" />
        <button>Submit</button>
      </form>
      <p>
        My name is <span id="name-span"></span>
      </p>
    </>
  );
}

ReactDOM.render(<UnmanagedForm />, document.getElementById('UnmanagedForm'));

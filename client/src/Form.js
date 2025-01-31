import React, {useState} from "react";
import Boxes from "./Boxes";

var data = require('./exampleresponse.json'); 
let id = 10000;

const Form = () => {

const [array,setArray] =useState(data);
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }


  function handleSubmit(event) {
    console.log({ input });
    event.preventDefault();
    setArray(array.concat({ title: "test", rating: 11, id: id, url: input }))
    id++;
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Add a Video</label>
        <div className="search-row">
          <input
            value={input}
            onChange={handleInput}
            type="text"
            id="customerName"
            className="form-control"
            placeholder="Enter URL"
          />
          <button>Add</button>
        </div>
      </form>

      <Boxes array={array} setArray={setArray} />
    </div>
  );
};
export default Form;
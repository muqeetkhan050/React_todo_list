import React, { useEffect, useState } from "react";

function Form() {
  const data = {
    name: "",
    email: "",
    password: "",
  };

  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("registered");
  }, [flag]);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("all fields are necessary to fill");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            hello {inputData.name}, you have registered successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;

import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function AddActivity() {
    // setlistData([...listData, activity]);
    // console.log(listData);
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add your activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        ></input>
        <button onClick={AddActivity}>Add</button>
        <p className="list-heading">Your todo list:</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default TodoList;

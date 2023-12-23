import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div>
      <div className="root">
        <TodoList />
      </div>
    </div>
  );
}

export default App;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Pure Components {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           update button
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
// // import React from "react";
// // import Users from "./Users";
// // function App() {
// //   const user = [
// //     { hn: "20", porovince: "punjab", country: "Pakistan" },
// //     { hn: "30", porovince: "blochistan", country: "India" },
// //     { hn: "40", porovince: "kpk", country: "australia" },
// //   ];
// //   return (
// //     <div>
// //       <h1>dsbfh</h1>
// //       {user.map((item) => (
// //         <Users data={item} />
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;

// // // import React from "react";
// // // import ReactDOM from "react-dom";
// // // import { Table } from "react-bootstrap";

// // // function App() {
// // //   const users = [
// // //     {
// // //       name: "muqeet",
// // //       email: "muqeetkhan050@gmail.com",
// // //       address: [
// // //         { hn: "20", porovince: "punjab", country: "Pakistan" },
// // //         { hn: "30", porovince: "blochistan", country: "India" },
// // //         { hn: "40", porovince: "kpk", country: "australia" },
// // //       ],
// // //     },
// // //     {
// // //       name: "shami",
// // //       email: "shami@gmail.com",
// // //       address: [
// // //         { hn: "20", porovince: "punjab", country: "Pakistan" },
// // //         { hn: "30", porovince: "blochistan", country: "India" },
// // //         { hn: "40", porovince: "kpk", country: "australia" },
// // //       ],
// // //     },
// // //     {
// // //       name: "mubasher",
// // //       email: "mubasher@gmail.com",
// // //       address: [
// // //         { hn: "20", porovince: "punjab", country: "Pakistan" },
// // //         { hn: "30", porovince: "blochistan", country: "India" },
// // //         { hn: "40", porovince: "kpk", country: "australia" },
// // //       ],
// // //     },
// // //   ];
// // //   return (
// // //     <h1>
// // //       <Table striped>
// // //         <tbody>
// // //           <tr>
// // //             <td>Name</td>
// // //             <td>email</td>
// // //             <td>Address</td>
// // //           </tr>
// // //         </tbody>
// // //         {users.map((items) => (
// // //           <tr>
// // //             <td>{items.name}</td>
// // //             <td>{items.email}</td>
// // //             <td>
// // //               {items.address.map((data) => (
// // //                 <tr>
// // //                   <td>{data.hn}</td>
// // //                   <td>{data.porovince}</td>
// // //                   <td>{data.country}</td>
// // //                 </tr>
// // //               ))}
// // //             </td>
// // //           </tr>
// // //         ))}
// // //       </Table>
// // //     </h1>
// // //   );
// // // }

// // // export default App;

// // // // // import { useState } from "react";
// // // // import React, { useState } from "react";
// // // // // import ReactDOM from "react-dom";

// // // // function App() {
// // // //   const [name, setName] = useState("muqeet");

// // // //   function setName() {
// // // //     return console.log("muqeet khan");
// // // //   }

// // // //   return (
// // // //     <h1>
// // // //       <div>my name is {name}</div>
// // // //       <button onClick={setName}>update name </button>
// // // //     </h1>
// // // //   );
// // // // }

// // // // export default App;

// // // // // import React, { useEffect, useState } from "react";

// // // // // function App() {
// // // // //   // const [count, setCount] = useState(0);

// // // // //   // useEffect(() => {
// // // // //   //   console.warn("useEffect");
// // // // //   // });
// // // // //   students = ["kahn", "muqeet", "ahmad", "UET"];
// // // // //   students.map((items) => {
// // // // //     console.log(items);
// // // // //   });
// // // // //   return (
// // // // //     <h1>
// // // // //       <div>useEffect {count}</div>
// // // // //       {/* //<button onClick={() => setCount(count + 1)}>Update count</button> */}
// // // // //     </h1>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // // //import React from "react";
// // // // // // import React, { useState } from "react";

// // // // // // function App() {
// // // // // //   const [data, setData] = useState("muqeet khan");
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div>we aare using hooks {data} </div>
// // // // // //       <button onClick={() => setData("khan")}>update hook</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;
// // // // // // import React from "react";
// // // // // // import User from "./User";

// // // // // // class App extends React.Component {
// // // // // //   constructor() {
// // // // // //     super();
// // // // // //     this.state = {
// // // // // //       name: "muqeet",
// // // // // //     };
// // // // // //   }
// // // // // //   componentDidUpdate() {}
// // // // // //   render() {
// // // // // //     return (
// // // // // //       <>
// // // // // //         <h1>we are learning component did mount {this.state.name}</h1>;
// // // // // //         <button
// // // // // //           onClick={() => {
// // // // // //             this.setState({ name: "muqeet ur rehman" });
// // // // // //           }}
// // // // // //         >
// // // // // //           update name
// // // // // //         </button>
// // // // // //       </>
// // // // // //     );
// // // // // //   }
// // // // // // }

// // // // // // export default App;
// // // // // // // import React from "react";
// // // // // // // import Cc from "./Cc";
// // // // // // // import Pp from "./Pp";
// // // // // // // import Button from "./Button";

// // // // // // // function App() {
// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {/* <h1>my name is muqeet</h1>
// // // // // // //       <Cc name="ahmad" />
// // // // // // //       <Pp name="ahmad" address="karachi" />
// // // // // // //       <Button /> */}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;
// // // // // // // // // import { Component } from "react";
// // // // // // // // import React, { Component } from "react";
// // // // // // // // import Studenttt from "./Studenttt";
// // // // // // // // class App extends React.Component {
// // // // // // // //   constructor() {
// // // // // // // //     super();
// // // // // // // //     this.state = {
// // // // // // // //       name: "muqeet",
// // // // // // // //     };
// // // // // // // //   }
// // // // // // // //   render() {
// // // // // // // //     return (
// // // // // // // //       <>
// // // // // // // //         <Studenttt name={this.state.name} email="muqeet050@gmail.com" />

// // // // // // // //         <button onCLick={() => this.setState({ name: "khan" })}>
// // // // // // // //           Update name
// // // // // // // //         </button>
// // // // // // // //       </>
// // // // // // // //     );
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // export default App;

// // // // // // // // // //props in functional components

// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import ReactDOM from "react-dom";
// // // // // // // // // import Studentt from "./Studentt";
// // // // // // // // // function App() {
// // // // // // // // //   const [name, setName] = useState("Muqeet");
// // // // // // // // //   const [address, setAddress] = useState("Dera ghazi khan");
// // // // // // // // //   const [university, setUniversity] = useState("UET ");
// // // // // // // // //   return (
// // // // // // // // //     <h1 className="App">
// // // // // // // // //       <Studentt name={name} address={address} university={university} />
// // // // // // // // //       <button
// // // // // // // // //         onClick={() => {
// // // // // // // // //           setName("muqeet khan");
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         Update Name
// // // // // // // // //       </button>
// // // // // // // // //       <button onClick={() => setAddress("islamabad")}>Update address</button>
// // // // // // // // //       <button
// // // // // // // // //         onClick={() => {
// // // // // // // // //           setUniversity("Uet taxila");
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         update uni
// // // // // // // // //       </button>
// // // // // // // // //     </h1>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default App;

// // // // // // // // // // import logo from "./logo.svg";
// // // // // // // // // // import "./App.css";
// // // // // // // // // // import Navbar from "./Navbar";
// // // // // // // // // // import ProductList from "./ProductList";
// // // // // // // // // // import Product from "./Product";
// // // // // // // // // // import Student from "./Student";

// // // // // // // // // // function App() {
// // // // // // // // // //   const uni = "uet taxila";
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="App">
// // // // // // // // // //       <Student name={"muqeet ur rehman"} />
// // // // // // // // // //       <Student email={"muqeetkhan050@gmail.com"} />
// // // // // // // // // //       <Student />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;

// // // // // // // // // //import Footer from "./Footer";
// // // // // // // // // // function App() {
// // // // // // // // // //   const productList = [
// // // // // // // // // //     {
// // // // // // // // // //       price: 120000,
// // // // // // // // // //       name: "iphone",
// // // // // // // // // //       quantity: 0,
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       price: 234330,
// // // // // // // // // //       name: "Qmobile",
// // // // // // // // // //       quantity: 0,
// // // // // // // // // //     },
// // // // // // // // // //   ];
// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <Navbar />
// // // // // // // // // //       <ProductList productList={product} />
// // // // // // // // // //       {/* <Footer /> */}
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;
// // // // // // // // // // // function App() {
// // // // // // // // // // //   return;
// // // // // // // // // // //   <>
// // // // // // // // // // //     <Navbar />;
// // // // // // // // // // //   </>;
// // // // // // // // // // // }

// // // // // // // // // // // export default App;

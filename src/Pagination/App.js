// import axios from "axios";
// import React ,{useState,useEffect} from "react";
// import './App.css'

// function App(){
//   let[user,setUser] = useState ( [] )
//   let[currentPage,setCurrentPage] = useState(1);
//   let[name,setName]=useState('')
//   let[email,setEmail] =useState('')
//   let[editId,setEditId] = useState(-1)
//   let[uname,usetName]=useState('')
//   let[uemail,usetEmail] =useState('')
//   let recordsPerPage = 10
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex =  currentPage * recordsPerPage - recordsPerPage;
//   const records = user.slice(firstIndex,lastIndex)
//   const totalPages = Math.ceil(user.length / recordsPerPage)
//   useEffect(()=>{
//     axios.get("http://localhost:8080/epankaj/v.0/users/getall")
//     .then((res)=>{
//       setUser(res.data)
//     })
//     .catch((res)=>{
//       console.log("err")
//     })

//   },[])
//   const prePage = ()=>{
//   if(currentPage > 1){
//     setCurrentPage(currentPage - 1)
//   }
//   }
//   const nextPage = ()=>{
//     if(currentPage < totalPages){
//       setCurrentPage (currentPage + 1)
//     }
//   }
//   const handleSubmit = (event)=>{
// event.preventDefault();
// const id = user[user.id + 1]
// axios.post("http://localhost:8080/epankaj/v.0/users/save" ,{id:id , name: name , email: email})
// .then(res => console.log(res))
// .catch(er => console.log(er))
//   }
//   const handleEdit = (id)=>{
//     axios.get("http://localhost:8080/epankaj/v.0/users/getall/" + id)
//     .then((res)=>{
//       setName(res.data[0].name)
//       setEmail(res.data[0].email)
//     })
//     .catch((res)=>{
//       console.log("err")
//     })
//  setEditId(id)
//   }
//   const handleUpdate = ()=>{
//     axios.patch("http://localhost:8080/epankaj/v.0/users/update/" + editId, { name, email})
//     .then(res =>{

//       console.log(res.data.id);
//       // location.reload();
//       setEditId(-1)
//     }).catch(err => console.log(err))
//   }
//   return(
//     <>
//     <div id="form">
//      <form onSubmit={handleSubmit}>
//      <input type="text" placeholder="Enter Id" /> 
//       <input type="text" placeholder="Enter Name" onChange={e =>setName(e.target.value)}/> 
//       <input type="text" placeholder="Enter Email" onChange={e =>setEmail(e.target.value)}/> 
//       <button>Add</button>
//      </form>
//     </div>
//    <div>
//     <table>
//       <thead>
//         <tr>
//           <td>Id</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Action</td>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           records.map((item,index)=>{
//             // item.id ===editId ?
//             // <tr>

//             // </tr>
//             // :
//             return(
//               item.id ===editId ?
//             <tr>
//               <td>{item.id}</td>
//               <td><input type="text" value={uname} onChange={e => usetName(e.target.value)}/></td>
//               <td><input type="text" value={uemail} onChange={e => usetEmail(e.target.value)}/></td>
//               <td><button onClick={handleUpdate}>Update</button></td>
//             </tr>
//             :
             
//                 <tr key={index}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>
//                     <div id="btn">
//                     <button onClick={()=>handleEdit(item.id)} className="edit-btn">Edit</button>
//                     <button className="delete-btn">Delete</button>
//                     </div>
//                   </td>
//                 </tr>
            
//             )
//           })
//         }
//       </tbody>
//     </table>
//     <nav>
//       <ul className="pagination">
//         <button className="page-link1" onClick={prePage}><li>Prev</li></button>
//        <button className="page-link1" onClick={nextPage}> <li>Next</li></button>
//       </ul>
//     </nav>
//    </div>
//     </>
//   )
// }
// export default App;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [editId, setEditId] = useState(-1);
//   const [uname, setUname] = useState("");
//   const [uemail, setUemail] = useState("");

//   const recordsPerPage = 10;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = currentPage * recordsPerPage - recordsPerPage;
//   const records = users.slice(firstIndex, lastIndex);
//   const totalPages = Math.ceil(users.length / recordsPerPage);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/epankaj/v.0/users/getall")
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((res) => {
//         console.log("err");
//       });
//   }, []);

//   const prePage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:8080/epankaj/v.0/users/saveUserbyAdmin", {
//         name: name,
//         email: email,
//       })
//       .then((res) => {
//         console.log(res);
//         setUsers([...users, res.data]);
//         setName("");
//         setEmail("");
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleEdit = (id) => {
//     axios
//       .get(`http://localhost:8080/epankaj/v.0/users/${id}`)
//       .then((res) => {
//         setUname(res.data.name);
//         setUemail(res.data.email);
//       })
//       .catch((res) => {
//         console.log("err");
//       });
//     setEditId(id);
//   };

//   const handleUpdate = () => {
//     axios
//       .patch(`http://localhost:8080/epankaj/v.0/users/update/${editId}`, {
//         name: uname,
//         email: uemail,
//       })
//       .then((res) => {
//         console.log(res.data.id);
//         setEditId(-1);
//         setUsers(
//           users.map((user) =>
//             user.id === editId ? { ...user, name: uname, email: uemail } : user
//           )
//         );
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8080/epankaj/v.0/users/delete/${id}`)
//       .then((res) => {
//         setUsers(users.filter((user) => user.id !== id));
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <div id="form">
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
//           <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <button>Add</button>
//         </form>
//       </div>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <td>Id</td>
//               <td>Name</td>
//               <td>Email</td>
//               <td>Action</td>
//             </tr>
//           </thead>
//           <tbody>
//             {records.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 {item.id === editId ? (
//                   <>
//                     <td>
//                       <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
//                     </td>
//                     <td>
//                       <input type="text" value={uemail} onChange={(e) => setUemail(e.target.value)} />
//                     </td>
//                     <td>
//                       <button onClick={handleUpdate}>Update</button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>
//                       <div id="btn">
//                         <button onClick={() => handleEdit(item.id)} className="edit-btn">
//                           Edit
//                         </button>
//                         <button onClick={() => handleDelete(item.id)} className="delete-btn">
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <nav>
//           <ul className="pagination">
//             <button className="page-link1" onClick={prePage}>
//               <li>Prev</li>
//             </button>
//             <button className="page-link1" onClick={nextPage}>
//               <li>Next</li>
//             </button>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default App;

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(-1);
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = currentPage * recordsPerPage - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  useEffect(() => {
    axios
      .get("http://3.111.37.163:8080/epankaj/v.0/users/getall")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((res) => {
        console.log("err");
      });
  }, []);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://3.111.37.163:8080/epankaj/v.0/users/saveUserbyAdmin", {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
        setUsers([...users, res.data]);
        setName("");
        setEmail("");
        setSuccessMessage("User Inserted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    axios
      .get(`http://3.111.37.163:8080/epankaj/v.0/users/${id}`)
      .then((res) => {
        setUname(res.data.name);
        setUemail(res.data.email);
      })
      .catch((res) => {
        console.log("err");
      });
    setEditId(id);
  };

  const handleUpdate = () => {
    axios
      .patch(`http://3.111.37.163:8080/epankaj/v.0/users/update/${editId}`, {
        name: uname,
        email: uemail,
      })
      .then((res) => {
        console.log(res.data.id);
        setEditId(-1);
        setUsers(
          users.map((user) =>
            user.id === editId ? { ...user, name: uname, email: uemail } : user
          )
        );
        setSuccessMessage("User Updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://3.111.37.163:8080/epankaj/v.0/users/delete/${id}`)
      .then((res) => {
        setUsers(users.filter((user) => user.id !== id));
        setSuccessMessage("User Deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Add</button>
        </form>
        {successMessage && <div>{successMessage}</div>}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                {item.id === editId ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={uemail}
                        onChange={(e) => setUemail(e.target.value)}
                      />
                    </td>
                    <td>
                      <button onClick={handleUpdate}>Update</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <div id="btn">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="edit-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <button className="page-link1" onClick={prePage}>
              <li>Prev</li>
            </button>
            <button className="page-link1" onClick={nextPage}>
              <li>Next</li>
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
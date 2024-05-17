import axios from "axios";
import React ,{useState,useEffect} from "react";
import './App.css'

function App(){
  let[user,setUser] = useState ( [] )
  let[currentPage,setCurrentPage] = useState(1);
  let[name,setName]=useState('')
  let[email,setEmail] =useState('')
  let[editId,setEditId] = useState(-1)
  let[uname,usetName]=useState('')
  let[uemail,usetEmail] =useState('')
  let recordsPerPage = 10
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex =  currentPage * recordsPerPage - recordsPerPage;
  const records = user.slice(firstIndex,lastIndex)
  const totalPages = Math.ceil(user.length / recordsPerPage)
  useEffect(()=>{
    axios.get("http://3.111.37.163:8080/epankaj/v.0/users/getall")
    .then((res)=>{
      setUser(res.data)
    })
    .catch((res)=>{
      console.log("err")
    })

  },[])
  const prePage = ()=>{
  if(currentPage > 1){
    setCurrentPage(currentPage - 1)
  }
  }
  const nextPage = ()=>{
    if(currentPage < totalPages){
      setCurrentPage (currentPage + 1)
    }
  }
  const handleSubmit = (event)=>{
event.preventDefault();
const id = user[user.id + 1]
axios.post("http://3.111.37.163:8080/epankaj/v.0/users/save" ,{id:id , name: name , email: email})
.then(res => console.log(res))
.catch(er => console.log(er))
  }
  const handleEdit = (id)=>{
    axios.get("http://3.111.37.163:8080/epankaj/v.0/users/getall/" + id)
    .then((res)=>{
      setName(res.data[0].name)
      setEmail(res.data[0].email)
    })
    .catch((res)=>{
      console.log("err")
    })
 setEditId(id)
  }
  const handleUpdate = ()=>{
    axios.put("http://3.111.37.163:8080/epankaj/v.0/users/update/" + editId, { name, email})
    .then(res =>{
      console.log(res);
      // location.reload();
      setEditId(-1)
    }).catch(err => console.log(err))
  }
  return(
    <>
    <div id="form">
     <form onSubmit={handleSubmit}>
     <input type="text" placeholder="Enter Id" /> 
      <input type="text" placeholder="Enter Name" onChange={e =>setName(e.target.value)}/> 
      <input type="text" placeholder="Enter Email" onChange={e =>setEmail(e.target.value)}/> 
      <button>Add</button>
     </form>
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
        {
          records.map((item,index)=>{
            // item.id ===editId ?
            // <tr>

            // </tr>
            // :
            return(
              item.id ===editId ?
            <tr>
              <td>{item.id}</td>
              <td><input type="text" value={uname} onChange={e => usetName(e.target.value)}/></td>
              <td><input type="text" value={uemail} onChange={e => usetEmail(e.target.value)}/></td>
              <td><button onClick={handleUpdate}>Update</button></td>
            </tr>
            :
             
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <div id="btn">
                    <button onClick={()=>handleEdit(item.id)} className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                    </div>
                  </td>
                </tr>
            
            )
          })
        }
      </tbody>
    </table>
    <nav>
      <ul className="pagination">
        <button className="page-link1" onClick={prePage}><li>Prev</li></button>
       <button className="page-link1" onClick={nextPage}> <li>Next</li></button>
      </ul>
    </nav>
   </div>
    </>
  )
}
export default App;
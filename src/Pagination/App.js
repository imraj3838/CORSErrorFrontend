import React ,{useState,useEffect} from "react";
import './App.css'
import axios from "axios";
function App(){
  let[user,setUser] = useState([])
  let[currentPage,setCurrentPage] = useState(1)
  let recordsPerPage = 5;
  useEffect(()=>{
 axios.get("https://dummyjson.com/users")
 .then((res)=>{
  setUser(res.data.users)
 })
  },[])
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = currentPage * recordsPerPage - recordsPerPage;
  const records = user.slice(firstIndex,lastIndex)
  const totalPages = Math.ceil(user.length / recordsPerPage)


  const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const prePage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
      const deleteUser = (id)=>{
        const updatedUser= user.filter((user)=>user.id !==id)
          setUser(updatedUser);
        
      }
  return(
    <>
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {records.map((data, index)=>{
            return(
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={()=>deleteUser(data.id)}>Delete</button>
                </td>
              </tr>
            )
          })

          }
        </tbody>
      </table>
      <nav >
           <ul className="pagination">
             <li className="page-item" activeClassName="active">
               <button className="page-link1" onClick={prePage}>
                 Prev
              </button>
             </li>
            <li className="page-item">
               <button className="page-link1" onClick={nextPage}>
                 Next
               </button>
             </li>
           </ul>
       </nav>
    </div>
    </>
  )
}
export default App;

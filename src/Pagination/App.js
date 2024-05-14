import React, { useState, useEffect } from "react";
import User from "./User";
import './App.css'
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    axios("https://dummyjson.com/users")
      .then((res) => {
        setUser(res.data.users);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = user.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(user.length / recordsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

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

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav >
          <ul className="pagination">
            <li className="page-item" activeClassName="active">
              <button className="page-link1" onClick={prePage}>
                Prev
              </button>
            </li>
            {[...Array(totalPages).keys()].map((n, i) => (
              <li
                className={`page-item ${currentPage === n + 1 ? "active" : ""}`}
                key={i}
              >
                <button className="page-link" onClick={() => changePage(n + 1)}>
                  {n + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link1" onClick={nextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <User setUser={setUser} />
    </>
  );
}

export default App;

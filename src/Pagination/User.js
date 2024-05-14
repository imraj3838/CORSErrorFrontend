import React, { useEffect } from "react";
import axios from "axios";

function User({ setUser }) {
  useEffect(() => {
    axios("https://dummyjson.com/users")
      .then((res) => {
        setUser(res.data.users);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [setUser]);

  return (
    <>
    </>
  );
}

export default User;

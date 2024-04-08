"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

function Contact() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3520/api").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;

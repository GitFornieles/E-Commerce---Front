import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UsersList = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  // Tuve que cambiar la ruta del back y pasarle el usuario por params:
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/admin/allUser/${user.nickname}`, {
        nickname: user.nickname,
      })
      .then((res) => res.data)
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div>
      {user.admin ? (
        <section>
          <table>
            <thead>
              <tr>
                <th>USUARIOS</th>
              </tr>
            </thead>

            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </section>
      ) : (
        <h1>ACCESO DENEGADO</h1>
      )}
    </div>
  );
};

export default UsersList;

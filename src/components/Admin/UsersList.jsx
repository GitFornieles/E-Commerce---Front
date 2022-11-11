import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";

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
  }, [users]);

  return (
    <div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary btn-sm btn-color">
            {" "}
            ↩ Home{" "}
          </button>
        </Link>
      </div>
      {user.admin ? (
        <section className="pt-4">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>USUARIOS</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Admin?</th>
                <th>Promover/Remover</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <UserItem user={user} key={i} i={i} />
              ))}
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

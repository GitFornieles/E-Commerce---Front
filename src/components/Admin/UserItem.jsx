import React from "react";
import axios from "axios";

const UserItem = ({ user }) => {
  // Convieto usuario en ADMIN:
  const handleAdmin = () => {
    axios.put(`http://localhost:8000/api/admin/createAdmin`, {
      nickname: user.nickname,
    });
  };

  // Elimino admin y lo convierto en usuario normal:
  const removeAdmin = () => {
    axios.put(`http://localhost:8000/api/admin/deleteAdmin`, {
      nickname: user.nickname,
    });
  };

  return (
    <tr>
      <td>{user.nickname}</td>
      <td>{user.name}</td>
      <td>{user.lastname}</td>
      <td>{user.admin ? <h3>✓</h3> : <h3>✖️</h3>}</td>
      <td>
        {user.admin ? (
          <div class="buttons">
            <button class="button is-warning is-light" onClick={removeAdmin}>
              Remover Admin
            </button>
          </div>
        ) : (
          <div class="buttons">
            <button class="button is-success is-light" onClick={handleAdmin}>
              Promover Admin
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserItem;

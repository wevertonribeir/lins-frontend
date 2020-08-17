import React from 'react';
import { UserContext } from '../../../UserContext';
import { CLIENTE_GET } from '../../../api';
import './Cliente.css';

const Cliente = () => {

  const { data } = React.useContext(UserContext);
  const [cliente, setCliente] = React.useState({});

  React.useEffect(() => {
    async function showCliente() {
      const { url, options } = CLIENTE_GET(data.id);
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      setCliente(json);
    } showCliente();
  }, [])

  return (
    <div className="content">
      <div className="container">
        <table className="table">
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{data.id}</td>
            </tr>
            <tr>
              <td>Nome:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Endereço:</td>
              <td>{cliente.public_place}, {cliente.number}, {cliente.neighborhood}, {cliente.city}-{cliente.federated_unit}, {cliente.zip_code}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cliente;

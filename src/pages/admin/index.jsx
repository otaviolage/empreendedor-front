import "./admin.css"
import Header from '../../components/Header'
import { Fragment } from 'react';

function Admin() {
  return (
    <Fragment>
      <Header page='admin'/>
      <div className="Admin">
        <div className="container">
          <div className="others"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Admin;
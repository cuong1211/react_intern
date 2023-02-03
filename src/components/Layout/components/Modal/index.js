import Refresh from './Button/refresh';
import Reset from './Button/reset';
import Submit from './Button/submit';
import HeaderModal from './Header';
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import useToken from '../Api/useToken';
import './modal.css'

async function CreateUser(data ,token, closeModal) {
  const closeModalHandler = () =>
  {
     closeModal(false)
  }
  const options = {
    url: 'https://intern_project.minhhoangjsc.io/api/users',
    method: 'POST',
    data: data,
    headers: {
      'Accept': 'application/json',
      "Authorization": "Bearer " + token,
    },
  };
  return axios.request(options)
    .then(res => {
        if(res.data.type === 'error'){
            console.log('eror');
        }else{
            closeModalHandler()
        }

    }
    )
    .catch(err => {

      console.log('error');
    }
    )
}

function Modal({ title, id, closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const closeModalHandler = () => {
    closeModal(false);
  }
  const token = useToken().token;
  const handleSubmit = async e => {
    e.preventDefault();
    await CreateUser({
      'name': name,
      'email': email,
      'isAdmin' :isAdmin,
      'password': password,
      'password_confirmation': password_confirmation
    },
    token,
    closeModal
    )
  }

  return (
    <div className="modalFix" id="kt_modal_add_customer">
      <div className="modal-dialog modal-dialog-centered mw-900px">
        <div className="modal-content rounded">
          <HeaderModal title={title} closeModal={closeModalHandler} />
          <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
            <form id="kt_modal_add_customer_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={handleSubmit}>
              <div className="card card-flush pt-3 mb-5 mb-lg-10">
                <input type="hidden" name="id" />
                <div className="card-body pt-0">
                  <div className="fv-row mb-7">
                    <label className="required fs-6 fw-bold mb-2">Name</label>
                    <input
                        type="text"
                        className="form-control form-control-solid"
                        onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2">Email</label>
                    <input
                        type="text"
                        className="form-control form-control-solid"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                  </div>
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="form-control form-control-solid"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                  </div>
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control form-control-solid"
                        onChange={(e)=>setPassword_confirmation(e.target.value)}
                    />
                  </div>
                   <div className="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" data-kt-scroll="true"
                        data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                        data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                        data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="300px">

                        <div className="fv-row mb-7">

                            <label className="required fs-6 fw-bold mb-2">Role</label>


                            <select className="form-control form-control-lg form-control-solid" name="isAdmin" onChange={(e)=>setIsAdmin(e.target.value)}>
                                <option value="">Choose role</option>
                                <option value="1">Admin</option>
                                <option value="0">Employee</option>
                            </select>


                        </div>
                    </div>

                </div>
              </div>

              <div className="text-center">
                {title === 'Add User' && (
                  <Fragment>
                    <Reset />
                    <Submit />
                  </Fragment>
                )}
                {title === 'Edit User' && (
                  <Fragment>
                    <Refresh />
                    <Submit />
                  </Fragment>
                )}
              </div>
            </form>
          </div>
        </div >
      </div >
    </div >
  );
}

export default Modal;

import Refresh from './Button/refresh';
import Reset from './Button/reset';
import Submit from './Button/submit';
import HeaderModal from './Header';
import Product from './Product';
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import useToken from '../Api/useToken';
import './modal.css'

async function CreateProduct(data, token, closeModal) {
  const options = {
    url: 'https://intern_project.minhhoangjsc.io/api/orders',
    method: 'POST',
    data: data,
    headers: {
      'Accept': 'application/json',
      "Authorization": "Bearer " + token,
    },
  };
  return axios.request(options)
    .then(response => {
      function closeModalHandler() {
        closeModal(false);
      }
      closeModalHandler();
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
}
function Modal({ title, closeModal }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [nameProduct, setNameProduct] = useState([]);
  const [colorProduct, setColorProduct] = useState([]);
  const [sizeProduct, setSizeProduct] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState([]);
  const token = useToken().token;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('description', description);
    nameProduct.forEach((name, index) => {
      data.append(`name_product[]`, name);
      data.append(`color_product[]`, colorProduct[index]);
      data.append(`size_product[]`, sizeProduct[index]);
      data.append(`quantity_product[]`, quantityProduct[index]);
    });
    await CreateProduct(data, token, closeModal)
  }
  const removeProductHandle = (index) => {
    setProduct(prevProduct => prevProduct.filter(item => item.props.index !== index));
  }
  const [product, setProduct] = useState([
    <Product
      key={0}
      index={0}
      setNameProduct={setNameProduct}
      setColorProduct={setColorProduct}
      setSizeProduct={setSizeProduct}
      setQuantityProduct={setQuantityProduct}
      removeProductHandle={removeProductHandle} />
  ]);

  const addProductHandle = () => {
    let index = product.length;
    setProduct([...product,
    <Product
      key={index}
      index={index}
      setNameProduct={setNameProduct}
      setColorProduct={setColorProduct}
      setSizeProduct={setSizeProduct}
      setQuantityProduct={setQuantityProduct}
      removeProductHandle={removeProductHandle}
    />])
  }
  const closeModalHandler = () => {
    closeModal(false);
  }
  const modal = (
    <div className="modalFix" id="kt_modal_add_customer">
      <div className="modal-dialog modal-dialog-centered mw-900px">
        <div className="modal-content rounded">
          <HeaderModal title={title} closeModal={closeModalHandler} />
          <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
            <form onSubmit={HandleSubmit}>
              <div className="card card-flush pt-3 mb-5 mb-lg-10">
                <input type="hidden" name="id" />
                <div className="card-body pt-0">
                  <div className="fv-row mb-7">
                    <label className="required fs-6 fw-bold mb-2">Name</label>
                    <input type="text" className="form-control form-control-solid" onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2">Description</label>
                    <textarea className="form-control form-control-solid" rows="3" name="description" placeholder="Type Description" onChange={e => setDescription(e.target.value)}></textarea>
                  </div>
                  <div className="fv-row mb-7">
                    <label className="required fs-6 fw-bold mb-2">Price</label>
                    <input type="number" className="form-control form-control-solid" onChange={e => setPrice(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="300px">
                <div className="card card-flush pt-3 mb-5 mb-lg-10" id="product">
                  <div className="card-header">
                    <div className="card-title">
                      <h2 className="fw-bolder">Product</h2>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="d-flex flex-column mb-15 fv-row">
                      <div className="table-responsive">
                        <div id="kt_create_new_custom_fields_wrapper"
                          className="dataTables_wrapper dt-bootstrap4 no-footer">
                          <div className="table-responsive">
                            <table id="kt_create_new_custom_fields"
                              className="table align-middle table-row-dashed fw-bold fs-6 gy-5 dataTable no-footer">
                              <thead>
                                <tr
                                  className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                  <th className="pt-0 sorting_disabled required" rowSpan="1"
                                    colSpan="1" style={{ width: 180.734 + 'px' }}>Name</th>
                                  <th className="pt-0 sorting_disabled required" rowSpan="1"
                                    colSpan="1" style={{ width: 181.469 + 'px' }}>Color</th>
                                  <th className="pt-0 sorting_disabled required" rowSpan="1"
                                    colSpan="1" style={{ width: 181.469 + 'px' }}>Size</th>
                                  <th className="pt-0 sorting_disabled required" rowSpan="1"
                                    colSpan="1" style={{ width: 181.469 + 'px' }}>Quantity</th>
                                  {product.length > 0 && (
                                    < th className="pt-0 text-end sorting_disabled" rowSpan="1"
                                      colSpan="1" style={{ width: 53.5469 + 'px' }}>Remove</th>
                                  )}
                                </tr>
                              </thead>
                              <tbody id="tab_logic">
                                {product}
                              </tbody>
                            </table>
                          </div>
                          <div className="row">
                            <div
                              className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                            </div>
                            <div
                              className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light-primary me-auto" id="add_product" onClick={addProductHandle}>Add
                        Product</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {title === 'Add Order' && (
                  <Fragment>
                    <Reset />
                    <Submit />
                  </Fragment>
                )}
                {title === 'Edit Order' && (
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
  return modal;
}

export default Modal;
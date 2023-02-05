import Refresh from './Button/refresh';
import Reset from './Button/reset';
import Submit from './Button/submit';
import Product from './Product';
import { useState, Fragment } from 'react';
import { Create } from '~/services/order/orderServices';
import './modal.css'
import { Modal as Modals, ModalHeader, ModalBody, Form, Label, Input, FormGroup } from 'reactstrap';

async function CreateProduct(data, closeModal) {
  const response = await Create(data);
  console.log(response);
  // if (response.data.status === "success") {
  //   closeModal(false);
  // }else{
  //   console.log(response);
  // }
}
function Modal({ title, closeModal }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [nameProduct, setNameProduct] = useState([]);
  const [colorProduct, setColorProduct] = useState([]);
  const [sizeProduct, setSizeProduct] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState([]);

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
    await CreateProduct(data, closeModal)
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
    <Modals isOpen={closeModal} toggle={closeModalHandler} size={'lg'} backdrop={'static'}>
      <ModalHeader toggle={closeModalHandler}>{title}</ModalHeader>
      <ModalBody>
        <Form onSubmit={HandleSubmit}>
          <div className="card card-flush pt-3 mb-5 mb-lg-10">
            <Input type="hidden" name="id" />
            <div className="card-body pt-0">
              <FormGroup>
                <Label className="required fs-6 fw-bold mb-2">Name</Label>
                <Input type="text" className="form-control form-control-solid" onChange={e => setName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label className="fs-6 fw-bold mb-2">Description</Label>
                <Input type="textarea" className="form-control form-control-solid" rows="3" name="description" placeholder="Type Description" onChange={e => setDescription(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Label className="required fs-6 fw-bold mb-2">Price</Label>
                <Input type="number" className="form-control form-control-solid" onChange={e => setPrice(e.target.value)} />
              </FormGroup>
            </div>
          </div>
          <div className="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll">
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
        </Form>
      </ModalBody>
    </Modals>
  );
  return modal;
}

export default Modal;
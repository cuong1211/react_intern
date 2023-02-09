import Refresh from './Button/refresh';
import Reset from './Button/reset';
import Submit from './Button/submit';
import Product from './Product';
import { useState, Fragment, useEffect } from 'react';
import { Create, GetOrder, Update } from '~/services/order/orderServices';
import './modal.css'
import { Modal as Modals, ModalHeader, ModalBody, Form, Label, Input, FormGroup } from 'reactstrap';

async function CreateOrder(data, closeModal, GetData) {
  const response = await Create(data);
  console.log(response);
  if (response.status === "success") {
    closeModal(false);
    GetData();
  }else{
    console.log(response);

  }
}

async function UpdateOrder(data, id) {
  const response = await Update(data, id)
  console.log(response);

}
function Modal({ title, closeModal, id ,GetData}) {
  const [data, setData] = useState([]);
  const [idOrder, setIdOrder] = useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState();
  const [idProduct, setIdProduct] = useState([]);
  const [nameProduct, setNameProduct] = useState([]);
  const [colorProduct, setColorProduct] = useState([]);
  const [sizeProduct, setSizeProduct] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState([]);

  useEffect(() => {
    if (title === "Edit Order") {
      async function GetData() {
        const result = await GetOrder(id);
        console.log(result);
        setData(result);
        setIdOrder(result.id);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setStatus(result.status);
        setIdProduct(result.product.map(item => item.id));
        setNameProduct(result.product.map(item => item.name));
        setColorProduct(result.product.map(item => item.color));
        setSizeProduct(result.product.map(item => item.size));
        setQuantityProduct(result.product.map(item => item.quantity));
        setProduct(result.product.map((item, index) => {
          return <Product
            key={index}
            index={index}
            setIdProduct={setIdProduct}
            setNameProduct={setNameProduct}
            setColorProduct={setColorProduct}
            setSizeProduct={setSizeProduct}
            setQuantityProduct={setQuantityProduct}
            removeProductHandle={removeProductHandle}
            data={item}
          />
        }))
      }
      GetData()
    }
  }, [id]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('id', idOrder);
    data.append('name', name);
    data.append('price', price);
    data.append('description', description);
    data.append('status', status);
    nameProduct.forEach((name, index) => {
      data.append(`id_product[]`, idProduct[index]);
      data.append(`name_product[]`, name);
      data.append(`color_product[]`, colorProduct[index]);
      data.append(`size_product[]`, sizeProduct[index]);
      data.append(`quantity_product[]`, quantityProduct[index]);
    });
    if (title === "Edit Order") {
      await UpdateOrder(data, id);
    } else {
    await CreateOrder(data, closeModal, GetData);
    }
  }
  const removeProductHandle = (index) => {
    setProduct(prevProduct => prevProduct.filter(item => item.props.index !== index));
  }
  const [product, setProduct] = useState([
    // <Product
    //   key={0}
    //   index={0}
    //   setNameProduct={setNameProduct}
    //   setColorProduct={setColorProduct}
    //   setSizeProduct={setSizeProduct}
    //   setQuantityProduct={setQuantityProduct}
    //   removeProductHandle={removeProductHandle} />
  ]);

  let index = product.length;
  const addProductHandle = () => {
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
            <Input type="hidden" name="id" value={data.id}/>
            <div className="card-body pt-0">
              <FormGroup>
                <Label className="required fs-6 fw-bold mb-2">Name</Label>
                <Input type="text" className="form-control form-control-solid" onChange={e => setName(e.target.value)} value={data.name} />
              </FormGroup>
              <FormGroup>
                <Label className="fs-6 fw-bold mb-2">Description</Label>
                <Input type="textarea" className="form-control form-control-solid" rows="3" value={data.description} placeholder="Type Description" onChange={e => setDescription(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label className="required fs-6 fw-bold mb-2">Price</Label>
                <Input type="number" className="form-control form-control-solid" onChange={e => setPrice(e.target.value)} value={data.price} />
              </FormGroup>
              <FormGroup>
                <Label className="required fs-6 fw-bold mb-2">Status</Label>
                <Input type="select" className="form-control form-control-solid" onChange={e => setStatus(e.target.value)}>
                  <option value="choose" >Select Status</option>
                  <option value="0" >New</option>
                  <option value="1" >Processing</option>
                  <option value="2" >Shipped</option>
                  <option value="3" >Done</option>
                  <option value="4" >Cancel</option>
                </Input>
              </FormGroup>
            </div>
          </div>
          <div className="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" style={{ maxHeight: 500 + 'px' }}>
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
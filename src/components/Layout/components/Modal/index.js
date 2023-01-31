import './modal.css'

function Modal({ children, title, id, closeModal }) {
  return (
    <div className="modalFix" id="kt_modal_add_customer">

      <div className="modal-dialog modal-dialog-centered mw-900px">

        <div className="modal-content rounded" data-select2-id="select2-data-74-ng3j">

          <div className="modal-header pb-0 border-0 justify-content-end">

            <div className="btn btn-sm btn-icon btn-active-color-primary btn-close" data-bs-dismiss="modal" onClick={() => closeModal(false)}>

              <span className="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none">
                  <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                    rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                  <rect x="7.41422" y="6" width="16" height="2" rx="1"
                    transform="rotate(45 7.41422 6)" fill="black"></rect>
                </svg>
              </span>

            </div>

          </div>


          <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15" data-select2-id="select2-data-73-tn3s">

            <form id="kt_modal_add_customer_form" className="form fv-plugins-bootstrap5 fv-plugins-framework">



              <div className="card card-flush pt-3 mb-5 mb-lg-10">

                <div className="card-header">

                  <div className="card-title">
                    <h2 className="fw-bolder modal-title">Order</h2>
                  </div>

                </div>

                <input type="hidden" name="id" />
                <div className="card-body pt-0">
                  <div className="fv-row mb-7">

                    <label className="required fs-6 fw-bold mb-2">Name</label>

                    <input type="text" className="form-control form-control-solid" placeholder=""
                      name="name" />

                  </div>
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2">Description</label>
                    <textarea className="form-control form-control-solid" rows="3" name="description" placeholder="Type Description"></textarea>
                  </div>
                  <div className="fv-row mb-7">
                    <label className="required fs-6 fw-bold mb-2">Price</label>
                    <input type="number" className="form-control form-control-solid"
                      placeholder="" name="price" />
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
                                  < th className="pt-0 text-end sorting_disabled" rowSpan="1"
                                    colSpan="1" style={{ width: 53.5469 + 'px' }}>Remove</th>
                                </tr>
                              </thead>


                              <tbody id="tab_logic">
                                < tr className="odd">
                                  <input type="hidden" name="id_product[]" value="" />
                                  <td>
                                    <input type="text"
                                      className="form-control form-control-solid"
                                      name="name_product[]" value="" />
                                  </td>
                                  <td>
                                    <input type="text"
                                      className="form-control form-control-solid"
                                      name="color_product[]" value="" />
                                  </td>
                                  <td>
                                    <select
                                      className="form-control form-control-lg form-control-solid"
                                      name="size_product[]">
                                      <option value="0">Choose</option>
                                      <option value="S">S</option>
                                      <option value="M">M</option>
                                      <option value="L">L</option>
                                      <option value="XL">XL</option>
                                      <option value="XXL">XXL</option>
                                    </select>
                                  </td>
                                  <td>
                                    <input type="number" className="form-control form-control-lg form-control-solid"
                                      name="quantity_product[]" value="" />
                                  </td>
                                  <td className="text-end">
                                    <button type="button"
                                      className="btn btn-icon btn-flex btn-active-light-primary w-30px h-30px me-3 row-delete"
                                      data-kt-action="field_remove">

                                      <span className="svg-icon svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                          width="24" height="24"
                                          viewBox="0 0 24 24" fill="none">
                                          <path
                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                            fill="black"></path>
                                          <path opacity="0.5"
                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                            fill="black"></path>
                                          <path opacity="0.5"
                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                            fill="black"></path>
                                        </svg>
                                      </span>

                                    </button>
                                  </td>
                                </tr>
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

                      <button type="button" className="btn btn-light-primary me-auto" id="add_product">Add
                        Product</button>

                    </div>

                  </div>

                </div>
              </div>


              <div className="text-center">
                <button className="btn btn-light me-3 btn-reset" id="kt_modal_add_customer_cancel">Reset</button>
                <button className="btn btn-light me-3 btn-refresh">Refresh</button>
                <button id="kt_modal_add_customer_submit" className="btn btn-primary">
                  <span className="indicator-label">Submit</span>
                </button>
              </div>
            </form>

          </div>

        </div >
      </div >
    </div >
  );
}

export default Modal;

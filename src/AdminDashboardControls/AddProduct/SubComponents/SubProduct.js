import React from 'react'
import Select from "react-select";

const SubProduct = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ];
      const colorOptions = [
        {
          value: "red",
          label: "Red",
        },
        {
          value: "green",
          label: "Green",
        },
        {
          value: "yellow",
          label: "Yellow",
        },
      ];
      const deliveryOptions = [
        {
          value: "week",
          label: "Seven Days",
        },
        {
          value: "month",
          label: "within month",
        },
        {
          value: "2month",
          label: "2 Months",
        },
      ];
      return (
        <div>
          <div className="container">
            <form>
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 ">
                    <input
                      type="text"
                      className="form-control "
                      name="product_name"
                      id=""
                      placeholder="Product Name"
                    />
                    {/* <label for="product_name">Hi</label> */}
                    <small className="text-primary">This field is required</small>
                  </div>
                  <div className="mb-3 row">
                    <div className="col input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          $GD
                        </span>
                      </div>
                      <input
                        className="form-control "
                        type="text"
                        name=""
                        id=""
                        placeholder="00"
                      />
                      <small className="text-primary">This field is required</small>
                    </div>
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Product Id"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <Select
                      options={options}
                      isMulti
                      name="colors"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Tags"
                    />
                    <small className="text-primary">This field is required</small>
                  </div>
                  <div className="mb-3 row">
                    <div className="col">
                      <Select options={colorOptions} placeholder="Color"></Select>
                    </div>
                    <div className="col">
                      <Select
                        options={deliveryOptions}
                        placeholder="Delivery Day"
                      ></Select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control "
                      name="product_name"
                      id=""
                      placeholder="Dimensions"
                    />
                    <small className="text-primary">This field is required</small>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control "
                      name="material"
                      id=""
                      placeholder="Material"
                    />
                    <small className="text-primary">This field is required</small>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control "
                      name="product_name"
                      id=""
                      placeholder="Weights"
                    />
                    <small className="text-primary">This field is required</small>
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      className="form-control "
                      name="product_name"
                      id=""
                      placeholder="Product Details"
                      rows="4"
                    />
                    <small className="text-primary">This field is required</small>
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      className="form-control "
                      name="product_name"
                      id=""
                      placeholder="Additional Instructions"
                      rows="4"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex flex-column">
                    <div className="d-flex mb-4 ">
                      <div className="mx-2">
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-primary">
                            In Stock
                          </button>
                          <button type="button" class="btn btn-primary " disabled>
                            No Stock
                          </button>
                        </div>
                      </div>
                      <div className="mx-2">
    
                        
                      <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label" for="customFile">
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-secondary  text-white w-100 text-center  "
                      style={{ height: 500 }}
                    >
                      <span className="my-auto">Preview</span>
                    </div>
                  </div>
                </div>
                <div
                  className="save-btns justify-content-end w-100"
                  // style={{ marginRight: 0 }}
                >
                  <button className="btn">Cancel</button>
                  <button className="btn">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

export default SubProduct

import React,{useState} from "react";
import Select from "react-select";


const Product = () => {
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
  const [collectionShots, setCollectionShots] = useState(3);
  // let newImages=new Array(6)
  let newImages=[]
  const [img, setImg] = useState("");
  const [images, setImages] = useState([])

  const handleChangeImages=(e,i)=>{

      
      newImages=[...images]
      newImages[i]=e.target.files[0]
      console.log(newImages) 
      setImages(newImages)    
   
  }




  const addCollectionShots = (e) => {
    e.preventDefault();
    setCollectionShots(() => collectionShots + 1);
  };
  const previewImage = (e,i) => {
    setImg(e.target.files[0]);
    // console.log(e.target.files[0])
    handleChangeImages(e,i)

  };
  return (

    <div>
      <div className="container py-4">
        <form>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control  "
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
            <div className="col-lg-7 col-md-12">
              <div className="d-flex flex-column">
                <div className="d-flex mb-4 ">
                  <div className="mx-2">

                    {
                       
                        Array.from({ length: collectionShots }, (v, i) => i).map(i => (
                          <div class="custom-file mb-3">
                          <input
                            type="file"
                            name="file"
                            class="custom-file-input change"
                            id="customFile1"
                            
                            onChange={(e)=>previewImage(e,i)}
                          />
                          <label class="custom-file-label" for="customFile2">
                            {
                              images[i]? images[i].name  : <> Upload Image #{i+1}</>

                            }
                          </label>
                        </div>

                            // <input type="file" onChange={previewImage} />
                        ))
                    
                    }
                    {/* <div class="custom-file mb-3">
                      <input
                        type="file"
                        name="file"
                        class="custom-file-input change"
                        id="customFile1"
                        
                        onChange={handleChangeImages}
                      />
                      <label class="custom-file-label" for="customFile2">
                        Choose file
                      </label>
                    </div> */}
                    {/* <div class="custom-file mb-3">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div> */}
                    {/* <div class="custom-file mb-3">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div> */}
                    {/* <div class="custom-file mb-3">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose file
                      </label>
                    </div> */}
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
                  {
                       
                       Array.from({ length: collectionShots }, (v, i) => i).map(i => (
                         <div class="custom-file mb-3">
                         <input
                           type="file"
                           name="file"
                           class="custom-file-input change"
                           id="customFile1"
                           
                           onChange={(e)=>previewImage(e,i+3)}
                         />
                         <label class="custom-file-label" for="customFile2">
                         {
                              images[i+3]? images[i+3].name  : <> Upload Image #{i+4}</>

                            }
                         </label>
                       </div>

                           // <input type="file" onChange={previewImage} />
                       ))
                   
                   }

                    
                  {/* <div class="custom-file mb-3">
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
                    </div> */}
                  </div>
                </div>
                <div
                  className="  text-white w-100 text-center  "
                  
                >
                  {/* <span className="my-auto">Preview</span> */}
                  {/* {img && <img src={URL.createObjectURL(img)} alt="preview" />} */}
                  <div className="previewer my-auto">
                                {img && <img src={URL.createObjectURL(img)} alt="preview" />}
                            </div>

                  
                  {/* <img src={img} alt="images" style={{objectFit:"contain",width:"100%",height:"100%"}} className="" /> */}

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
};

export default Product;

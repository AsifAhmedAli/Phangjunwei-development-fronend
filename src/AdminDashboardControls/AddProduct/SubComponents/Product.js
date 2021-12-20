import React,{useState,useContext,useRef} from "react";
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import {useParams} from 'react-router-dom'


import AuthContext from "../../../Context/AuthContext";
import axios from "axios";



const Product = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const colorOptionss = [
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
  const [colorOptions, setcolorOptions] = useState([
      //  {
      //     value: "red",
      //     label: "Red",
      //   },
      //   {
      //     value: "green",
      //     label: "Green",
      //   },
      //   {
      //     value: "yellow",
      //     label: "Yellow",
      //   },
  ])
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
  const {token} = useContext(AuthContext)
  const forms = useRef(null)
  const {companyId}=useParams()
  console.log(companyId)


  let newImages=[]
  const [img, setImg] = useState("");
  const [images, setimages] = useState([])
  const initialState={skuName:'',skuCompany:'', skuStyle:'', skuColor:'',skuprice:'',skuTag:'',stockQty:'',promoPrice:''}
  const [productData, setproductData] = useState(initialState)
  const {skuName,skuCompany, skuStyle, skuColor,skuprice,skuTag,stockQty,promoPrice}=productData
  const [tags, settags] = useState([])
  
  

  const handleChangeInput=(e)=>{
    const {name,value}=e.target
    setproductData({...productData,[name]:value})
}
 const handleChangeInputFile=(e,i)=>{
      // console.log(e.target.files[0])
      let imagess=[...images]
      imagess[i]=e.target.files[0]
      // console.log(imagess[i].name)
      setimages(imagess)
      // setimages([...images,images[i]=e.target.files[0]])
      // console.log(images)
}
const handleChangeTag=(e)=>{
  // e.preventDefault();

  // console.
  // console.log(e)
  settags(e)
  var names = e.map(function(item) {
    return item['value'];
  });
  
  // console.log(names)
  const a=names.toString()
  // console.log(a)
  setproductData({...productData,skuTag:a })
  // console.log(e.toString())
  
  // let tags=[]
  // tags=skuTag
  // tags.push(e.target)
}
const handleColors=(e)=>{
  // e.preventDefault();

  // console.
  // console.log(e)
  setcolorOptions(e)
  var names = e.map(function(item) {
    return item['value'];
  });
  
  // console.log(names)
  const a=names.toString()
  console.log(a)
  setproductData({...productData,skuColor:a })
  // console.log(e.toString())
  
  // let tags=[]
  // tags=skuTag
  // tags.push(e.target)
}
const handleSubmit = async (e) => {
  e.preventDefault();
    // console.log(data);
    const mImage=images
    const datas={...productData,mImage}
    console.log(datas)
    
     let data = new FormData(forms.current)
     data.append('merchantId',companyId)
   
     console.log(data)


     try {
      const tok = await axios.post("http://localhost:4000/api/product/create", data,{
        headers:{
          authorization : token
        }
      })
      console.log(tok)
      
    } catch (error) {
      console.log(error)
    }
  console.log(data)
  const tok = await axios.post("http://localhost:4000/api/product/create", data,{
    headers:{
      authorization : token
    }
  })
  console.log(tok)



 


}




  const addCollectionShots = (e) => {
    e.preventDefault();
    setCollectionShots(() => collectionShots + 1);
  };
  const previewImage = (e,i) => {
    setImg(e.target.files[0]);
    handleChangeInputFile(e,i)

  };


  


  return (

    <div>
      <div className="container py-4">
        <form ref={forms}>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="mb-3 ">
                
                <input
                  type="text"
                  className="form-control  "
                  name="skuName"
                  id=""
                  placeholder="Product Name"
                  onChange={handleChangeInput}
                  valu={skuName}
                />
                {/* <label for="product_name">Hi</label> */}
                {/* <small className="text-primary">This field is required</small> */}
              </div>
              <div className="mb-3 row  d-flex file_cust ">
                <div className="col input-group mb-3">
                  <div class="input-group-prepend" >
                    <span  class="input-group-text" id="basic-addon1" >
                      $
                    </span>
                  </div>
                  <input
                    className="form-control "
                    type="number"
                    name="skuprice"
                    id=""
                    placeholder="00"
                    onChange={handleChangeInput}
                    value={skuprice}
                    
                  />
                  {/* <small className="text-primary">This field is required</small> */}
                </div>
                {/* <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="parentId"
                    id=""
                    placeholder="Product Id"
                  />
                </div>
              </div> */}

                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="skuCompany"
                    id=""
                    placeholder="Company"
                    onChange={handleChangeInput}
                  />
                </div>
              </div>

              
              <div className="mb-3">
                <CreatableSelect
                  options={options}
                  isMulti
                  name="skuTag"
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Tags"
                  onChange={handleChangeTag}
                  value={tags}
                />
                <small className="text-primary">This field is required</small>
              </div>
              
              <div className=" row">
                <div className="col mb-3">
                  <CreatableSelect options={colorOptionss} placeholder="Color" isMulti name='color' value={colorOptions} onChange={handleColors}></CreatableSelect>
                </div>
                {/* <div className="col mb-3">
                  <Select
                    options={deliveryOptions}
                    placeholder="Delivery"
                  ></Select>
                </div> */}
              </div>
             
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control "
                  name="stockQty"
                  id=""
                  placeholder="Quantity"
                  value={stockQty}
                  onChange={handleChangeInput}
                />
                <small className="text-primary">This field is required</small>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control "
                  name="promoPrice"
                  id=""
                  placeholder="Promo Price"
                  value={promoPrice}
                  onChange={handleChangeInput}
                />
                <small className="text-primary">This field is required</small>
              </div>
              {/* <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control "
                  name="product_name"
                  id=""
                  placeholder="Product Details"
                  rows="4"
                />
                <small className="text-primary">This field is required</small>
              </div> */}
              {/* <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control "
                  name="product_name"
                  id=""
                  placeholder="Additional Instructions"
                  rows="4"
                />
              </div> */}
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="d-flex flex-column">
                <div className="d-flex mb-4 file-cust ">
                  <div className="mx-2">

                    {
                       
                        Array.from({ length: collectionShots }, (v, i) => i).map(i => (
                          <div class="custom-file mb-3">
                          <input
                            type="file"
                            name="mImage"
                            class="custom-file-input change"
                            id="customFile1"
                            
                            onChange={(e)=>previewImage(e,i)}
                          />
                          <label class="custom-file-label" for="customFile2">
                            {
                             
                             images[i]? images[i].name: <> Upload Image # {i}</>
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
                   
                  </div>
                  <div className="mx-2">
                  {
                       
                       Array.from({ length: collectionShots }, (v, i) => i).map(i => (
                         <div class="custom-file mb-3">
                         <input
                           type="file"
                           name="mImage"
                           class="custom-file-input change"
                           id="customFile1"
                           
                           onChange={(e)=>previewImage(e,i+3)}
                         />
                         <label class="custom-file-label" for="customFile2">
                         { 
                                                          images[i+3]? images[i+3].name: <> Upload Image # {i+3}</>

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
                      class="btn-group mb-3 d-inline"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-primary mb-3">
                        In Stock
                      </button>
                      <button type="button" class="btn btn-primary mb-3 " disabled>
                        No Stock
                      </button>
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
              <button className="btn" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;

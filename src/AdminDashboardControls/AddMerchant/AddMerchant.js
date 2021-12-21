import { useState, useContext, useRef } from "react";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import goBack from "../../helpers/goBack";
import "./AddMerchant.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../Context/AuthContext";
import { LoaderContext } from "../../App";
// import {CREATE_MERCHANT} from '../../graphql/mutations'


export default function AddMerchant() {

  const [collectionShots, setCollectionShots] = useState(3);
  const [bannerImages, setbannerImages] = useState(3);
  const [img, setImg] = useState("");
  const [images, setimages] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const {loading,setLoading}=useContext(LoaderContext)
  const initialState = { name: '', address: '', contact: '', email: '', password: '' }
  const [userData, setuserData] = useState(initialState)
  const { name, address, contact, email, password } = userData
  const forms = useRef(null)

  const notify = () => toast("Merchant Added Successfully");

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setuserData({ ...userData, [name]: value })
  }
  const handleChangeInputFile = (e, i) => {
    let imagess = [...images]
    imagess[i] = e.target.files[0]
    setimages(imagess)
  }

  const addCollectionShots = (e) => {
    e.preventDefault();
    setCollectionShots(() => collectionShots + 1);
  };

  const addBannerImages = (e) => {
    e.preventDefault();
    setbannerImages(() => bannerImages + 1);
  };

  const previewImage = (e, i) => {
    setImg(e.target.files[0]);
    handleChangeInputFile(e, i)

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mImage = images
    const datas = { ...userData, mImage }

    let data = new FormData(forms.current)

    try {
      setLoading(true)
       axios.post("http://localhost:4000/api/merchant/create", data, {
        headers: {
          authorization: token
        }
      }).then(res=>{
        setLoading(false);
        notify();
        setuserData(initialState);
        setimages([])
        setImg("")
      })

      

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <DashboardBars>
      <ToastContainer />
      <section id="add-merchant">
        <h4 className="title mb-4">
          <a onClick={goBack}>Merchants </a>
          <span>&#x3e; Add New Merchant</span>
        </h4>
        {loading ? 'Adding Merchant' : <div className="add-merchant-card">
          <h5 className="mb-4">New Merchant</h5>
          <form  ref={forms} className="form-bg" onSubmit={handleSubmit}>
            <div className="form-cols" >
            <div className="colm-1 ">
              <h5 className="mb-3">Details:</h5>
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control "
                  name="name"
                  id=""
                  placeholder="Company Name"
                  value={name}
                  onChange={handleChangeInput}
                  required
                />
                {/* <label for="product_name">Hi</label> */}
                {/* <small className="text-primary">This field is required</small> */}
              </div>
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control "
                  name="address"
                  name="address"
                  id=""
                  placeholder="Adress"
                  value={address}
                  onChange={handleChangeInput}
                  required
                />
                {/* <label for="product_name">Hi</label> */}
                {/* <small className="text-primary">This field is required</small> */}
              </div>
              <div className="mb-3 ">
                <input
                  type="number"
                  className="form-control "
                  name="contact"
                  id=""
                  placeholder="Phone"
                  value={contact}
                  onChange={handleChangeInput}
                  required

                />
                {/* <label for="product_name">Hi</label> */}
                {/* <small className="text-primary">This field is required</small> */}
              </div>
              <div className="mb-3 ">
                <input
                  type="email"
                  className="form-control "
                  name="email"
                  id=""
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeInput}
                  required

                />
                {/* <label for="product_name">Hi</label> */}
                {/* <small className="text-primary">This field is required</small> */}
              </div>
              <div className="mb-3 ">
                <input
                  type="text"
                  className="form-control "
                  name="password"
                  id=""
                  placeholder="Password"
                  value={password}
                  onChange={handleChangeInput}
                  required

                />
                {/* <label for="product_name">Hi</label> */}
                {/* <small className="text-primary">This field is required</small> */}
              </div>
              {/* <input type="text" placeholder="Company Name" />
                            <input type="text" placeholder="Address" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Email" /> */}

              <h5 className="mb-3">Merchant collection shots: </h5>
              <div>
                {/* {Array.from({ length: collectionShots }, (v, i) => i).map(
                  (i) => (
                    <input type="file" onChange={previewImage} />
                  )
                )} */}
                {Array.from({ length: collectionShots }, (v, i) => i).map(
                  (i) => (
                    <div class="custom-file mb-3">
                      <input
                        type="file"
                        name="mImage"
                        class="custom-file-input change"
                        id="customFile1"
                        onChange={(e) => previewImage(e, i)}
                        required
                      />
                      <label class="custom-file-label" for="customFile2">
                        {
                          images[i] ? images[i].name : <> Upload Image # {i}</>
                        }
                      </label>
                    </div>

                    // <input type="file" onChange={previewImage} />
                  )
                )}
                <br />
                {/* <button className="btn mb-4" onClick={addCollectionShots}>
                  Add more
                </button> */}
              </div>
            </div>
            <div className="colm-2 ml-3">
              <h5 className="mb-3">CTA Banner Images: </h5>
              <div>
                {/* {Array.from({ length: bannerImages }, (v, i) => i).map((i) => (
                  <input type="file" onChange={previewImage} />
                ))} */}
                {Array.from({ length: bannerImages }, (v, i) => i).map((i) => (
                  <div class="custom-file mb-3">
                    <input
                      type="file"
                      name="mImage"
                      class="custom-file-input change"
                      id="customFile1"
                      onChange={(e) => previewImage(e, i + 3)}
                      required
                    />
                    <label class="custom-file-label" for="customFile2">
                      {
                        images[i + 3] ? images[i + 3].name : <> Upload Image # {i}</>
                      }
                    </label>
                  </div>

                  // <input type="file" onChange={previewImage} />
                ))}
                <br />
                {/* <button className="btn" onClick={addBannerImages}>
                  Add more
                </button> */}
              </div>
              {/* <div className="previewer">
                {img && <img src={URL.createObjectURL(img)} alt="preview" />}
              </div> */}
              <div className="  text-white w-100 text-center  ">
                {/* <span className="my-auto">Preview</span> */}
                {/* {img && <img src={URL.createObjectURL(img)} alt="preview" />} */}
                <div className="previewer my-auto">
                  {img && <img src={URL.createObjectURL(img)} alt="preview" />}
                </div>

                {/* <img src={img} alt="images" style={{objectFit:"contain",width:"100%",height:"100%"}} className="" /> */}
              </div>
            </div>
            </div>
     
            <br />
            <div className="save-btns" >
          <button className="btn" disabled={loading}>Cancel</button>
          <button className="btn" type="submit"  disabled={loading}>Save</button>
        </div>
            {/* <input type="submit" value="save" /> */}
          </form>
        </div>}
        {/* <div className="save-btns">
          <button className="btn" disabled={loading}>Cancel</button>
          <button className="btn" onClick={handleSubmit} disabled={loading}>Save</button>
        </div> */}
      </section>
    </DashboardBars>
  );
}

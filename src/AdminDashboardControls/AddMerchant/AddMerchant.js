import { useState } from "react";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import goBack from "../../helpers/goBack";
import "./AddMerchant.css";

export default function AddMerchant() {
  const [collectionShots, setCollectionShots] = useState(3);
  const [bannerImages, setbannerImages] = useState(3);
  const [img, setImg] = useState("");

  const addCollectionShots = (e) => {
    e.preventDefault();
    setCollectionShots(() => collectionShots + 1);
  };

  const addBannerImages = (e) => {
    e.preventDefault();
    setbannerImages(() => bannerImages + 1);
  };

  const previewImage = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <DashboardBars>
      <section id="add-merchant">
        <h4 className="title mb-4">
          <a onClick={goBack}>Merchants </a>
          <span>&#x3e; Add New Merchant</span>
        </h4>

        <div className="add-merchant-card">
          <h5 className="mb-4">New Merchant</h5>
          <form className="form-cols">
            <div className="colm-1 ">
              <h5 className="mb-3">Details:</h5>
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
                        name="file"
                        class="custom-file-input change"
                        id="customFile1"
                        onChange={previewImage}
                      />
                      <label class="custom-file-label" for="customFile2">
                        Upload Image # {i}
                      </label>
                    </div>

                    // <input type="file" onChange={previewImage} />
                  )
                )}
                <br />
                <button className="btn mb-4" onClick={addCollectionShots}>
                  Add more
                </button>
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
                      name="file"
                      class="custom-file-input change"
                      id="customFile1"
                      onChange={previewImage}
                    />
                    <label class="custom-file-label" for="customFile2">
                      Upload Image #{i}
                    </label>
                  </div>

                  // <input type="file" onChange={previewImage} />
                ))}
                <br />
                <button className="btn" onClick={addBannerImages}>
                  Add more
                </button>
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
          </form>
        </div>
        <div className="save-btns">
          <button className="btn">Cancel</button>
          <button className="btn">Save</button>
        </div>
      </section>
    </DashboardBars>
  );
}

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardBars from '../../components/DashboardBars/DashboardBars';
import './AddMerchant.css';

export default function AddMerchant({ setRoute }) {
    const history = useHistory();
    const [collectionShots, setCollectionShots] = useState(3);
    const [bannerImages, setbannerImages] = useState(3);
    const [img, setImg] = useState('');

    const goToPreviousPath = () => {
        history.goBack()
    }

    const addCollectionShots = (e) => {
        e.preventDefault();
        setCollectionShots(() => collectionShots + 1);
    }

    const addBannerImages = (e) => {
        e.preventDefault();
        setbannerImages(() => bannerImages + 1);
    }

    const previewImage = (e) => {
        setImg(e.target.files[0]);
    }

    return (
        <DashboardBars>
            <section id="add-merchant">
                <h4 className="title mb-4">
                    <a onClick={goToPreviousPath}>Merchants </a>
                    <span>&#x3e; Add New Merchant</span>
                </h4>

                <div className="add-merchant-card">
                    <h5 className="mb-4">New Merchant</h5>
                    <form className="form-cols">
                        <div className="colm-1">
                            <h5 className="mb-3">Details:</h5>
                            <input type="text" placeholder="Company Name" />
                            <input type="text" placeholder="Address" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Email" />

                            <h5 className="mb-3">Merchant collection shots: </h5>
                            <div>
                                {
                                    Array.from({ length: collectionShots }, (v, i) => i).map(i => (
                                        <input type="file" onChange={previewImage} />
                                    ))
                                }
                                <br />
                                <button className="btn mb-4" onClick={addCollectionShots}>Add more</button>
                            </div>
                        </div>
                        <div className="colm-2">
                            <h5 className="mb-3">CTA Banner Images: </h5>
                            <div>

                                {
                                    Array.from({ length: bannerImages }, (v, i) => i).map(i => (
                                        <input type="file" onChange={previewImage} />
                                    ))
                                }
                                <br />
                                <button className="btn" onClick={addBannerImages}>Add more</button>
                            </div>
                            <div className="previewer">
                                {img && <img src={URL.createObjectURL(img)} alt="preview" />}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="save-btns">
                    <button className='btn'>
                        Cancel
                    </button>
                    <button className='btn'>
                        Save
                    </button>
                </div>
            </section>
        </DashboardBars>
    )
}

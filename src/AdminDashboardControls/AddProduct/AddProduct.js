import { useState, useEffect, useRef } from "react";
import DashboardBars from "../../components/DashboardBars/DashboardBars";
import goBack from "../../helpers/goBack";
import "./AddProduct.css";
import { Tab, Tabs } from "react-bootstrap";
import Product from "./SubComponents/Product";
import SubProduct from "./SubComponents/SubProduct";
export default function AddProduct() {

  const [img, setImg] = useState("");
  const [key, setKey] = useState('product');
  const tabref = useRef(null)
  const tab = [{
    eventKey: "product",
    title: "Product",
    content: <Product />
  }, {
    eventKey: "subproduct",
    title: "Sub Product",
    content: <SubProduct />
  }
  ]
  const [tabss, settabss] = useState(tab)
  const [index, setindex] = useState(1)

  const previewImage = (e) => {
    setImg(e.target.files[0]);
  };
  const addTab = async () => {
    if (key == "add") {
      const ch = await settabss([
        ...tabss, {
          eventKey: `subproduct${tabss.length}`,
          title: `Sub Product${index}`,
          content: <SubProduct />
        }
      ])
      setindex(index + 1)
    }
  }

  useEffect(() => {
    addTab().then(() => console.log(tabss))

    setKey(tabss[tabss.length - 1].eventKey)
    console.log(tabref.current)

  }, [key == "add"])
  useEffect(() => {
    setKey("product")
  }, [])

  return (
    <DashboardBars>
      <section id="add-product">
        <h4 className="title mb-4">
          <a onClick={goBack}>Products </a>
          <span>&#x3e; Add New Product</span>
        </h4>

        <div className="add-product-card">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {
              tabss.map((value, index) => {
                return (<Tab key={index} eventKey={value.eventKey} title={value.title}>
                  {value.content}
                </Tab>)
              })
            }

            <Tab eventKey="add" title="+" ref={tabref}>

            </Tab>
          </Tabs>
        </div>

      </section>
    </DashboardBars>
  );
}

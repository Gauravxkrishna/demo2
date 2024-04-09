import Input from "./Components/Input";
import Output from "./Components/Output";
import './App.css'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./Components/Header/Navbar";

let App = () => {

  let [products, setProduct] = useState([
    {
      item_id: 10032,
      brand: "Bewakoof",
      name: "Men's Gold Flame Relaxed Fit Short Kurta",
      size: "M",
      price: "299",
      image: "https://images.bewakoof.com/t1080/men-s-gold-flame-solid-short-kurta-502497-1663931320-1.jpg"
    },
    {
      item_id: 10033,
      brand: "Luis Philip",
      name: "Flame Relaxed Fit Short Kurta",
      size: "L",
      price: "399",
      image: "https://images.bewakoof.com/t1080/men-s-olive-relaxed-fit-short-kurta-302581-1663931236-1.jpg"

    }
  ]);

  let updateProps = (row) => {
    setProduct([...products, row])
    console.log(row);
  }
  let onRemove = (id) => {

    products = products.filter((row) => {
      return row.item_id !== id;
    });
    setProduct(products);

  }
  return <div className="main">
    <div className="basicexample">
      <BasicExample></BasicExample>
    </div>
    <div className="output">
      <h1>Bewakoof</h1>
      {
        products.map((item) => {
          return <Output key={item.item_id} onRemove={onRemove} data={item}></Output>
        })
      }
    </div>
    <div className="input">
      <Input updateProps={updateProps} />
    </div>

  </div>


}
export default App;
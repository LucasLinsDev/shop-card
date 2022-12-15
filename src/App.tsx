import { Card } from "./components/Card";
import { CardContextProvider } from "./context/card-context";
import { products } from "./assets/data/products";


function App() {
  return (
    <CardContextProvider>
          <div className="App grid">
             {products.map((props)=>(
                <Card id={props.id} key={props.id} title={props.title} oldprice={props.oldprice} price={props.price} parcelado={props.parcelado} img={props.img}/>
             ))}           
          </div>
    </CardContextProvider>
  );
}

export default App;

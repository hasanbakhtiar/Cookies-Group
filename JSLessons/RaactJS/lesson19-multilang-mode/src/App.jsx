import "./config/i18n";
import { useTranslation } from 'react-i18next';
import Card from "./components/Card";
import productdata from "./data/productdata";
function App() {
  const { t, i18n } = useTranslation();

  const handleClick =(lang)=>{
     i18n.changeLanguage(lang);
  }

  return (<>
  <div className="container mt-5">
  <button className="btn btn-primary ms-3" onClick={()=>{handleClick("az")}}>az</button>
    <button className="btn btn-primary ms-3" onClick={()=>{handleClick("en")}}>en</button>
    <button className="btn btn-primary ms-3" onClick={()=>{handleClick("it")}}>it</button>

    <div className="mt-5">
      <h1>{t("screenalert.header")}</h1>
      <p>{t("screenalert.text")}</p>
    <div className="row">
      {productdata.map((fd,i)=>{
       return <Card key={i}  price={fd.price} title={t(`title.${i}`)  }  desc={t(`desc.${i}`)}/>

      })}
    </div>
    </div>
  </div>
  </>);
}

export default App;

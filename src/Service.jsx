import "./App.css";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Oue Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((curr,index)=>{
                return <Card key={index} imgsrc={curr.imgsrc} title={curr.title}/>
              })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
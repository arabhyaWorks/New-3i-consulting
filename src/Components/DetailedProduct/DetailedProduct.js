import React from "react";
import HeroSection from '../HeroSection/HeroSection';
import heroImg from '../../Assets/Images/Rectangle 852.png';
import './DetailedProduct.css';
import liCheckImg from '../../Assets/Images/fi_check-circle.png'
import squareBoxes from '../../Assets/Images/detailedPrdctBox.png';
import squareBlueBox from '../../Assets/Images/Rectangle 8.png'
import firstImg from '../../Assets/Images/Rectangle 443 (1).png';
import secondImg from '../../Assets/Images/Rectangle 443 (2).png';
import thirdImg from '../../Assets/Images/Rectangle 443-3.png';
import { useParams } from "react-router";
import { AllProduct } from "../../Context/AllProduct";
import { Link } from "react-router-dom";



function DetailedProduct(props){
   
  // const params = useParams();
  // const p_id = params.pId
  // // console.log(p_id);
  // const products = AllProduct.find(function(){
  //   return p_id
  // })
// console.log(products);

const params = useParams();
const p_id = params.pId;

// Assuming AllProduct is an array of product objects and each product has an 'id' field
const products = AllProduct.find(product => product.id === p_id);

console.log(products);

    return(<>
    
    <HeroSection img={products.hero}/>
    <div className="detailedProductContainer p-0 my-5 container-fluid">
        <h1 className="text-center">{products.h1}</h1>
        <div className="detailedProductImgContainer">
            <img src={products.bannerImg}/>
            <div className="detailedProductImgContent container-fluid p-0">
                <div className="straightDiv">
                <h5>Deliverables</h5>
                <div className="d-flex liImg ">
               <img className="" src={liCheckImg}/>
               <li>{products.features.first}</li>
               </div>
               <div className="d-flex liImg ">
               <img className="" src={liCheckImg}/>
               <li> {products.features.second}</li>
               </div>
               <div className="d-flex  liImg ">
               <img className="" src={liCheckImg}/>
               <li>{products.features.third}</li>
               </div>
               <div className="d-flex  liImg">
               <img className="" src={liCheckImg}/>
               <li>{products.features.fourth}</li>
               </div>
               <div className="d-flex  liImg">
               <img className=""  src={liCheckImg}/>
               <li>{products.features.first}</li>
               </div>
               <div className="d-flex  liImg">
               <img className=""  src={liCheckImg}/>
               <li>{products.features.second}</li>
               </div>
               <div className="d-flex  liImg">
               <img className=""  src={liCheckImg}/>
               <li>{products.features.third}</li>
               </div>
               <div className="d-flex  liImg">
               <img className=""  src={liCheckImg}/>
               <li>{products.features.first}</li>
               </div>
               <div className="d-flex  liImg">
               <img className=""  src={liCheckImg}/>
               <li>{products.features.second}</li>
               </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0 imgDivContainer">
             <div className=" imgDiv"><img style={{width :"10%", height:"10%", objectFit: "cover" }} src={squareBoxes}/></div>
                <p className="container ">{products.description}</p>
        </div>
        <div className="container-fluid liveProjectContainer">
            <div className="text-center"> 
            <h6> <img className='mb-1' src={squareBlueBox}/> Our Project </h6>
            <h5 className='mb-3'>Live Projects</h5>
            </div>

        <div className="container my-5 p-0 liveProjectSection">
          <div className=" liveProjectSectionImg">
            <img src={products.firstProjectImg} />
          </div>
          <div className=" liveProjectSectionContent">
            <div className="">
              <h2 className="">{products.firstProjectTitle}</h2>
              <p className="text-muted"> {products.firstProjectDesc} </p>
              <button className="btn"><Link to={products.firstProjectBtnLink}>Visit Website</Link></button>
            </div>
          </div>
        </div>

        {/* 2nd section */}
        <div className="container my-5 p-0 liveProjectSection">
          <div className=" liveProjectSectionImg">
            <img src={products.secondProjectImg} />
          </div>
          <div className=" liveProjectSectionContent">
            <div className="">
              <h2 className=""> {products.secondProjectTitle} </h2>
              <p className="text-muted"> {products.secondProjectDesc} </p>
              <button className="btn"><Link to={products.secondProjectBtnLink}>Visit Website</Link></button>
            </div>
          </div>
        </div>

        {/* 3rd section */}
        <div className="container my-5 p-0 liveProjectSection">
          <div className=" liveProjectSectionImg">
            <img src={products.thirdProjectImg} />
          </div>
          <div className=" liveProjectSectionContent">
            <div className="">
              <h2 className=""> {products.thirdProjectTitle} </h2>
              <p className="text-muted"> {products.thirdProjectDesc} </p>
              <button className="btn"><Link to={products.thirdProjectBtnLink}>Visit Website</Link></button>
            </div>
          </div>
        </div>
        </div>

    </div>
    </>)
}

export default React.memo(DetailedProduct);
import React, { useEffect, useState } from "react";
import SinglePage from './SinglePage.css';
import detials from "../data/AllData";
import SingleNav from "./SingleNavbar";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCaart } from "../redux/routing";
// import Home from "../Homepage/navbar";

function Single() {
    const [data, setData] = useState({});
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const [Foods, setFoods] = useState(detials);
    const dispatch=useDispatch();

    useEffect(() => {

        const Categories = detials.find((item) => item.id == query.get("id"));
        setData(Categories);

    })
    function order() {
        return (
            alert("your order successfully")
        )
    }
    const suggues = detials.filter((e) => e.key === data.key)
    console.log(suggues);

    return (
        <div>
            < SingleNav/>
            <div className="section">

                <div className="main">
                    <div className="main-image">

                        <img src={data.url} alt="images" />


                        <div id="namedise">
                            <h2> name: {data.name}</h2>
                            <p id="lorn">{data.description}</p>
                            <div className="main-btn  p-4 d-flex justify-content-around">

                                <button className="btn btn-warning" onClick={()=>dispatch(addCaart())}>add To Cart</button>
                                <button className="btn btn-warning" onClick={() => order()}>Order now</button>

                            </div>

                        </div>



                    </div>
                    <h3 className="para">Rating:{data.rating}</h3>


                </div>

            </div>
            <div>
                <h1 id="heade">Suggestion</h1>
                <div className=" p-5 gap-4 container-2">{

                    suggues.map((e) => {
                        return (
                            <div id="images">

                                <div>

                                    <img src={e.url} alt="images" />

                                </div>
                                <div id="nameprice">
                                    <h5>{e.name}</h5>
                                    <p>price:{e.price}</p>
                                </div>
                                <div id="addtocart">
                                    <button id="reandom" onClick={() => dispatch(addCaart(e))}>Add to cart</button>
                                </div>
                            </div>




                        )
                    })
                }</div>
            </div>


        </div>
    )

}
export default Single


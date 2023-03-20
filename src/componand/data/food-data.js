import React, { useState } from "react";
import detials from "./AllData";
import { addCaart } from "../redux/routing";
import './food-data.css';
import { useDispatch } from "react-redux";
import Discribe from "../Fooder/discribe";
import { useHistory } from "react-router-dom";

function Food() {


  const dispatch = useDispatch();
  const [data, setData] = useState(detials)
  function india(item) {
    const india = detials.filter((e) => e.key === item)
    setData(india);
  }
  function china(item) {
    const china = detials.filter((e) => e.key === item)
    setData(china);
  }
  function wes(item) {
    const wes = detials.filter((e) => e.key === item)
    setData(wes);
  }
  function veg(item) {
    const veg = detials.filter((e) => e.key === item)
    setData(veg);
  }
  function all() {
    const all = detials.filter((e) => e.key)
    setData(all);
  }
  const history = useHistory();

  function click1(id) {
    return (
      history.push(`/single?id=${id}`)

    )
  }
  const [input, setInput] = useState(" ");


  function Search() {
    const inputValue = input;
    const Search = data.filter((item) => item.name === inputValue);
    setData(Search);
  }



  return (

    <div>
      <div className="menu-tabs p-4 d-flex justify-content-around">
        <button className="btn btn-warning" onClick={() => wes("western")}>western</button>
        <button className="btn btn-warning" onClick={() => veg("veg")}>veg</button>
        <button className="btn btn-warning" onClick={() => india("non-veg")}>non-veg</button>
        <button className="btn btn-warning" onClick={() => china("chinese")}>chinese</button>
        <button className="btn btn-warning" onClick={() => all("all")}>all</button>

      </div>
      <div id="navitem">
        <input type="text" id="input"
          value={input} placeholder="search food"
          onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => Search()} id="searchbtn">search</button>

      </div>
      <div className=" p-5 gap-5" id="dises">{data.map((e) => {

        return (
          <div id="images">
            <div onClick={() => click1(e.id)}>

              <img src={e.url} alt="images" />

            </div>


            <h5 id="paran">{e.name}</h5>
            <p id="paran">price:{e.price}</p>
            <div id="addtocart">
              <button id="back" onClick={() => dispatch(addCaart(e))}>Add to cart</button>
            </div>
          </div>
        )
      })}</div>
      <div>
        <Discribe />

      </div>



    </div>


  )
}


export default Food
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartsect } from "../redux/routing";

function SingleNav() {
    const cart6 = useSelector(cartsect)
    const histroy = useHistory();
    function cart1() {
        return histroy.push("/cart")
    }
    return (
        <div>
            <div>
                <div id="navbar">
                    <div id="logo">
                        <img id="img-0" src="https://st.depositphotos.com/1026166/3160/v/600/depositphotos_31605339-stock-illustration-restaurant-food-quality-badge.jpg" width="40px" alt="imgage logo"></img>
                    </div>
                    <div>
                        <h2> Welcom  Food STALL</h2>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Cantact">Cantact</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#Review">Review</a></li>
                    </ul>
                    <div id="cart">
                        <img  id="img-1" onClick={() => cart1()} src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-shopping-cart-confirmation-item-icon-image_1144353.jpg" alt="cartimgage" width="25px"></img>
                        <p>{cart6.length}</p> 
                    </div>
                    <div id="profile">
                        <img id="img-2"
                            src="https://images.pexels.com/photos/3105572/pexels-photo-3105572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profileimage"></img>
                    </div>
                    <div id="setting">
                        <img id="img-3"
                            src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-128.png" width="20px" alt="settingl"></img>
                    </div>


                </div>
            </div>
        </div>
    )

}
export default SingleNav
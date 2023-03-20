import React from "react";
import profile from "../Homepage/Profile.css";



const Profile = () => {
    return (
        <div className="flex flex-col dropdownprofile">

            <ul className=" dropimg flex-col g-5 p-3">

                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" width="28px" alt="icon"></img><span>My Profile</span><br></br><br></br>
                <img src="https://cdn2.iconfinder.com/data/icons/dottie-user-part-1/24/user_040-edit-profile-account-people-512.png" width="28px" alt="icon"></img><span>Edit Profile</span> <br></br><br></br>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/421/871/small/Multimedia__281_29.jpg" width="28px" alt="icon"></img><span>Inbox</span><br></br><br></br>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/006/542/150/small/setting-icon-design-tools-cog-gear-line-style-for-graphic-design-logos-web-sites-social-media-ui-mobile-app-free-vector.jpg" width="28px" alt="icon"></img><span>Setting</span><br></br><br></br>
                <img src="https://static.thenounproject.com/png/4600406-200.png" width="28px" alt="icon"></img><span>Helps</span><br></br><br></br>
                




            </ul>

        </div>
    )

}
export default Profile
import * as React from "react";
import Style from "./index.css";


const navbar = () => {
  return (
    <>
   <nav>
   <div class="container">
     <h2 class="log">EVENTUS</h2>
     <div class="search-bar">
       <i class="uil uil-search"></i>
       <input type="search" placeholder="Search here..." />
     </div>
     <div class="create">
       <label class="btn btn-primary" for="create-post">Login   </label>
       <div class="profile-photo">
         <img src="https://picsum.photos/200" />
       </div>
     </div>
   </div>
 </nav>

 </>
  );
};

export default navbar;

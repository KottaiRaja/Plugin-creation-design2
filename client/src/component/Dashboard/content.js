import React from "react";
import './content.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import BasicExample from "../Navbar/Navbar";

export function Content(){
    return(
        <>
            <BasicExample/>
          <div className="content_bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 con1 text-center col-10">
                        <p className="dash_con">CREATE A RESUME AND DOWNLOAD IT RIGHT AWAY. THERE IS NO NEED FOR PRIOR EXPERIENCE. OBTAIN ADDITIONAL INTERVIEWS!</p>

                       <Link to='/general_info'><button className="btn_con btn btn-outline-info mt-4">Start Resume Builder</button></Link>


                    </div>

                </div>

            </div>

          </div>

        </>
    )
}
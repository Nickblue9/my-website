import React from "react";

import POPOSSpace from "../space/POPOSSpace";

import './POPOSList.css'

import data from '../static/sfpopos-data'

function POPOSList(){
    const spaces = data.map(( { title, address, images, hours }, id ) => {
        return(
            <POPOSSpace
                id = {id}
                key = {title}
                name = {title}
                address = {address}
                image = {images[0]}
                hours = {hours}
            />
        )
    });

    return(
        <div className="POPOSList">
            { spaces }
        </div>
    )
}

export default POPOSList;
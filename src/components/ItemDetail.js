import React, { Component, useState } from "react";
import close from "./assets/close.png"

import("./items.css")


const ItemDetail = ({ item }) => {

    const { nombre, precio, id, img, imgP } = item;
    return (
        <>
            <div class="ventana">
                <div class={id} id={id}>
                <a href="#close"><img src={close} className="closeBtm"></img></a>
                    <div className="sPro"> 
                        <img className="img" src={imgP}></img>
                        <div className="dcn">
                            <h1>{nombre}</h1>
                            <h2>Precio:{precio}</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Tenetur, nesciunt vitae perspiciatis accusantium exercitationem impedit repellendus dolor,
                                obcaecati delectus similique nam pariatur nihil dicta animi saepe doloremque deleniti ipsa voluptatum.
                            </p>
                        </div>


                        
                    </div>


                </div>
            </div>
        </>

    )
}

export default ItemDetail;
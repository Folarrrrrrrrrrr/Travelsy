import React from "react"

const Button =( { handleBtnClick, children,btnStyle})=>{

    return(
        <div onClick={handleBtnClick}  className={btnStyle} style={{cursor:"pointer"}} > 
            {children}
        </div>
    )
}
export default Button;
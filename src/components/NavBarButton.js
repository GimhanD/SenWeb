import React from "react";

function NavBarButton({title}) {
    return(
        <div className="p-2 m-4">
            <button className="text-white font-semibold text-lg hover:text-lotus-red">{title}</button>
        </div>
    );
}

export default NavBarButton;
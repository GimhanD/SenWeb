import React from "react";

function NavBarButton({title}) {
    return(
        <div className="p-2 m-4">
            <text className="text-white font-semibold text-lg">{title}</text>
        </div>
    );
}

export default NavBarButton;
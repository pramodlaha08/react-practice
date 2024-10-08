import React from "react";
import styles from './style.module.css'

function Navbar({data}) {
    return (
        <div className="w-full px-20 py-3 flex items-center justify-between">
            <h3 className={`${styles.color} ${styles.font}`}>Orange</h3>
            <div className="flex px-4 py-2 bg-orange-600 text-white rounded-md text-sm gap-3">
                <h3>Favourites</h3>
                <h4>{ data.filter((item)=> item.added === true).length}</h4>
            </div>
        </div>
    )
}


export default Navbar;
import React, { useState } from 'react';

function FilterButton(props) {
    return(
        <button
            onClick={() => {
                props.setIsClicked(!props.isClicked);
                // console.log("The is clicked is:", props.isClicked)
            }}
        >
            {props.isClicked ? "Popular" : "Date"}
        </button>
    )

    // return (
    //     <button type='button' className='btn toggle-btn' aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
    //         <span>{props.name}</span>
    //     </button>
    // )
}

export default FilterButton;
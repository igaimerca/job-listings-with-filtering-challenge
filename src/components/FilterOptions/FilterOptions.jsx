import React from 'react'

function FilterOptions() {
    return (
        <div className="rounded-md w-9/12 bg-white flex items-center justify-start shadow-md h-auto p-[1.1rem] -mt-8 m-auto">
            <ul className="filter-ul flex items-center justify-center light-grayish-cyan-bg">
                <li className="m-0 hover:bg-transparent hover:text-black cursor-default">
                    Frontend
                </li>
                <li className="m-0 text-white bg-black rounded-t-md">
                    X
                </li>
            </ul>
        </div>
    )
}

export default FilterOptions;
import React from 'react'

function FilterOptions({removeOption, option}) {        
    return (
            <ul className="filter-ul flex items-center justify-center light-grayish-cyan-bg m-2">
                <li className="m-0 hover:bg-transparent hover:text-black cursor-default">
                    {option}
                </li>
                <li className="m-0 text-white bg-black rounded-none hover:rounded-none" onClick={() => removeOption(option)}>
                    X
                </li>
            </ul>
    )
}

export default FilterOptions;
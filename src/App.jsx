import { useState, useEffect } from 'react'
import FilterOptions from './components/FilterOptions/FilterOptions';
import Header from './components/Header/Header';
import JobCard from './components/JobCard/JobCard';
import { jobs } from './data';

function App() {

    let [data, setData] = useState(jobs);
    let [filterOptions, setFilterOptions] = useState(["Senior"]);

    useEffect(() => {
        for (let i = 0; i < filterOptions.length; i++) {
            setData(data.filter((job) => job.languages.includes(filterOptions[i]) || filterOptions[i] == job.role || filterOptions[i] == job.level))
        }
    }, [filterOptions])

    return (
        <div className="h-full">
            <Header />
            <div className="flex-wrap rounded-md w-9/12 bg-white flex items-center justify-start shadow-md h-auto p-[1.1rem] -mt-8 m-auto">
                {filterOptions && filterOptions.map((option) => (
                    <FilterOptions
                        option={option}
                        removeOption={(option) => setFilterOptions(filterOptions.filter((op) => op != option))} />
                ))}
            </div>
            {data && data.map((job) => (
                <JobCard
                    logo={job.logo}
                    position={job.position}
                    company={job.company}
                    langauges={job.languages}
                    role={job.role}
                    level={job.level}
                    contract={job.contract}
                />
            ))}
        </div>
    )
}

export default App

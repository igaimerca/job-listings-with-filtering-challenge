import { useState } from 'react'
import Header from './components/Header/Header';
import JobCard from './components/JobCard/JobCard';
import { jobs } from './data';

function App() {

    return (
        <div className="h-full">
            <Header />
            {jobs && jobs.map((job) => (
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

import React from 'react';
import data from '../../../src/data.json'

const Projects = () => {
    console.log(data)
    return (
        <div>

                <div>
                    <h2>My Projects</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                    {
                data?.map((project) => <div key={project._id} className="p-4 border border-lime-800 card bg-base-100 shadow-2xl">
                    <figure><img className='h-[250px] rounded-xl' src={project?.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{project?.name}</h2>
                        <p>{project.about}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Live site</button>
                        </div>
                    </div>
                    </div>
                )
            }
                </div>
            
        </div>
    );
};

export default Projects;
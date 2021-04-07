import React, { useEffect, useRef, useState } from 'react'
import {projService} from '../services/projService.js'
import {ProjPreview} from './ProjPreview.jsx'
export const ProjList=() =>{
    const [projs, setProjs] = useState(null)

    useEffect(async() => {
      const projFromService= await projService.query()
      console.log('projFromService',projFromService);
         setProjs(projFromService)
         console.log('proj',projs);
        
    }, [])
    
    console.log('proj',projs);
    if(!projs) return <h1>Loading...</h1>
    return (
        <section className="proj-list">
            <h2><a id="projects"></a>PROJECTS</h2>
        <section className="main-container">
            <h1>
            Here are a few projects I've worked on recently ,and Also, a few projects from my beginnings
            </h1>
        <div className=' card-continer '>
            {projs.map(proj =>
                <ProjPreview key={proj.id} proj={proj} />
            )}
        </div>
        </section>
        </section>
    )
}

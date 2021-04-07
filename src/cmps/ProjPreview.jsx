import imgG from '../assets/images/sunday.png'
import vue from '../assets/images/vue.svg'
import react from '../assets/images/react.svg'


export const ProjPreview=({proj})=> {
    const { img,frameworkImg,link} = proj
    return (
        <article className="card-grid">
        <a href={link}><img className="proj-img" src={`img/${img}.png`} /></a>
        <div className="card-info">

        <div className="flex space-between align-center proj-name">
        <p>{proj.projName}</p>
        {/* <img  src={`img/${frameworkImg}.svg`} alt=""/>  */}
        
          <img className="framework-img" src={`https://res.cloudinary.com/dlqyarvbh/image/upload/v1615307873/protfolio/${frameworkImg}.svg`}  /> 
      
        </div>
        <p className="flex proj-title">{proj.title}</p>
        <span className="flex">Hosted on   <a href={`https://${proj.hosting}.com/`}>{proj.hosting}</a></span>
        <div className="links flex space-between">
             {proj.libs.map(lib =>
                <a key={lib} href={`//google.com/search?q=${lib}`}>#{lib}</a>
               
        )}  
        </div>
      
         
        </div>
       
    </article>
    )
}

    import StorageIcon from '@material-ui/icons/Storage';

export const Skills = () => {
    return (
        <div className="main-skills">
            <h2><a id="skills"></a>Skills</h2>
       
            <section className=" main-container">
        <section className="skills-page flex">
            <div className="skill flex column">
                <img src="img/front.svg" className="color-svg" />
                {/* <StorageIcon/> */}
                <strong>Frontend</strong>
                {/* <p>
                    I value simple and refined code,
               <br />
               clean design patterns,
               <br />
               and good UI/UX
               </p> */}
                <span>Relevant Technologies:</span>
                <div className="flex space-between wrap">
            <img src="img/html5.png"/>
            <img src="img/html6.png"/>
            <img src="img/css3.png"/>
            <img src="img/sass.png"/>
            <img src="img/jquery.png"/>
            <img src="img/bootstrap.png"/>
            <img src="img/js.svg"/>
            <img src="img/react.svg"/>
            <img src="img/vue.svg"/>
            <img src="img/angular.svg"/>
            </div>
            </div>


            <div className="skill flex column">
                <img src="img/backend.svg" className="color-svg"  />
                <strong>Backend</strong>
                <p>
                    I like to keep it clean and efficient,
               <br />
               with an emphasis on security
               </p>
                <span>Relevant Technologies:</span>

                <div className="flex space-between">
                    <img src="img/nodejs.png" />
                    <img src="img/socket.png" />
                    <img src="img/api.png" />

                </div>

            </div>



            <div className="skill flex column">
                <img src="img/database.svg"  className="color-svg" />
                <strong>Databases</strong>
                <p>
                    Hands-on experience with
               <br />
               2 of the most used DBs
               </p>
                <span>Relevant Technologies:</span>

                <div className="flex space-between">
                    <img src="img/mongodb.png" />
                    <img src="img/sql.png" />

                </div>

            </div>
        </section>
        </section > 
        </div>
    )
}


import meImg from '../assets/images/me.jpg'
export const AboutMe = () => {
    return (
        <section className="about-me" >
                <h2><a id="about"></a>About me</h2>
            <div className="main-container">
                <div className="flex align-center margin-top">
                    <img src={meImg}/>
                    <p>Hi my name is Almog balila I am 24 years old from Be'er Sheva</p>
                </div>
                <div><p>full stack developer with a passion for thoughtful UI design, collaboration, and teaching.
                Since beginning my journey to become a Full-Stack Developer,
                I've worked countless hours to perfect my code, my designs, and everything related.
                I enjoy coding, whilst keeping the code as clean, simple and reusable as possible.</p></div>

            </div>

        </section>
    )
}

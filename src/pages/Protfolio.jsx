import { AboutMe } from "../cmps/AboutMe"
import { Contact } from "../cmps/Contact"
import { Education } from "../cmps/Education"
import { ProjList } from "../cmps/ProjList"
import { Skills } from "../cmps/Skills"


export const Protfolio = () => {
    return (
        <section className="protfolio">
            <div className="devop-img main-container">
                <h1>I want to <span className="span-bgc">make things</span>
that <span className="span-border">make a difference.</span></h1>
            </div>
            <AboutMe/>
            <ProjList/>
            <Skills/>
            <Education/>
            <Contact/>
        </section>
    )
}

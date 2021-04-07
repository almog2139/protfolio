import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export const Contact = () => {
    const email='almogbalila21@gmail.com'
    return (
        <section className="contact">
            <h2><a id="contact" ></a>Contact</h2>
            <div className="main-container">
                <div className="flex column ">
                    <div className="flex align-center margin-top ">
                        <span><EmailIcon className="contact-icon" /></span>
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}>almogbalila21@gmail.com</a>
                    </div>
                    <div className="flex align-center margin-top">
                        <span><PhoneIcon className="contact-icon" /></span>
                        <a>0548016463</a>
                    </div>
                    <div className="flex align-center margin-top">
                        <span><WhatsAppIcon className="contact-icon" /></span>
                        <a href="https://api.whatsapp.com/send?phone=972548016463&text=">WhatsApp Msg</a>
                    </div>
                    <div className="flex align-center margin-top">
                        <span><GitHubIcon className="contact-icon" /></span>
                        <a href="https://github.com/almog2139">github.com/almog2139</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

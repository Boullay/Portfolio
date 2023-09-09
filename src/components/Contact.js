import IconFacebook from "../assets/Icon-facebook";
import IconLinkedin from "../assets/Icon-linkedin";
import IconX from "../assets/Icon-X";

function Contact() {
    return(
        <div >
            <a href="mailto:louisoncolin@hotmail.fr" className="MyMail">louisoncolin@hotmail.fr</a>
                <p>Ou, si vous préférez les réseaux sociaux</p>
                <div className="List-bnt-socialmedia">
                <a href="https://www.linkedin.com/in/louison-colin-443ab2146/"><IconLinkedin /></a>
                <a href="https://www.facebook.com/louison.colin.5"><IconFacebook/></a>
                <a href="https://twitter.com/Bou_lay26"><IconX /></a>
                </div>
        </div>
    )
}

export default Contact;
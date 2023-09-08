import IconGit from "../assets/Icon-Git";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import '../css/main.css';

function Home() {
    return (<>
        <section>
            <img src="/images/banniere-jaune-noir.avif" alt="bannière jaune et noir" className="banniere" />
            <div className="Presentation">
                <h1>Louison<br />Colin</h1>
                <h2>Intégrateuse Web.</h2>
                <p className="text-presentation">Jeune diplômée de 29 ans, je suis fière de me présenter à vous en tant qu'intégrateuse web junior, et j'ai hâte de démarrer cette nouvelle aventure avec vous.</p>
                <a href="https://github.com/Boullay" className="bnt-Git"><IconGit />GitHub</a>
            </div>
        </section>

        <section id="A-propos">
            <article>
                <h3 className="text-pos _h3">À propos de moi</h3>
                <div className="Block_portrait">
                    <div>
                        <img src="/images/Portrait-min.jpg" alt="Portrait de Louison Colin" className="Portrait" />
                    </div>
                    <p className="text-pos _p">Il m'a fallu du temps pour trouver ma voie, découvrir et apprendre à me connaître. Après moult détour, j'ai enfin découvert ma passion  une reconvertion professionnel Aujourd'hui </p>
                </div>
            </article>
        </section>
        <section id="Mes-projets">
            <hr></hr>
            <h3>Mes projets</h3>
            <Gallery />
        </section>
        <section id="Mes-formations">
            <hr></hr>
            <h3>Mes formations</h3>
            <div className="Block_formation">
                <div className="Formation-img">
                    <img src="/images/yellow-business.avif" alt="Bureau de travaille jaune et noir" />
                </div>
                <div className="ListCards_formation">
                    <div className="Card_formation">
                        <h4>Intégrateuse Web</h4>
                        <span>2023</span>
                        <span>OpenClassrooms</span>
                    </div>
                    <div className="Card_formation">
                        <h4>Licence cinéma 3D</h4>
                        <span>2017</span>
                        <span>L'école Multimédia</span>
                    </div>
                    <div className="Card_formation">
                        <h4>Baccalauréat ES</h4>
                        <span>2013</span>
                        <span>Lycée Darius Milhaud</span>
                    </div>
                </div>
            </div>
        </section>
        <section id="Contact">
            <hr></hr>
            <h3>Contactez moi</h3>
            <Contact />
        </section>
    </>
    )
}

export default Home;
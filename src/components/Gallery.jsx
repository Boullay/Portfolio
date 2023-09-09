import { useState } from 'react';
import projets from '../projets.json'
import Card from './Card';
import ModalProjet from './ModalProjet';

function Gallery() {
    const [project, setProject] = useState();

    return (
        <div className='ListProjets'>
            <ul className='ListCard'>
                {projets.map((projet) =>
                    <Card
                        onClick={() => setProject(projet)}
                        id={projet.id}
                        cover={projet.cover}
                        title={projet.title}
                    />
                )}
                {project && <ModalProjet closeModal={() => setProject(null)} projet={project} />}
            </ul>
        </div>
    )
}

export default Gallery;
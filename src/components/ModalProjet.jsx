import PropTypes from "prop-types";
import IconClose from "../assets/Icon-close";


const ModalProjet = ({ projet, closeModal }) => (
  <div className="ModalProjet">
    <div>
      <button className="bnt_CloseModalProjet" onClick={closeModal}><IconClose /></button>
    </div>
    <div className="ModalProjet__imageContainer">
      <img
        data-testid="card-image-testid"
        src={projet.cover}
        alt={projet.title}
      />
    </div>
    <div className="ModalProjet__title">
      <hr></hr>
      <span>{projet.title}</span>
    </div>
    <div className="ModalProjet__infoContainer">
      <div className="ModalProjet__descriptionContainer">
        <h3>Description</h3>
        <div>{projet.description}</div>
      </div>
      <div className="ModalProjet__descriptionContainer">
        <div>
          <h3>Compétences</h3>
          <div>{projet.competences}</div>
        </div>
        <div className="ModalProjet__">
          <h3>Languages</h3>
          <div>{projet.languages}</div>
        </div>
      </div>
    </div>
    <div className="ModalProjet__Visit">
      <hr></hr>
      <a href={projet.adress}>Visitez le site</a>
    </div>
  </div>
);

ModalProjet.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projet: PropTypes.any.isRequired,
}

export default ModalProjet;

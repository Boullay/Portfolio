const Card = ({ id, cover, title, onClick }) => {
    return (
        <li key={id} className="card" onClick={onClick}>
            <figure>
                <img src={cover} alt={`${title} cover`} />
                <figcaption className="Card_title">
                    <span>{title}</span>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card;
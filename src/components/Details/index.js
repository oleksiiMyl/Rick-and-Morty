import './styles.scss';

const Details = ({ character, onClose }) => {
    const {
        name,
        status,
        gender,
        image,
        location,
        episode,
    } = character;

    return (
        <div className='details'>
            <div className='details__close'>
                <button className='details__close-button' onClick={onClose}></button>
            </div>
            <div className='details__inner'>
                <div className='details__info'>
                    <div className='details__info-item'>
                        <div className='details__avatar'>
                            <img src={image} alt="name" />
                        </div>
                    </div>
                    <div className='details__info-item'>
                        <h3>{name}</h3>
                        <ul className='details__list'>
                            <li className='details__list-item'>
                                <span className='details__list-title'>Gender:</span> {gender}
                            </li>
                            <li className='details__list-item'>
                                <span className='details__list-title'>Status:</span> {status}
                            </li>
                            <li className='details__list-item'>
                                <span className='details__list-title'>Location:</span> {location.name}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='details__episodes'>
                    <h4>Episodes:</h4>
                    <ul className='details__list'>
                        {episode.map(item => (
                            <li className='details__list-item' key={item.name}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;

import './styles.scss';

const Character = ({ name, species, image, children }) => (
    <div className='character'>
        <div className='character__avatar'>
            <img src={image} alt={name} />
        </div>
        <h2 className='character__name'>{name}</h2>
        <h3 className='character__species'>{species}</h3>
        <div className='character__action'>
            {children}
        </div>
    </div>
);

export default Character;

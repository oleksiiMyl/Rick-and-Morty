import './styles.scss';
import PortalPng from '../../images/portal.png';

const Loader = () => (
    <div className='loader'>
        <div className='loader__spinner'>
            <img src={PortalPng} alt="portal" />
        </div>
    </div>
);

export default Loader;

import './styles.scss';
import ErrorPng from '../../images/error.png';

const ErrorPage = ({ title, description }) => (
    <div className="error">
        <div className="error__image">
            <img src={ErrorPng} alt="error" />
        </div>
        <div className="error__title">{title}</div>
        <div className="error__description">{description}</div>
    </div>
);

export default ErrorPage;

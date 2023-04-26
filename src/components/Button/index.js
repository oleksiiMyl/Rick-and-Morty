import './styles.scss';

const Button = ({ children, onClick, ...restProps }) => (
    <button
        className='button'
        type='button'
        onClick={onClick}
        {...restProps}
    >
        {children}
    </button>
);

export default Button;

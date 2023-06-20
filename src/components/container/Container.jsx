import './Container.scss';

const Container = ({children}) => {
    return (
        <div id="container">
            {children}
        </div>
    );
};

export default Container;
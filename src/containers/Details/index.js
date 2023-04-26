import Details from '../../components/Details';
import Overlay from '../../components/Overlay';
import Loader from '../../components/Loader';
import ErrorPage from '../../components/Error';
import Title from '../../components/Title';
import { useCharacter } from '../../hooks/useCharacter';

const DetailsContainer = ({ id, onClose }) => {
    const { data, loading, error } = useCharacter(id);

    if (loading) return (
        <Overlay>
          <Loader />
        </Overlay>
      );
    
      if (error) {
        return (
          <Overlay>
            <ErrorPage
              title={<Title>Oops we got an Error !!!</Title>}
              description={error.message || 'Try reload a little bit later'}
            />
          </Overlay>
        )
      }

    return (
        <Details onClose={onClose} character={data.character} />
    );
};

export default DetailsContainer;

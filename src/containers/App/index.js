import { useState } from 'react';

import './styles.scss';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Characters from '../Characters';
import Loader from '../../components/Loader';
import Overlay from '../../components/Overlay';
import ErrorPage from '../../components/Error';
import Actions from '../../components/Actions';
import ActionsItem from '../../components/ActionsItem';
import Button from '../../components/Button';
import { useCharacters } from '../../hooks/useCharacters';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useCharacters(currentPage);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

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
    <Container>
      <Title>Rick and Morty</Title>
      <Characters characters={data.characters.results} />
      <Actions>
        <ActionsItem>
          <Button disabled={currentPage === 1} onClick={handleClickPrevious}>
            Previous
          </Button>
        </ActionsItem>
        <ActionsItem>
          <Button disabled={currentPage === 20} onClick={handleClickNext}>
            Next
          </Button>
        </ActionsItem>
      </Actions>
    </Container>
  );
}

export default App;

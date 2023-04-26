import { useState } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Character from '../../components/Character';
import Button from '../../components/Button';
import Overlay from '../../components/Overlay';
import Details from '../Details';

const Characters = ({ characters }) => {
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [characterId, seCharacterId] = useState(null);

    const handleOpenDetails = (id) => () => {
        setDetailsIsOpen(true);
        seCharacterId(id);
    };

    const handleCloseDetails = () => {
        setDetailsIsOpen(false);
    }

    if (detailsIsOpen) {
        return (
            <Overlay>
                <Details onClose={handleCloseDetails} id={characterId} />
            </Overlay>
        );
    }

    return (
        <List>
            {
                characters.map(item => (
                    <ListItem key={item.id}>
                        <Character {...item}>
                            <Button onClick={handleOpenDetails(item.id)}>Details</Button>
                        </Character>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default Characters;

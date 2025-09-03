import { useSearchParams } from 'react-router';
import trainers from '../static/trainers.json';
import { v4 as uuidv4 } from 'uuid';
import Trainer from '../static/Trainer';

export default function SearchParam() {
    // useSearchParams -> 'hook' that pulls the SEARCH parameters out of the router
    // uses the URLSearchParams class from vanilla JS
    const [query] = useSearchParams();
    
    return (
        <>
            <h2>Search Params</h2>
            {
                trainers
                    .filter(trainer => trainer.name.toLocaleLowerCase() === query.get("name"))
                    .map(({ name, age, specialism }) => (
                        <Trainer
                            key={uuidv4()}
                            name={name}
                            age={age}
                            specialism={specialism}
                        />))
            }
        </>
    );
}   
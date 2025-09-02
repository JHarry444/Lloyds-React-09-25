import { useParams } from 'react-router';
import Trainer from './Trainer';
import trainers from './trainers.json';
import { v4 as uuidv4 } from 'uuid';

export default function RouteParam() {
    // useParams -> 'hook' that pulls the parameters out of the router
    const {name} = useParams();

    return (
        <>
            <h2>Route Params</h2>
            {
                trainers
                .filter(trainer => trainer.name.toLocaleLowerCase() === name )
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
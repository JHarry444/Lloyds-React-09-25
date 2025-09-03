import Trainer from './Trainer';
import trainers from './trainers.json';
import { v4 as uuidv4 } from 'uuid';

export default function ExternalData() {
    return (
        <>
            <h2>External Data</h2>
            {
                trainers.map(({ name, age, specialism }) => (
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
import { v4 as uuid4 } from 'uuid';
import Trainer from '../../static/Trainer';

export default function TrainerList({ trainers }) {

    return (
        <div>
            <h3>Trainers</h3>
            {
                trainers.map(({ name, age, specialism }) => (
                    <Trainer
                        key={uuid4()}
                        name={name}
                        age={age}
                        specialism={specialism}
                    />
                ))
            }
        </div>
    )
}
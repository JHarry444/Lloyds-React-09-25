import { v4 as uuid4 } from 'uuid';
import Trainer from '../../static/Trainer';

export default function TrainerList({ trainers, filter, setFilter }) {

    return (
        <div>
            <h3>Trainers</h3>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
            <div className='trainerList'>
                {
                    trainers
                        .filter(trainer => !filter || trainer.name.toLowerCase().startsWith(filter.toLowerCase()))
                        .map(({ name, age, specialism }) => (
                            <Trainer
                                key={uuid4()}
                                name={name}
                                age={age}
                                specialism={specialism}
                            />
                        ))
                }
            </div>
        </div>
    )
}
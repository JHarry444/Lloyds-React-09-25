import './lifting.css';
import { useState } from "react"
import TrainerForm from "./TrainerForm";
import TrainerList from "./TrainerList";

export default function TrainerContainer() {
    const [trainers, setTrainers] = useState([
        {
            name: 'JH',
            age: 31,
            specialism: 'Java'
        }
    ]);

    console.log("TRAINERS:", trainers);
    
    return (
        <div className="trainerContainer">
            <TrainerForm setTrainers={setTrainers}/>
            <TrainerList trainers={trainers}/>
        </div>
    )
}
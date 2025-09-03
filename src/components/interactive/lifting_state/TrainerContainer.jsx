import './lifting.css';
import { useEffect, useState } from "react"
import TrainerForm from "./TrainerForm";
import TrainerList from "./TrainerList";

export default function TrainerContainer() {
    const [trainers, setTrainers] = useState([]);

    console.log("TRAINERS:", trainers);

    // onload/onmount

    useEffect(function () {
        fetch("http://localhost:8080/trainers")
            .then(response => response.json())
            .then(json => {
                setTrainers(json)
            })
            .catch(err => console.error(err))
    }, []);



    return (
        <div className="trainerContainer">
            <TrainerForm setTrainers={setTrainers} />
            <TrainerList trainers={trainers} />
        </div>
    )
}
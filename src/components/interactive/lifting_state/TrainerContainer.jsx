import './lifting.css';
import { useEffect, useState } from "react"
import TrainerForm from "./TrainerForm";
import TrainerList from "./TrainerList";

export default function TrainerContainer() {
    const [trainers, setTrainers] = useState([]);
    const [filter, setFilter] = useState("");

    console.log("TRAINERS:", trainers);


    const fetchTrainers = () => {
        fetch("http://localhost:8080/trainers")
            .then(response => response.json())
            .then(json => {
                setTrainers(json)
            })
            .catch(err => console.error(err))
    }
    // onload/onmount

    useEffect(function () {
        const fetchTrainerInterval = setInterval(fetchTrainers, 500);

        return () => clearInterval(fetchTrainerInterval);
    }, []);


    useEffect(function () {
        fetchTrainers();
    }, [filter]);



    return (
        <div className="trainerContainer">
            <TrainerForm setTrainers={setTrainers} />
            <TrainerList trainers={trainers} filter={filter} setFilter={setFilter} />
        </div>
    )
}
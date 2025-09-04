import { useState } from "react"

export default function TrainerForm({ setTrainers }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [specialism, setSpecialism] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // setTrainers(currentTrainers => {
        //     const newTrainersArray = [];
        //     for (let trainer of currentTrainers) {
        //         newTrainersArray.push(trainer);
        //     }
        //     newTrainersArray.push({ name, age, specialism })
        //     return newTrainersArray;
        // })
        setTrainers(currentTrainers => [ ...currentTrainers, { name, age, specialism }]);

        fetch("http://localhost:8080/trainers", {
            method: 'post',
            body: JSON.stringify({name, age, specialism}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => console.log("trainer added successfully"));
        setName("");
        setAge(0);
        setSpecialism("");
    }

    return (
        <div>
            <h3>Add Trainer</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="trainerName">Name:</label>
                <input type="text" name="name" id="trainerName" value={name} onChange={(event) => setName(event.target.value)} />
                <label htmlFor="trainerAge">Age:</label>
                <input type="number" name="age" id="trainerAge" min={0} max={100} value={age} onChange={event => setAge(parseInt(event.target.value))} />
                <label htmlFor="trainerSpecialism">Specialism:</label>
                <input type="text" name="specialism" id="trainerSpecialism" value={specialism} onChange={e => setSpecialism(e.target.value)} />
                <button>ADD</button>
            </form>
        </div>
    )
}
import Trainer from "./Trainer";

export default function PropsExample() {
    return (
        <>
            <Trainer name={"Jordan"} age={31} specialism={"Java"} picture={"https://avatars.githubusercontent.com/u/41322826?v=4"} />
            <Trainer name={"Cameron"} age={32} specialism={"Web"} />
            {
                Trainer({ name: "Shafeeq", age: 31, specialism: "Oracle" })
            }
        </>
    )
}
export default function EventHandling() {
    function sayHello() {
        alert("HELLO!")
    }
    return (
        <>
            <h2>Event Handling</h2>
            <button onClick={sayHello}>CLICK ME</button>
        </>
    )
}
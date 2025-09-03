export default function Trainer({ name, age, specialism, picture }) {
    console.log("PROPS:", { name, age, specialism });

    // if (!picture) {
    //     return (
    //         <>
    //             <h2>Trainer w/o pic</h2>
    //             <p>Name: {name}</p>
    //             <p>Age: {age}</p>
    //             <p>Specialism: {specialism}</p>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h2>Trainer w/ pic</h2>
    //             <p>Name: {name}</p>
    //             <p>Age: {age}</p>
    //             <p>Specialism: {specialism}</p>
    //             <img src={picture} width={"50px"} />
    //         </>
    //     )
    // }

    // return (
    //     <>
    //         <p>Name: {name}</p>
    //         <p>Age: {age}</p>
    //         <p>Specialism: {specialism}</p>
    //         {picture ? <img src={picture} width={"50px"} /> : false}
    //     </>
    // )

        return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialism: {specialism}</p>
            {picture && <img src={picture} width={"50px"} />}
        </div>
    )
}


// `Hello, my name is ${name}`
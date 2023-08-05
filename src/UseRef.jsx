import { useState, useEffect } from "react";
const UseRef = () => {
    const [names, setNames] = useState([]);
    const [selectedNames, setSelectedNames] = useState(null);
    const [selectedNamesDetails, setSelectedNamesDetails] = useState(null);
    useEffect(() => {
        fetch(`/${selectedNames}.json`).then((response) => response.json()).then((data) => setSelectedNamesDetails(data)).catch((err) => console.log(err));
        console.log('redndered only once');

    }, [selectedNames]);

    return (<div>
        {names.map((name) => <button type="button" onClick={() => setNames(name)}>{name}</button>)}
        <div>{names.join(',')}</div>


    </div>);
}
export default UseRef;
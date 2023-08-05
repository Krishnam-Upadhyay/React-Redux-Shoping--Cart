import { useRef, useEffect, useState } from 'react';
const App = () => {
    const inputRef = useRef(null);

    const idRef = useRef(1);

    const [names, setNames] = useState([{
        "id": idRef.current++,
        "name": "Krishnam",
    }, {
        "id": idRef.current++,
        "name": "Upadhyay",
    }]);
    useEffect(() => {
        inputRef.current.focus();
    })



    const onAddName = () => {
        setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
        inputRef.current.value = "";

    }

    return (<div>
        <div>
            {names.map((name) => <div key={name.id}>{name.id} - {name.name}</div>)}
        </div>
        <input type='txt' ref={inputRef} />
        <button onClick={onAddName}>Add Name</button>

    </div>
    )
}
export default App;
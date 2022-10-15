import React from 'react';
import { useState } from 'react'; // стейты делает 
import { nanoid } from 'nanoid/non-secure' //id создает 
import uuid from 'react-uuid';//id создает 

function id() {
	return nanoid(); //=> "Uakgb_J5m9g-0JDMbcJqLJ" ;
	//const id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqLJ"
};
function id2() {
	return uuid();
};

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	function f1 (event) {
		setNotes([...notes, value]);

	alert (event.target.value);
	console.log (event.target.value);
	event.target.value = '';
	console.log (event.target.value);
	}
	return <ul>
		{result}
		
		<input value={value} onChange={event => setValue(event.target.value)} onBlur={f1}/>
		
	</ul>;
}

export default App;


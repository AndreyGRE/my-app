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
	const [obj, setObj] = useState(initObj);
	
	function handleChange(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}
	
	return <div>
		<input value={obj.prop1} onChange={event => handleChange('prop1', event)} />
		<input value={obj.prop2} onChange={event => handleChange('prop2', event)} />
		<input value={obj.prop3} onChange={event => handleChange('prop3', event)} />
		
		<br />
		{obj.prop1}-{obj.prop2}-{obj.prop3}
	</div>;
}

export default App;


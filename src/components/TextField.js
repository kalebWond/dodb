import React from 'react';

const TextField = (props) => {

		return(
			<input type={props.type} className={props.style} placeholder={props.placeholder}/>
		)

}	
	


export default TextField;
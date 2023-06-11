import React from 'react';
import './Subheading.css';
import { images } from '../../static';
const Subheading = (props) => {
	return (
		<div className="subheading__div">
			<p className="p__cormorant">{props.title}</p>
			<img src={images.spoon} alt="spoon" />
		</div>
	);
};

export default Subheading;

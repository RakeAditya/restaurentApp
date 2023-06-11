import React from 'react';
import { images } from '../../static/images';
import './Mainhead.css';
import { Subheading } from '../../components';
const Mainhead = () => {
	return (
		<div className="app_mainhead app__wrapper section__padding">
			<div className="app__wrapper_info">
				<Subheading />
			</div>
			<div className="app__wrapper_img"></div>
		</div>
	);
};

export default Mainhead;

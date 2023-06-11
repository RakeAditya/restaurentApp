import React from 'react';
import './About.css';
import { images } from '../../static';
const About = () => {
	return (
		<div className="app__bg section__padding app__about flex__center">
			{/* background div */}
			<div className="app__about_back flex__center">
				<img src={images.G} alt="back__pictur" />
			</div>
			{/* content div */}
			<div className="app__about__content flex__center">
				<div className="app__about__content__left">
					<h1 className="headtext__cormorant">About Us</h1>
					<img src={images.spoon} alt="spoon_img" className="spoon__img" />
					<p className="p_links">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec
						aliquet eu proin mauris et.
					</p>
					<button className="custom__button">Know more</button>
				</div>
				<div className="app__about__content__mid flex__center">
					<img src={images.knife} alt="big -knife" className="knife__image" />
				</div>
				<div className="app__about__content__right">
					<h1 className="headtext__cormorant">Our history</h1>
					<img src={images.spoon} alt="spoon_img" className="spoon__img" />
					<p className="p_links">
						Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio
						nec aliquet.
					</p>
					<button className="custom__button">Know more</button>
				</div>
			</div>
		</div>
	);
};

export default About;

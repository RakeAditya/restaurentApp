import React from 'react';
import './Laurels.css';
import { Subheading } from '../../components';
import { images, data } from '../../static';
const AwardCard = ({ award }) => {
	return (
		<div className="app__laurels__card">
			<img src={award.imgUrl} alt="imageUrl" />
			<div className="app__laurels__card__content">
				<p className="p__cormorant" style={{ color: '#DCCA86' }}>
					{award.title}
				</p>
				<p className="p_links">{award.subtitle}</p>
			</div>
		</div>
	);
};
const Laurels = () => {
	return (
		<div className="app__wrapper app__bg section__padding">
			<div className="app__wrapper_info">
				<Subheading title="Awards & recognition" />
				<h1 className="headtext__cormorant">Our Laurels</h1>
				<div className="app__laurels__awards">
					{data.awards.map((itm) => (
						<AwardCard key={itm.title} award={itm} />
					))}
				</div>
			</div>
			<div className="app__wrapper_img">
				<img src={images.laurels} alt="laurelsImage" />
			</div>
		</div>
	);
};

export default Laurels;

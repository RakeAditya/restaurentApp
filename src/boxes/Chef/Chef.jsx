import React from 'react';
import './Chef.css';
import { images } from '../../static';
import { Subheading } from '../../components';
const Chef = () => {
	return (
		<div className="app__wrapper app__bg section__padding">
			{/* image section */}
			<div className="app__wrapper_img app__wrapper_img-reverse">
				<img src={images.chef} alt="mera chef" />
			</div>
			{/* info section h mera */}
			<div className="app__wrapper_info">
				{/* topsection */}
				<Subheading title="Chef's word" />
				<h1 className="headtext__cormorant">What we believe in</h1>
				{/* content about chef section */}
				<div className="app__chef__content">
					<div className="app__chef__content__top">
						<img src={images.quote} alt="''" />
						<p className="p_links">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
					</div>
					<p className="p_links">
						auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
						lectus eu. Congue iaculis integer curabitur semper sit nunc.
					</p>
				</div>
				{/* sign section */}
				<div className="app__chef__sign">
					<p>Kevin luo</p>
					<p className="p_links">Chef and founder</p>
					<img src={images.sign} alt="sign" />
				</div>
			</div>
		</div>
	);
};

export default Chef;

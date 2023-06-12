import React from 'react';
import './Gallary.css';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Subheading } from '../../components';
import { images } from '../../static';
const Gallary = () => {
	const gallaryImg = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
	// ref container k use krenge taki hm idhr udhr scroll kr sake
	const imgRef = React.useRef(null);
	const btnScroll = (dir) => {
		// jb left click hua to leftm -300 km kie hand reverse in right
		if (dir === 'left') imgRef.current.scrollLeft -= 300;
		else imgRef.current.scrollLeft += 300;
	};
	return (
		<div className="app__gallary flex__center">
			<div className="app__gallary__content">
				<Subheading title="Instagram" />
				<h1 className="headtext__cormorant">Photo gallary</h1>
				<p className="p_links">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
				</p>
				<button className="custom__button">View More</button>
			</div>
			{/* image gallary */}
			<div className="app__gallary__img">
				<div className="app__gallary__img__box" ref={imgRef}>
					{gallaryImg.map((img, index) => (
						<div className="app__gallary__img__card flex__center" key={`image-${index + 1}`}>
							<img src={img} alt="gallaryimage" />
							<BsInstagram className="app__gallary__icon" />
						</div>
					))}
				</div>
				<div className="app__gallary__img__arrow">
					<BsArrowLeftShort className="app__gallary_icon" onClick={() => btnScroll('left')} />
					<BsArrowRightShort className="app__gallary_icon" onClick={() => btnScroll('right')} />
				</div>
			</div>
		</div>
	);
};

export default Gallary;

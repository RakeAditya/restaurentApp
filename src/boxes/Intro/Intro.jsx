import React from 'react';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../static';
const Intro = () => {
	const videoRef = React.useRef();
	const [trigger, setTrigger] = React.useState(false);
	const handleClick = () => {
		setTrigger((prev) => !prev);
		// reverse kie
		if (trigger) videoRef.current.pause();
		else videoRef.current.play();
	};
	return (
		<div className="app__video">
			<video src={meal} ref={videoRef} loop muted controls={false} type="video/mp4" />
			{/* movable button */}
			<div className={`flex__center ${trigger ? 'app__video__up__off' : 'app__video__up__on'}`}>
				<div className="app__video__loop flex__center" onClick={handleClick}>
					{trigger ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
				</div>
			</div>
		</div>
	);
};

export default Intro;

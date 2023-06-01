import { useEffect, useRef, useState } from 'react';

const LazyImage = props => {
	const [inView, setInView] = useState(false);
	const imageRef = useRef(null);

	const callback = entries => {
		entries.forEach(entry => {
			console.log(entry);
			if (entry.isIntersecting) {
				setInView(true);
			}
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callback, { threshold: 0.95 });

		if (imageRef?.current) observer.observe(imageRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return inView ? (
		<img {...props} />
	) : (
		<img
			ref={imageRef}
			style={{
				width: '400px',
				height: '1000px',
				maxWidth: '100%',
				backgroundColor: '#ddd'
			}}
		/>
	);
};

export default LazyImage;

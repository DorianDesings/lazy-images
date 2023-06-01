import LazyImage from '../lazy-images/LazyImage';

const images = [
	{
		id: 1,
		url: 'https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1600'
	},
	{
		id: 2,
		url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1600'
	},
	{
		id: 3,
		url: 'https://images.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg?auto=compress&cs=tinysrgb&w=1600'
	},
	{
		id: 4,
		url: 'https://images.pexels.com/photos/14721098/pexels-photo-14721098.jpeg?auto=compress&cs=tinysrgb&w=1600'
	},
	{
		id: 5,
		url: 'https://images.pexels.com/photos/16389397/pexels-photo-16389397/free-photo-of-paisaje-montanas-naturaleza-agua.jpeg'
	},
	{
		id: 6,
		url: 'https://images.pexels.com/photos/4113353/pexels-photo-4113353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	},
	{
		id: 7,
		url: 'https://images.pexels.com/photos/1321524/pexels-photo-1321524.jpeg?auto=compress&cs=tinysrgb&w=1600'
	},
	{
		id: 8,
		url: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1600'
	}
];

const Gallery = () => {
	return (
		<div>
			{images.map(image => (
				<LazyImage
					id={image.id}
					key={image.id}
					src={image.url}
					style={{
						maxWidth: '100%'
					}}
				/>
			))}
		</div>
	);
};

export default Gallery;

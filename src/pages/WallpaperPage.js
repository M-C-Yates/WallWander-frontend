import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { baseUrl } from '../App';
import { getImage } from '../actions/image';
import { Wallpaper } from '../components/Wallpaper';

export const WallpaperPage = (props) => {
	const [image, setImage] = useState({
		url: '',
		secureUrl: '',
		title: ''
	});
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const image = await axios.get(`${baseUrl}/images/${props.id}`);
			dispatch(getImage(image.data[0]));
			setImage(image.data[0]);
		};
		fetchData();
	}, [dispatch, props.id]);

	return (
		<div>
			<h1>Wallpaper</h1>
			<Wallpaper image={image} id={props.id} />
		</div>
	);
};

export default WallpaperPage;

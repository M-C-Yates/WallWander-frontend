import axios from 'axios';
import { baseUrl } from '../App';

export const addImage = (image) => ({
	type: 'ADD_IMAGE',
	...image
});

export const startAddImage = (imageData = {}) => {
	return (dispatch) => {
		dispatch(addImage(imageData));
	};
};

export const getImage = (image) => ({
	type: 'GET_IMAGE',
	image
});

export const getImages = (images) => ({
	type: 'GET_IMAGES',
	...images
});

export const startGetImages = () => {
	return (dispatch) => {
		return axios.get(`${baseUrl}/images`).then((res) => {
			dispatch(getImages(res.data));
		});
	};
};

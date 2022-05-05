import axios from "axios";

const instance =  axios.create({
	baseURL:`https://social-network.samuraijs.com/api/1.0/`,
	withCredential: true,
	headers:{
		"API-KEY": "6b26347c-7c85-44db-b59d-3aeb76a641c3"
	}
})

const _basePage = 1200;

export const getUsers = async (page = _basePage) => {
	const response = await instance.get(`users?page=${page}&count=7`);
	return response.data.items.map(item => _transformUsers(item));
}

const _transformUsers = (user) => {
	return{
		id: user.id,
		name: user.name,
		status: user.status,
		photos: user.photos
	}
}


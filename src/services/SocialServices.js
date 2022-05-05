import Api from "./api";

class SocialServices {
	getResource = async (url) => {
		let res = await Api(url);

		if (!res.ok) {
			throw new Error(`status: ${res.status}`);
		}

		return await res;
	}

	getAllUsers = () => {
		return this.getResource(`${this._apiBase}users`);
	}
}

export default SocialServices;
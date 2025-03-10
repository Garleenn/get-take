import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3005/buisness'
import { Buisness } from '@/types/peoples.interface';


class Buisnesses {

	async getBuisnesses() {
		return await axios.get<Buisness[]>('/');
	}

	async getBuisness(id: string) {
		return await axios.get<Buisness>('/get-one', {
			params: {
				id: id
			}
		});
	}

}

export default new Buisnesses()
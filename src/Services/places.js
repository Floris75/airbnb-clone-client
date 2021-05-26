import api from './api';

const house = {
    newHouse: async (house_infos) => {
        return await api.post('/places', house_infos)
    }
    
}

export default house;
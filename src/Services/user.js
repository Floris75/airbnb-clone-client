import api from './api';

const userService = {
    signup: async (email, password, first_name, last_name, role) => {
        const user = {email, password, first_name, last_name, role};

        return await api.post('/signup', user)

    }
}

export default userService;
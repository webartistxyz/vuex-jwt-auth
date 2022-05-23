import axios from 'axios'
const state = { 
    users: []
};
const getters = { 
    usersList: state => state.users
};
const actions = { 
    async fetchUsers({commit}){
      const response = await axios.get("http://localhost:3000/users");
      commit("setUsers", response.data)
    },
    async addUsers({commit}, user){
      const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewUser", response.data)
    },
    async deleteUser({commit}, id){
      await axios.delete(`http://localhost:3000/users/${id}`);
      commit("removeUser", id)
    }
};
const mutations = { 
    setUsers: (state, users) => (
        state.users = users
    ),
    addNewUser: (state, user) => state.users.unshift(user),
    removeUser: (state, id) => (
        state.users.splice(state.users.findIndex( user => user.id == id), 1)
    )
};
const user = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default user;

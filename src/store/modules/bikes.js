
const state = {
    bikes: [],
    filtered: false
}

const getters = {
    getAllBikesForRent: (state) => {
        return bikes;
    }
}
export const state = () => ({
  categoriesData: []
})

export const getters = {
  getCategoriesData(state) {
    return state.categoriesData.map((item) => {
      return {
        id: item.id,
        categoryName: item.categoryName,
        categoryBg: item.categoryBg
      }
    })
  },
  getCategoryData(state, id) {
    return state.categoriesData.find((element) => {
      return element.id === id
    })
  }
}

export const mutations = {
  setCategoriesData(state, payload) {
    state.categoriesData = payload
  }
}

export const actions = {
  loadCategoriesData(context) {
    fetch('shopData.json')
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        context.commit('setCategoriesData', data)
      })
  }
}

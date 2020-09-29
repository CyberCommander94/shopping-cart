export const state = () => ({
  cartData: []
})
export const getters = {
  getCartData: (state) => {
    return state.cartData
  },
  getTotalPrice: (state) => {
    return state.cartData.reduce((total, element) => {
      return (total += element.amount * element.cost)
    }, 0)
  },
  getCurrItemAmount: (state) => (id) => {
    if (state.cartData) {
      const item = state.cartData.find((elem) => elem.id === id)
      return item ? item.amount : 0
    }
    return 0
  }
}

export const mutations = {
  addCartItem: (state, payload) => {
    const itemIndex = state.cartData.findIndex((item) => {
      return item.id === payload.id
    })
    if (itemIndex >= 0) {
      state.cartData[itemIndex].amount = state.cartData[itemIndex].amount + 1
    } else {
      state.cartData.push(payload)
    }
  },
  removeCartItem: (state, payload) => {
    const itemIndex = state.cartData.findIndex((item) => {
      return item.id === payload.id
    })
    if (itemIndex >= 0) {
      if (state.cartData[itemIndex].amount > 0) {
        state.cartData[itemIndex].amount = state.cartData[itemIndex].amount - 1
      }
      if (state.cartData[itemIndex].amount === 0) {
        state.cartData.splice(itemIndex, 1)
      }
    }
  },
  deleteCartItemsGroup: (state, payload) => {
    const itemIndex = state.cartData.findIndex((item) => {
      return item.id === payload.id
    })
    state.cartData.splice(itemIndex, 1)
  },
  clearCartData: (state) => (state.cartData = [])
}

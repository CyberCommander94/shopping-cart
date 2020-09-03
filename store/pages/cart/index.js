export const state = () => ({
  cartData: []
})

export const mutations = {
  addCartItem(state, element) {
    state.cartData.push(element)
  },
  removeCartItem(state, id) {
    state.cartData.splice(
      1,
      state.cartData.findIndex((element) => {
        return element.id === id
      })
    )
  },
  clearCartData(state) {
    state.cartData = []
  }
}

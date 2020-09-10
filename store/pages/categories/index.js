export const state = () => ({
  categoriesData: [
    {
      id: '1234',
      categoryName: 'T-Shirts',
      categoryBg: '/categories/t-shirts_bg.jpg',
      categoryGoods: [
        {
          name: 'Green-Xtreame',
          path: '/categories/t-shirts/green_xtreame.jpg',
          cost: 250
        },
        {
          name: 'Digital Owl',
          path: '/categories/t-shirts/digital_owl.jpg',
          cost: 312
        },
        {
          name: 'I Can',
          path: '/categories/t-shirts/i_can.jpg',
          cost: 280
        },
        {
          name: 'GB Shirts',
          path: '/categories/t-shirts/gb_shirts.jpg',
          cost: 200
        }
      ]
    },
    {
      id: '1235',
      categoryName: 'Cups',
      categoryBg: '/categories/caps_bg.jpg',
      categoryGoods: [
        {
          name: 'BLue Cup',
          path: '/categories/caps/blue_cup.jpg',
          cost: 110
        },
        {
          name: 'Dota Cup',
          path: '/categories/caps/dota_cup.jpg',
          cost: 130
        }
      ]
    },
    {
      id: '1236',
      categoryName: 'Cards',
      categoryBg: '/categories/cards_bg.jpg',
      categoryGoods: [
        {
          name: 'Happy Birthday',
          path: '/categories/cards/birthday.jpg',
          cost: 50
        },
        {
          name: 'Marry Christmas',
          path: '/categories/cards/christmas.jpg',
          cost: 60
        }
      ]
    },
    {
      id: '1237',
      categoryName: 'Toys',
      categoryBg: '/categories/toys_bg.jpg',
      categoryGoods: [
        {
          name: 'Donald Duck',
          path: '/categories/toys/donald.jpg',
          cost: 300
        },
        {
          name: 'Monster',
          path: '/categories/toys/monster.jpg',
          cost: 250
        },
        {
          name: 'Bear',
          path: '/categories/toys/bear.jpg',
          cost: 280
        }
      ]
    },
    {
      id: '1238',
      categoryName: 'Magnets',
      categoryBg: '/categories/magnets_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1239',
      categoryName: 'Pens & Pencils',
      categoryBg: '/categories/pens_&_pencils_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1240',
      categoryName: 'Bags',
      categoryBg: '/categories/bags_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1241',
      categoryName: 'Notebooks',
      categoryBg: '/categories/notebooks_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1242',
      categoryName: 'Scrum Cards',
      categoryBg: '/categories/scrum_cards_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1243',
      categoryName: 'Phones',
      categoryBg: '/categories/phones_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1244',
      categoryName: 'Boots',
      categoryBg: '/categories/boots_bg.jpg',
      categoryGoods: []
    },
    {
      id: '1245',
      categoryName: 'Tablets',
      categoryBg: '/categories/tablets_bg.jpg',
      categoryGoods: []
    }
  ]
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
  getCategoryData(state) {
    return (id) => {
      return state.categoriesData.find((element) => {
        return element.id === id
      })
    }
  }
}

export const mutations = {
  setCategoriesData(state, payload) {
    state.categoriesData = payload
  }
}

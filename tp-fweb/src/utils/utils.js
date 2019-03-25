export const setLS = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const autocompleteItems = [
  {
    done : false,
    name : 'Fruits',
    price: 0
  },
  {
    done : false,
    name : 'Caramel',
    price: 0
  },
  {
    done : false,
    name : 'Patates',
    price: 0
  },
  {
    done : false,
    name : 'Salade',
    price: 0
  }
]

export const defaultLists = [
  {
    name    : 'Fruits',
    items   : [
      {
        name : 'Banane',
        price: 0
      },
      {
        name : 'Poire',
        price: 0
      },
      {
        name : 'Pomme',
        price: 0
      },
      {
        name : 'Mangue',
        price: 0
      }
    ],
    budget  : 50,
    favorite: true
  },
  {
    name    : 'Féculents',
    items   : [
      {
        name : 'Pommes de terre',
        price: 0
      },
      {
        name : 'Riz',
        price: 0
      },
      {
        name : 'Pâtes',
        price: 0
      },
      {
        name : 'Gnochis',
        price: 0
      }
    ],
    budget  : 50,
    favorite: false
  },
  {
    name    : 'Boissons',
    items   : [
      {
        name : 'Coca',
        price: 0
      },
      {
        name : 'SevenUp',
        price: 0
      },
      {
        name : 'Iced-Tea',
        price: 0
      },
      {
        name : 'Eau',
        price: 0
      }
    ],
    budget  : 50,
    favorite: false
  },
  {
    name    : 'Alcools',
    items   : [
      {
        name : 'Whisky',
        price: 0
      },
      {
        name : 'Ricard',
        price: 0
      },
      {
        name : 'Bières',
        price: 0
      },
      {
        name : 'Rhum',
        price: 0
      }
    ],
    budget  : 50,
    favorite: true
  },
  {
    name    : 'Bonbons',
    items   : [
      {
        name : 'Luttis',
        price: 0
      },
      {
        name : 'Bouteilles Coca',
        price: 0
      },
      {
        name : 'Fizz',
        price: 0
      },
      {
        name : 'Carambars',
        price: 0
      }
    ],
    budget  : 50,
    favorite: false
  },
  {
    name    : 'Petit-dejeuner',
    items   : [
      {
        name : 'Nutella',
        price: 0
      },
      {
        name : 'Confiture fraises',
        price: 0
      },
      {
        name : 'Chocolat',
        price: 0
      },
      {
        name : 'Lait',
        price: 0
      }
    ],
    budget  : 50,
    favorite: false
  }
]

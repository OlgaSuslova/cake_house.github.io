const data = `
[
  {
    "id": 1,
    "name": "Торт Сникерс",
    "price": 1500,
    "value": "рублей",
    "img": "./img/snikers.jpg",
    "description": "Сочный шоколадный бисквит, крем брюле, карамель и соленый арахис. Стоимость указана за 1 кг."
  },

  {
    "id": 2,
    "name": "Торт Три шоколада",
    "price": 1700,
    "value": "рублей",
    "img": "./img/tri_shokolada.jpg",
    "description": "Нежное сочетание шоколадного бисквита и трёх видов бельгийского шоколада в муссе создают изысканную вкусовую гармонию. Стоимость указана за 1 кг."
  },

  {
    "id": 3,
    "name": "Торт Молочная девочка",
    "price": 1500,
    "value": "рублей",
    "img": "./img/mol_devochka.jpeg",
    "description": "Нежный воздушный торт из тонких коржей на сгущенном молоке и белого крема. Стоимость указана за 1 кг."
  },

  {
    "id": 4,
    "name": "Торт Банан-карамель",
    "price": 1600,
    "value": "рублей",
    "img": "./img/banan-karamel.jpeg",
    "description": "Бисквит очень лёгкий, с ванильной пропиткой. Крем на основе сливочного сыра. В начинке между кремом и бисквитом свежие бананы и домашняя карамель. Стоимость указана за 1 кг."
  },

  {
    "id": 5,
    "name": "Торт Фисташка-малина",
    "price": 1600,
    "value": "рублей",
    "img": "./img/fistashka-malina.jpg",
    "description": "Фисташковый бисквит, фисташковый крем и малиновое конфи. Стоимость указана за 1 кг."
  },

  {
    "id": 6,
    "name": "Торт Красный Бархат",
    "price": 1700,
    "value": "рублей",
    "img": "./img/krasnuy_barhat.jpeg",
    "description": "Cочный бисквит красного цвета, ароматное конфи из свежей клубники и нежный взбитый кремчиз. Стоимость указана за 1 кг."
  }
]
`

const dataElems = JSON.parse(data)
const productsEl = document.querySelector('.catalog')

const renderProducts = (products) => {
  productsEl.innerHTML = ''
  products.forEach((product) => {
    const productEl = document.createElement('div')
    productEl.classList.add('catalog__product')
    productEl.innerHTML = `
            <img class="catalog__product__image" src="${product.img}" alt="${product.name}">
            <h3 class="catalog__product__title">${product.name}</h3>
            <div class="catalog__product__price">${product.price} ${product.value}</div>
            <p class="catalog__product__description">${product.description}</p>
            
        `
    productsEl.append(productEl)
  })
}

renderProducts(dataElems)

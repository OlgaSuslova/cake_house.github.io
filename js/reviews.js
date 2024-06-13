const dataReviews = ` [
    {
        "id": 1,
        "name": "Алла Смирнова",
        "review": "Заказали у Елены торт Сникерс на день рождения сына! Все детки и взрослые были в восторге. Бисквит воздушный, начинки много. Будем заказывать еще!",
        "img": "./img/alla.png"

    },
    {
        "id": 2,
        "name": "Татьяна Савушкина",
        "review": "Елена, спасибо вам огромное за наш шедевр! Всё невероятно красиво, а на вкус просто изумительно! Ваш тортик, как всегда изюминка на празднике! Спасибо, что дарите эмоции!",
        "img": "./img/tat.jpg"

    },
    {
        "id": 3,
        "name": "Ольга Родионова",
        "review": "Заказываем тортик не в первый раз и как всегда всем очень довольны! Торт точно такой же как и на фото, что мы выбрали, сын был в восторге. Начинка очень вкусная,нежнейшие коржы с великолепной пропиткой.",
        "img": "./img/olga.jpg"

    },
    {
        "id": 4,
        "name": "Любовь Петрова",
        "review": "Отличный кондитер! Очень внимательно относится к своей работе и очень вкусный и красивый торт сделала для нас.",
        "img": "./img/nat.jpg"

    }
]
`
const dataReviewsElems = JSON.parse(dataReviews)

const reviewsEl = document.querySelector('.reviews')

const renderReviews = (reviews) => {
  reviewsEl.innerHTML = ''
  reviews.forEach((review) => {
    const reviewEl = document.createElement('div')
    reviewEl.classList.add('reviews__review')
    reviewEl.innerHTML = `
            <img class="reviews__review__image" src="${review.img}" alt="${review.name}">
            <h3 class="reviews__review__title">${review.name}</h3>
            <p class="reviews__review__text">${review.review}</p>
        `
    reviewsEl.append(reviewEl)
  })
}

renderReviews(dataReviewsElems)

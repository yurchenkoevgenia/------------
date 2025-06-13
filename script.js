const ratingFilter = document.getElementById('ratingFilter');
const books = [
  { "title": "Тіні забутих предків", "author": "Михайло Коцюбинський", "genre": "Класика", "year": 1911, "rating": 4.6, "description": "Містичний роман про гуцульські традиції, кохання та смерть.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/8/0/808_1.jpg"},
  { "title": "Фелікс Австрія", "author": "Софія Андрухович", "genre": "Сучасна проза", "year": 2014, "rating": 4.4, "description": "Історія жіночих доль у Станіславові початку ХХ століття.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/1/4/145_1_40.jpg" },
  { "title": "Я, \"Побєда\" і Берлін", "author": "Кузьма Скрябін", "genre": "Гумор", "year": 2006, "rating": 3.7, "description": "Весела розповідь про пригоди Кузьми та його автівки.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/1/8/186_1_5.jpg" },
  { "title": "Місто", "author": "Валер'ян Підмогильний", "genre": "Класика", "year": 1927, "rating": 4.5, "description": "Роздуми про особистість і місто, шлях селянина до самореалізації.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/7/8/785_1_1.jpg" },
  { "title": "Клуб невиправних оптимістів", "author": "Жан-Мішель Генассія", "genre": "Перекладена література", "year": 2009, "rating": 4.2, "description": "Париж 50-х років, шахи, політика і вигнанці з СРСР.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/i/m/img902_60.jpg" },
  { "title": "Амадока", "author": "Софія Андрухович", "genre": "Сучасна проза", "year": 2020, "rating": 4.1, "description": "Масштабний роман про пам’ять, ідентичність і любов.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/i/m/img_25265.jpg" },
  { "title": "Залишенець", "author": "Василь Шкляр", "genre": "Історичний роман", "year": 2009, "rating": 2.6, "description": "Про український повстанський рух після визвольних змагань.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/b/l/black_raven_front.jpg" },
  { "title": "Карбід", "author": "Андрій Любка", "genre": "Сатиричний роман", "year": 2015, "rating": 4.3, "description": "Гумористична історія про спробу прокопати тунель до Європи.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/i/m/img081_1_25.jpg" },
  { "title": "Троща", "author": "Василь Шкляр", "genre": "Історичний роман", "year": 2017, "rating": 2.4, "description": "Драма зрад і помсти у повоєнному підпіллі.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/3/_/3_219_145.jpg" },
  { "title": "Солодка Даруся", "author": "Марія Матіос", "genre": "Сучасна проза", "year": 2004, "rating": 2.7, "description": "Драматична історія дівчини з карпатського села.", "cover": "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/i/m/img_38788.jpg" },
];

const bookList = document.getElementById('bookList');
const genreFilter = document.getElementById('genreFilter');
const authorFilter = document.getElementById('authorFilter');

function renderBooks(filtered) {
  bookList.innerHTML = '';
  filtered.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book';
    card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <div class="book-content">
        <h3>${book.title}</h3>
        <p><b>${book.author}</b></p>
        <p>${book.genre} • ${book.year}</p>
        <p class="rating">★ ${book.rating}</p>
        <p>${book.description}</p>
    </div>
    `;
    bookList.appendChild(card);
  });
}

const genreSet = new Set();
const authorSet = new Set();
books.forEach(book => {
  genreSet.add(book.genre);
  authorSet.add(book.author);
});

genreSet.forEach(genre => {
  const opt = document.createElement('option');
  opt.value = genre;
  opt.textContent = genre;
  genreFilter.appendChild(opt);
});

authorSet.forEach(author => {
  const opt = document.createElement('option');
  opt.value = author;
  opt.textContent = author;
  authorFilter.appendChild(opt);
});

function applyFilters() {
  const genreVal = genreFilter.value;
  const authorVal = authorFilter.value;
  const ratingVal = parseFloat(ratingFilter.value) || 0;

  const filtered = books.filter(book => {
    return (!genreVal || book.genre === genreVal)
        && (!authorVal || book.author === authorVal)
        && (!ratingVal || book.rating >= ratingVal);
  });

  renderBooks(filtered);
}

genreFilter.addEventListener('change', applyFilters);
authorFilter.addEventListener('change', applyFilters);
ratingFilter.addEventListener('change', applyFilters);

renderBooks(books);
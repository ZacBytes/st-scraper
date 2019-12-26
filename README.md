# ST-Scraper
[![Build Status](https://travis-ci.com/ZacBytes/st-scraper.svg?branch=master)](https://travis-ci.com/ZacBytes/st-scraper)

Easy to use node_js scraper for straits times article.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install st-scraper.

```bash
npm install st-scraper
```

## Usage

```js
const stscrape = require('st-scraper');

stscrape.ScrapeArticle('STRAITS TIMES ARTICLE URL HERE', function(err, ArticleData){
   console.log(ArticleData) //logs entire article data object

   console.log(ArticleData.title) //logs article title
   console.log(ArticleData.text) //logs article text
   console.log(ArticleData.postdate) //logs article post date
   console.log(ArticleData.img) //logs image source
   console.log(ArticleData.imgcaption) //logs article image caption
   console.log(ArticleData.author) //logs article author
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test before making pull requests.

## License
[MIT](https://choosealicense.com/licenses/mit/)

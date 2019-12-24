# ST-Scraper
[![Build Status](https://travis-ci.com/ZacBytes/Straits-Times-Scraper.svg?branch=master)](https://travis-ci.com/ZacBytes/Straits-Times-Scraper)

Easy to use node_js scraper for straits times articles. Does not support premium articles

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install st-scraper.

```bash
npm install st-scraper
```

## Usage

```node_js
const stscrape = require('st-scraper');

stscrape.ScrapeArticle('STRAITS TIMES ARTICLE URL HERE', function(err, ArticleData){
   console.log(ArticleData) //logs entire article data object
   console.log(ArticleData.title) //logs article title
});

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test before making pull requests.

## License
[MIT](https://choosealicense.com/licenses/mit/)

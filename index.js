const cheerio = require('cheerio');
const request = require('request');
const validUrl = require('valid-url');

function stscraper () {}

stscraper.prototype.ScrapeArticle = function (articleURL, callback) {
	articleURL = articleURL.toLowerCase()
	if (validUrl.isUri(articleURL) && articleURL.includes('straitstimes.com')){
		//Proceed with scraping
		request(articleURL, function (error, response, body) {
		
			if (error) return console.error(error);
			const $ = cheerio.load(body);

     		var title = $('h1.headline.node-title').text();
     		var img = $('img.img-responsive').attr('src');
			var imgcaption = $('span.caption-text').text();
			var postdate = $('div.story-postdate').text()
			var author = $('div.author-field.author-name').find('a').attr('href')

			var text = "";
     	 	$("div.odd.field-item").each(function(i, item){
      			text += ($("p", item).text())
      		});

			var ArticleData = {};
			ArticleData.title = title;
			ArticleData.text = text;
			ArticleData.author = author;
			ArticleData.postdate = postdate;
			ArticleData.img = img;
			ArticleData.imgcaption = imgcaption;
			callback(null, ArticleData)


		});

	} 
	else {
		callback("Invalid articleURL provided to ScrapeArticle function");
	}
}


module.exports = new stscraper()
  

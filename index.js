const cheerio = require('cheerio');
const request = require('request');
const validUrl = require('valid-url');

function stscraper () {}

stscraper.prototype.ScrapeArticle = function (articleURL, callback) {
	if (validUrl.isUri(articleURL)){
		//Proceed with scraping
		request(articleURL, function (error, response, body) {
		
			if (error) return console.error(error);
			const $ = cheerio.load(body);

     		let title = $('h1.headline.node-title').text();
     		let img = $('img.img-responsive').attr('src');
			let imgcaption = $('span.caption-text').text();
			 
			let text = "";
     	 	$("div.odd.field-item").each(function(i, item){
      			text += ($("p", item).text())
      		});

			var ArticleData = {};
			ArticleData.title = title;
			ArticleData.text = text;
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
  

const cheerio = require('cheerio');
const request = require('request');
const validUrl = require('valid-url');

exports.ScrapeArticle = function (articleURL) {
	if (validUrl.isUri(articleURL)){
		//Proceed with scraping

		request(articleURL, function (error, response, body) {
		
			if (err) return console.error(err);
			let scraped = cheerio.load(body);
      

     		var title = scraped('h1.headline.node-title').text()
     		var img = scraped('img.img-responsive').attr('src')
      		var imgcaption = scraped('span.caption-text').text()
      
			var text = "";
			  
     	 	scraped("div.odd.field-item").each(function(i, item){
      			text += (scraped("p", item).text())
      		});
      
    		return [title, text, img, imgcaption];

		})
		

	} 
	else {
		console.error('error', "Invalid articleURL provided to ScrapeArticle function");
	}
  };

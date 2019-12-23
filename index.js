const cheerio = require('cheerio');
const request = require('request');
const validUrl = require('valid-url');

exports.ScrapeArticle = function (articleURL) {
	if (validUrl.isUri(articleURL)){
		//Proceed with scraping

		request({
			method: 'GET',
			url: articleURL
		}, (err, res, body) => {
		
			if (err) return console.error(err);
			let $ = cheerio.load(body);
      

     		var title = $('h1.headline.node-title').text()
     		var img = $('img.img-responsive').attr('src')
      		var imgcaption = $('span.caption-text').text()
      
			var text = "";
			  
     	 	$("div.odd.field-item").each(function(i, item){
      			text += ($("p", item).text())
      		});
      
    		return [title, text, img, imgcaption];

		})
		

	} 
	else {
		console.error('error', "Invalid articleURL provided to ScrapeArticle function");
	}
  };

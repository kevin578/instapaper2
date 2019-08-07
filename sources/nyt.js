const cheerio= require('cheerio')
const request = require('request');

const subArticleClass = "css-i435f0"
const sectionClass = "css-u82chm"

const getNYT = new Promise((resolve, reject)=> {
    request({
        method: 'GET',
        url: 'https://www.nytimes.com/section/todayspaper'
    }, (err, res, body) => {
        let nytimesArticles = [];
        if (err) return reject(err);
        let $ = cheerio.load(body);
 
        $(`.${sectionClass}`).each((i, el)=> {
              const section = $(el).find('h2').first().text();
              console.log(section)
        })

      
        // const url = $(el).find('a').attr("href") 

        // const section = url.split('/')[4]
        // nytimesArticles.push({url, section})



        // $('a').each(function(i, el) {
        //     const element = cheerio.load(el)
        //     link = element('a').attr('href')
        //     headline = element('a').text()
        //     nytimesArticles.push({
        //         headline, link
        //     })
    
        // })
    
        // nytimesArticles = nytimesArticles.filter((item)=> {
        //     return (item.link && item.headline && (item.link[0] =='/'))
        // })
    
        resolve(nytimesArticles);
    });
})

module.exports = getNYT


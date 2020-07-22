import scrapy
from scrapy import cmdline
from html_text import extract_text

class NewsSpider(scrapy.Spider):
    name = "news"
    start_urls = [
        'https://www.coronavirustoday.com/coronavirus-breaking-news'
    ]
    def parse(self, response):
        for quote in response.css('div div.view-content div.views-row'):
            if not quote.css('div.views-field-created span::text').get(): continue
            content = self.content_helper(quote.css('div.views-field-body div p'))
            yield {
                'date_time': quote.css('div.views-field-created span::text').get(),
                'title': quote.css('div.views-field-title h2::text').get(),
                'content': content
            }
            
    def content_helper(self, response):
        res = ""
        for ele in response:
            html = ele.get()
            res += extract_text(html)
        return res
        
cmdline.execute("scrapy crawl news -o news.json".split(" "))
    # [scrapy crawl quotes -o quotes.json] to export output data
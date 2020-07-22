import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
        'http://quotes.toscrape.com/page/2/',
    ]
    # def start_requests(self):
    #     urls = [
    #         'http://quotes.toscrape.com/page/1/',
    #         'http://quotes.toscrape.com/page/2/',
    #     ]
    #     for url in urls:
    #         yield scrapy.Request(url=url, callback=self.parse)

    # default callback is parse
    def parse(self, response):
        for quote in response.css('div.view-content'):
            yield {
                'date_time': quote.css('div.views-field views-field-created span::text').get(),
                'title': quote.css('div.views-field views-field-title h2::text').get(),
                'content': quote.css('div.views-field views-field-body div::text').getall(),
            }

    # [scrapy crawl quotes -o quotes.json] to export output data

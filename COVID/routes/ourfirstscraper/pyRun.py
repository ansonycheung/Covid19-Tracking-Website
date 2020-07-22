from scrapy import cmdline
cmdline.execute("scrapy crawl news -o news.json".split())
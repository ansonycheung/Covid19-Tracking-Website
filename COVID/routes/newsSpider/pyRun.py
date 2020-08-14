import sys
from scrapy import cmdline
import os

f = open('News.json', 'r+')
f.truncate(0) # need '0' when using r+
f.close()
cmdline.execute("scrapy crawl news -o news.json".split())

sys.stdout.flush()
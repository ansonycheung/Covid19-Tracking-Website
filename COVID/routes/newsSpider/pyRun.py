import sys
from scrapy import cmdline

f = open('News.json', 'r+')
f.truncate(0) # need '0' when using r+
f.close()
cmdline.execute("scrapy crawl news -o News.json".split())

sys.stdout.flush()
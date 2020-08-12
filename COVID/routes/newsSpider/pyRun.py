import sys
from scrapy import cmdline
import os

if os.path.exists("News.json"):
  os.remove("News.txt")
else:
  print("The file does not exist")
cmdline.execute("scrapy crawl news -o News.json".split())

sys.stdout.flush()
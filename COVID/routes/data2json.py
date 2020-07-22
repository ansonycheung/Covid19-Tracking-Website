import csv
import json
import requests
import sys

url = 'http://covidtracking.com/api/states/daily.csv'
req = requests.get(url)
url_content = req.content
csv_file = open('./routes/downloaded.csv', 'wb')
csv_file.write(url_content)
csv_file.close()

with open('./routes/downloaded.csv') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

with open('./routes/data.json', 'w') as f:
    json.dump(rows, f)

print("Hi")
sys.stdout.flush()
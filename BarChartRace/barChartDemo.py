import bar_chart_race as bcr
import pandas as pd
import io
import requests

df = bcr.load_dataset('covid19')
url="http://covidtracking.com/api/states/daily.csv"
s= requests.get(url).content
df = pd.read_csv(io.StringIO(s.decode('utf-8')))
# stringpath = "/Users/Ada/Desktop/covid19/testData.csv"
# df = pd.read_csv(stringpath)
df.drop(df.iloc[:, 3:39], inplace = True, axis = 1)
df['date'] =  pd.to_datetime(df['date'], format='%Y%m%d')
df['state']=df['state'].apply(str)
df.info()
df = df.pivot(index ='date', columns ='state', values='positive') 
df.head()

def summary(values, ranks):
    total_positives = values.sum()
    s = f'Total Positives - {total_positives:,.0f}'
    return {'x': .99, 'y': .05, 's': s, 'ha': 'right', 'size': 8}

bcr.bar_chart_race(df, filename='videos/covid19-FULLData.mp4', n_bars=10, steps_per_period= 8, filter_column_colors= True, title='USA COVID-19 poistive cases by State', shared_fontdict={'family': 'Helvetica', 'weight': 'bold','color': 'rebeccapurple'}, period_summary_func=summary)
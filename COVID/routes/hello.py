import sys
import numpy as np
import pandas as pd
import io
import requests
import matplotlib.pyplot as plt
import datetime

url="http://covidtracking.com/api/states/daily.csv"
s=requests.get(url).content
df = pd.read_csv(io.StringIO(s.decode('utf-8')))
df['date'] = pd.to_datetime(df['date'], format='%Y%m%d')
df.drop(['dateChecked'],axis=1,inplace=True)
df['state']=df['state'].apply(str)
df.info()
df.head()
df.fillna(value=-1, inplace=True)
df.head()
def plot_var(var1 = 'positiveIncrease', var2='negativeIncrease',
             state='WA'):
    """
    Plots a bar chart of the given variable over the date range
    """
    assert type(var1)==str, "Expected string as the variable name"
    assert type(var2)==str,  "Expected string as the variable name"
    assert type(state)==str, "Expected string as the state name"
 
    y = (df[df['state']==state][var1]) / (df[df['state']==state][var1] + df[df['state']==state][var2])
    x = df[df['state']==state]['date']
    plt.figure(figsize=(12,4))
    plt.title("Plot of \"{}\" percentage for {}".format(var1,state),fontsize=18)
    plt.bar(x=x,height=y,edgecolor='k',color='red')
    plt.grid(True)
    plt.xticks(fontsize=10,rotation=45)
    plt.yticks(fontsize=14)
    # plt.show()
    path = "./public/images/"+str(datetime.datetime.now().minute)+".png"
    plt.savefig(path)

plot_var()

print("Dude")
sys.stdout.flush()
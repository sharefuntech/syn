#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from pandas import DataFrame, read_csv

df1 = DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'], 'data1': range(7)})
df2 = DataFrame({'key': ['a', 'b', 'd'], 'data2': range(3)})
# dfMerged = pd.merge(df1, df2, on='key')
# print dfMerged
dfMergedOuter = pd.merge(df1, df2, how='outer')
print dfMergedOuter

df3 = DataFrame({'lkey': ['b', 'b', 'a', 'c', 'a', 'a', 'b'], 'data1': range(7)})
df4 = DataFrame({'rkey': ['a', 'b', 'd'], 'data2': range(3)})
dfMerged = pd.merge(df3, df4, left_on='lkey', right_on='rkey')
# print dfMerged


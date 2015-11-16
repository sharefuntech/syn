#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
from pandas import DataFrame, read_csv

df1 = DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'], 'data1': range(7)})
df2 = DataFrame({'key': ['a', 'b', 'd'], 'data2': range(3)})
# dfMerged = pd.merge(df1, df2, on='key')
# print dfMerged
# dfMergedOuter = pd.merge(df1, df2, how='outer')
# print dfMergedOuter

df3 = DataFrame({'lkey': ['b', 'b', 'a', 'c', 'a', 'a', 'b'], 'data1': range(7)})
df4 = DataFrame({'rkey': ['a', 'b', 'd'], 'data2': range(3)})
# dfMerged = pd.merge(df3, df4, left_on='lkey', right_on='rkey')
# print dfMerged

left = DataFrame({'key1':['foo', 'foo', 'bar'], 'key2':['one', 'foo', 'one'], 'lval':[1, 2, 3]})

right = DataFrame({'key1':['foo', 'foo', 'bar', 'bar'], 'key2':['one', 'foo', 'one', 'one'], 'rval':[4, 5, 6, 7]})

dfMergedOuter = pd.merge(left, right, how='outer')
# print dfMergedOuter

arr = np.arange(12).reshape((6,2))
# print arr
# print np.arange(12)
arrConcat = np.concatenate([arr, arr], axis = 1)
# print arrConcat

data = DataFrame({'k1': ['one']*3 + ['two']*4, 'k2': [1,1,2,3,3,4,4]})
# print data
dataDuplicate = data.duplicated()
print dataDuplicate
dropDuplicate = data.drop_duplicates()
print dropDuplicate
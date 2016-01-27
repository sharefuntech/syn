#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from pandas import DataFrame, read_csv

def countsItems(sequence):
	counts = {}
	for x in sequence:
		if x in counts:
			counts[x] += 1
		else:
			counts[x] = 1
	return counts

df = pd.read_csv('book.csv')
# print df
provinceCount = df['buyer_addr'].value_counts()
# print type(provinceCount)
# print provinceCount[1]
# print provinceCount
provinceCount.to_csv('bookProvinceCount.csv')



#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
import numpy as np
import pandas as pd
from pandas import DataFrame, read_csv

#三国演义 =========================================================
df = pd.read_csv('book-xyj.csv')
# print df['buyer_device'][:20]
# print df['buyer_level'][:20]

#折叠数据~~~~~~~~~~~~~~~
# membership = np.where(df['buyer_level'].str.contains('钻石会员'), 'VIP', 'Ps')
# # print membership[:10]
# by_province_membership = df.groupby(['buyer_addr', membership])
# membership_counts = by_province_membership.size().unstack().fillna(0)
# print membership_counts
# membership_counts.to_csv('membership_counts.csv')
#统计省份～～～～～～～～～～～～～～～～～～
provinceCount = df['buyer_addr'].value_counts()
print provinceCount
provinceCount.to_csv('bookXyjProvinceCount.csv')
#统计访问设备～～～～～～～～～～～～～～～～～～
#问题：无法替换数据空白点
# clean_device_series = df['buyer_device']
# print clean_device_series[:20]
# clean_device_series.fillna('from pc')
# deviceCount = clean_device_series.value_counts()
# print deviceCount
#统计会员～～～～～～～～～～～～～～～～～～
# memberCount = df['buyer_level'].value_counts()
# # print memberCount
# memberCount.to_csv(sys.stdout)

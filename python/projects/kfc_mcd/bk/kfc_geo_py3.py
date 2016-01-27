#!/usr/bin/env python
# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import csv
import re
from selenium import webdriver
import time

driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
url = 'http://beian.hndrc.gov.cn/indexinvestment.jsp?id=162518'
driver.get(url)
print (driver.find_element_by_id('constructcontent').text)
driver.close()

# params = {'cname': '上海', 'pid': '', 'pageIndex': 5, 'pageSize': 10}
# url = 'http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=cname'
# r = driver.post(url, data = params)
# print r
# cookie_name = 'Hm_lpvt_1039f1218e57655b6677f30913227148'
# cookie_value = '1438570921'
# driver.add_cookie({'name':cookie_name, 'value':cookie_value, 'path':'/'})

# for cookie in driver.get_cookies():
#     print "%s -> %s" % (cookie['name'], cookie['value'])

# url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'


#http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=%E4%B8%8A%E6%B5%B7&pid=&pageIndex=8&pageSize=10
#
# data = urllib.urlencode(values)
# req = urllib2.Request(url, data)
# response = urllib2.urlopen(req)
# html = response.read().decode('utf-8')
# bsObj = BeautifulSoup(html)
# print bsObj.find('tbody', {'id': 'listhtml'})

#=======works for mac static pages=====================
#======写csv文件表头字段==================================
# csvFile = open('./mcd_official_geo.csv', 'a')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('id', 'shopName', 'lat', 'lng'))
# finally:
# 	csvFile.close()
# id = 1

#======每页geo location info读取函数===================================
# baseUrl = 'http://rl.mcdonalds.com.cn/rl/index.php?province=%E4%B8%8A%E6%B5%B7&city=-1&type2=&address=&range=&curpage='
#
# regex_lng = re.compile('1\d{2}[.]\d{1,10}')
# regex_lat = re.compile('3\d{1}[.]\d{1,10}')
#
# for x in range(35):
#     # print x
# 	html = urllib.urlopen(baseUrl + str(x + 1)).read().decode('utf-8')
# 	bsObj = BeautifulSoup(html, "html.parser")
# 	allSpan = bsObj.findAll('span')
# 	for span in allSpan:
# 		shopName = span.find('b').get_text().encode('utf-8')
# 		print shopName
# 		rawGeo = span.find('a')['onclick']
# 		lat = re.search(regex_lat, rawGeo).group()
# 		lng = re.search(regex_lng, rawGeo).group()
# 		print lat
# 		print lng
# 		csvFile = open('./mcd_official_geo.csv', 'a')
# 		try:
# 			writer = csv.writer(csvFile)
# 			writer.writerow((id, shopName, lat, lng))
# 			id += 1
# 		finally:
# 			csvFile.close()

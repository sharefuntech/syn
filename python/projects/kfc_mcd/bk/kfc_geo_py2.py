#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib, urllib2
from bs4 import BeautifulSoup
import csv
import AddressGeo_baidu_py2
import re
from selenium import webdriver
import cookielib

url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'

headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'}

driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

values = {'cname': '上海', 'pageIndex': 5, 'pageSize': 10}
data = urllib.urlencode(values)

cj = cookielib.CookieJar();
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
urllib2.install_opener(opener)


# req = urllib2.Request(url, data, headers = headers)
# response = urllib2.urlopen(req)
# # response = driver.post(url, data, headers = headers)
# html = response.read().decode('utf-8')
# bsObj = BeautifulSoup(html)
# print bsObj.find('tbody', {'id': 'listhtml'})
cj = cookielib.CookieJar();
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
driver.manage().addCookie(opener)

# urllib2.install_opener(opener);

driver.get(url)
# bsObj = BeautifulSoup(html)
print driver.find_element_by_id('listhtml')
driver.close()

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

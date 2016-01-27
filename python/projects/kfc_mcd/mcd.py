#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib, urllib2
from bs4 import BeautifulSoup
import csv
import AddressGeo_baidu_py2
import re

#======写csv文件表头字段==================================
csvFile = open('./mcd_official_geo.csv', 'a')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('id', 'shopName', 'lat', 'lng'))
finally:
	csvFile.close()
id = 1


#======每页地址读取函数===================================
baseUrl = 'http://rl.mcdonalds.com.cn/rl/index.php?province=%E4%B8%8A%E6%B5%B7&city=-1&type2=&address=&range=&curpage='

regex_lng = re.compile('1\d{2}[.]\d{1,10}')
regex_lat = re.compile('3\d{1}[.]\d{1,10}')

for x in range(35):
    # print x
	html = urllib.urlopen(baseUrl + str(x + 1)).read().decode('utf-8')
	bsObj = BeautifulSoup(html, "html.parser")
	allSpan = bsObj.findAll('span')
	for span in allSpan:
		shopName = span.find('b').get_text().encode('utf-8')
		print shopName
		rawGeo = span.find('a')['onclick']
		lat = re.search(regex_lat, rawGeo).group()
		lng = re.search(regex_lng, rawGeo).group()
		print lat
		print lng
		csvFile = open('./mcd_official_geo.csv', 'a')
		try:
			writer = csv.writer(csvFile)
			writer.writerow((id, shopName, lat, lng))
			id += 1
		finally:
			csvFile.close()

#======每页地址读取函数===================================
# def getShopGeo(page):
# 	pageUrl = baseUrl + page
# 	html = urllib2.urlopen(pageUrl).read().decode('utf-8')
# 	bsObj = BeautifulSoup(html, "html.parser")
# print bsObj
# restaurant = bsObj.find('tbody', {'class': 'result_tbody'}).findAll('span')
# restaurant = bsObj.findAll('span').find('br')
# restaurant = bsObj.findAll('a', {'class': 'number'})
# print restaurant[2]['onclick']
# for shop in restaurant:
	# print shop['onclick']
# for shop in restaurant:
# 	if shop.find('span').find('a'):
# 		address = shop.find('span').find('a').get_text().encode('utf-8')
# 		print address
# 	else:
# 		print 'not target tr'

# for shop in restaurant:
# 	print shop.get_text().encode('utf-8')

# print restaurant
# restaurant = bsObj.find('div', {'class': 'couponTitle1'}).find('a').get_text().encode('utf-8')
# address = bsObj.find('div', {'class': 'couponAddress'}).get_text().encode('utf-8')
# print restaurant
# print address

# for shop in bsObj.findAll('div', {'class': 'shopRow'}):
# 	shopName = shop.find('div', {'class': 'couponTitle1'}).find('a').get_text().encode('utf-8')
# 	shopAddress = shop.find('div', {'class': 'couponAddress'}).get_text().encode('utf-8')
#
# 	shopAddressFull = '上海市' + shopAddress
# 	shopLocation = AddressGeo_baidu_py2.getGeoForAddress(shopAddressFull)
# 	lat = shopLocation[0]
# 	lng = shopLocation[1]
#
# 	csvFile = open('./kfc_geo.csv', 'a')
# 	try:
# 		writer = csv.writer(csvFile)
# 		writer.writerow((id, shopName, shopAddress, lat, lng))
# 		id += 1
# 	finally:
# 		csvFile.close()

    # print "餐厅：%s, 地址：%s" %(shopName, shopAddress)






# for address in bsObj.findAll('div', {'class': 'couponAddress'}):
#     print(address.get_text())

#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib, urllib2
from bs4 import BeautifulSoup
import csv
import AddressGeo_baidu_py2

csvFile = open('./mcd_geo.csv', 'a')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('id', 'shopName', 'shopAddress', 'lat', 'lng'))
finally:
	csvFile.close()
id = 1

#所有麦当劳的门店地址
url = 'http://kfc.xixik.com/shop/shanghai/mdl/'
# url = "http://kfc.xixik.com/shop/shanghai/kfc"
html = urllib2.urlopen(url).read().decode('gbk')
bsObj = BeautifulSoup(html, "html.parser")

# restaurant = bsObj.find('div', {'class': 'couponTitle1'}).find('a').get_text().encode('utf-8')
# address = bsObj.find('div', {'class': 'couponAddress'}).get_text().encode('utf-8')
# print restaurant
# print address

for shop in bsObj.findAll('div', {'class': 'shopRow'}):
	shopName = shop.find('div', {'class': 'couponTitle1'}).find('a').get_text().encode('utf-8')
	shopAddress = shop.find('div', {'class': 'couponAddress'}).get_text().encode('utf-8')

	shopAddressFull = '上海市' + shopAddress
	shopLocation = AddressGeo_baidu_py2.getGeoForAddress(shopAddressFull)
	lat = shopLocation[0]
	lng = shopLocation[1]

	csvFile = open('./mcd_geo.csv', 'a')
	try:
		writer = csv.writer(csvFile)
		writer.writerow((id, shopName, shopAddress, lat, lng))
		id += 1
	finally:
		csvFile.close()

    # print "餐厅：%s, 地址：%s" %(shopName, shopAddress)




# if isinstance(address , unicode ):
#     print "unicode"
# elif isinstance(address, str):
#     print "str"
# else:
#     print "no idea"

# for address in bsObj.findAll('div', {'class': 'couponAddress'}):
#     print(address.get_text())

#!/usr/bin/python
# -*- coding: utf-8 -*-
import googleAddressGeo
import csv
import time
import urllib
import json

'''
读入csv格式保存的门店地址，通过google map获取无偏移的经纬坐标
'''
csvData = open('./kfc_address_headless.csv', 'rb')
shopAddrData = csv.reader(csvData)

proxies = {'http':'http://127.0.0.1:8087'}

geoData = open('./kfc_official_geo_google.csv', 'a')
try:
	shopGeoWriter = csv.writer(geoData)
	shopGeoWriter.writerow(('shopAddress', 'lat', 'lng'))
finally:
	geoData.close()

for row in shopAddrData:
	# print row[1].decode('utf-8')
	address = row[1].decode('utf-8').encode('utf-8')
	shopGeo = googleAddressGeo.getGeoForAddress(address)
	lat = shopGeo[0]
	lng = shopGeo[1]
	print lat
	print lng

	geoData = open('./kfc_official_geo_google.csv', 'a')
	try:
		shopGeoWriter = csv.writer(geoData)
		shopGeoWriter.writerow((address, lat, lng))
		# global id += 1
	finally:
		geoData.close()
	
csvData.close()

#================测试googleAddressGeo单个函数通过=======================
# address = "上海市浦东新区祝桥镇卓耀路58弄91号211室"
# googleAddressGeo.getGeoForAddress(address)
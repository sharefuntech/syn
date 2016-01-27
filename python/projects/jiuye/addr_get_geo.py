#!/usr/bin/python
# -*- coding: utf-8 -*-
import csv
import urllib
import baiduAddressGeo
import time

#读入原始记录文件
addrData = open('./addr_all.csv', 'rb')
addrAll = csv.reader(addrData)

#创建目标坐标文件，写入第一行标题栏
geoData = open('./geo_all.csv', 'a')
try:
	geoWriter = csv.writer(geoData)
	geoWriter.writerow(('province', 'fullAddr', 'time', 'lat', 'lng'))
finally:
	geoData.close()

#处理原始文件每一行，从百度接口获取坐标
for row in addrAll:
	# print row[1].decode('utf-8')
	province = row[0]
	fullAddr = row[0] + row[1] + row[2]
	time = row[3]
	addressEncode = fullAddr.decode('utf-8').encode('utf-8')
	addrGeo = baiduAddressGeo.getGeoForAddress(addressEncode)
	lat = addrGeo[0]
	lng = addrGeo[1]

	print province, fullAddr, time, lat, lng

	#将百度返回的坐标写入目标文件
	geoData = open('./geo_all.csv', 'a')
	try:
		geoWriter = csv.writer(geoData)
		geoWriter.writerow((province, fullAddr, time, lat, lng))
	finally:
		geoData.close()
	
addrData.close()
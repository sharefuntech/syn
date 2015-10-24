#!/usr/bin/python
# -*- coding: utf-8 -*-
import csv
import urllib
import baiduAddressGeo
import time

#读入原始记录文件
addrData = open('./accident.csv', 'rb')
addrAll = csv.reader(addrData)

#测试源文件完整性和兼容性
# for row in addrAll:
# 	print row[3]

#创建目标坐标文件，写入第一行标题栏
geoData = open('./geo_accident.csv', 'a')
try:
	geoWriter = csv.writer(geoData)
	geoWriter.writerow(('district', 'hurt', 'time', 'place','lat', 'lng'))
finally:
	geoData.close()

#处理原始文件每一行，从百度接口获取坐标
for row in addrAll:
	# print row[1].decode('utf-8')
	district = row[0]
	hurt = row[1]
	time = row[2]
	place = row[3]
	fullAddr = '上海市' + row[3]
	addressEncode = fullAddr.decode('utf-8').encode('utf-8')
	addrGeo = baiduAddressGeo.getGeoForAddress(addressEncode)
	lat = addrGeo[0]
	lng = addrGeo[1]

	print district, hurt, time, place, lat, lng

	#将百度返回的坐标写入目标文件
	geoData = open('./geo_accident.csv', 'a')
	try:
		geoWriter = csv.writer(geoData)
		geoWriter.writerow((district, hurt, time, place, lat, lng))
	finally:
		geoData.close()
	
addrData.close()
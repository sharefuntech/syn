#!/usr/bin/python
# -*- coding: utf-8 -*-
import googleAddressGeo
import csv
import time
import urllib
import json

'''
读入csv格式保存的地址，通过google map获取osm无偏移的经纬坐标(hope so, not ensure google geo data is perfect for osm)
'''
inputData = open('./accident.csv', 'rb')
inputDataReader = csv.reader(inputData)

proxies = {'http':'http://127.0.0.1:8087'}

geoData = open('./geo_google_accident_district.csv', 'a')
try:
	geoDataWritter = csv.writer(geoData)
	geoDataWritter.writerow(('police', 'hurt', 'time', 'place','lat', 'lng'))
	# geoDataWritter.writerow(('police', 'hurt', 'time', 'place','lat', 'lng', 'district'))
finally:
	geoData.close()

for row in inputDataReader:
	try:
		police = row[0]
		hurt = row[1]
		time = row[2]
		place = row[3]
		fullAddr = '上海市' + row[3]
		addressEncode = fullAddr.decode('utf-8').encode('utf-8')
		addrGeo = googleAddressGeo.getGeoForAddress(addressEncode)
		lat = addrGeo[0]
		lng = addrGeo[1]
		# district = addrGeo[2]

		print police, hurt, time, place, lat, lng
	except Exception, e:
		print 'address not match geo'
		continue

	geoData = open('./geo_google_accident_district.csv', 'a')
	try:
		geoDataWritter = csv.writer(geoData)
		geoDataWritter.writerow((police, hurt, time, place, lat, lng))
		# geoDataWritter.writerow((police, hurt, time, place, lat, lng, district))
	finally:
		geoData.close()
	
inputData.close()

#================测试googleAddressGeo单个函数通过=======================
# address = "上海市浦东新区祝桥镇卓耀路58弄91号211室"
# googleAddressGeo.getGeoForAddress(address)
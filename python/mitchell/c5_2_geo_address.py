#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import urllib
from urllib.request import urlopen
from bs4 import BeautifulSoup

#==============following works=======================
# response = urlopen(urllib.parse.quote("http://maps.googleapis.com/maps/api/geocode/json?address=上海市中山北一路121号", ':?=/')).read().decode('utf-8')
#
# responseJson = json.loads(response)
#
# print(response)
#=================================================

#==============following works=======================
# address = "上海市杨浦区邯郸路220号"
# addressUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address
# addressUrlQuote = urllib.parse.quote(addressUrl, ':?=/')
# response = urlopen(addressUrlQuote).read().decode('utf-8')
# responseJson = json.loads(response)
# # print(type(response))
# # print(type(responseJson))
# lat = responseJson.get('results')[0]['geometry']['location']['lat']
# lng = responseJson.get('results')[0]['geometry']['location']['lng']
# print(address + '的经纬坐标是: %f, %f'  %(lat, lng))
#==================with xml version=====================
# address = "上海市中山北一路121号"
# addressUrl = "http://maps.googleapis.com/maps/api/geocode/xml?address=" + address
# addressUrlQuote = urllib.parse.quote(addressUrl, ':?=/')
# response = urlopen(addressUrlQuote).read().decode('utf-8')
# bsObj = BeautifulSoup(response)
# print(bsObj.find('location'))
#==============rewrite into function=======================
def getGeoForAddress(address):
	# address = "上海市中山北一路121号"
	addressUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address
	addressUrlQuote = urllib.parse.quote(addressUrl, ':?=/')
	response = urlopen(addressUrlQuote).read().decode('utf-8')
	responseJson = json.loads(response)
	# print(type(response))
	# print(type(responseJson))
	lat = responseJson.get('results')[0]['geometry']['location']['lat']
	lng = responseJson.get('results')[0]['geometry']['location']['lng']
	print(address + '的经纬度是: %f, %f'  %(lat, lng))
	return [lat, lng]

# place = getGeoForAddress('浙江大学紫金港校区')
# print(place[0])

#===============根据经纬度查询地址==========
# location = "31.27,121.47"
# locationUrl = "https://maps.google.com/maps/api/geocode/json?language=zh-CN&sensor=false&latlng=" + location
# locationUrlQuote = urllib.parse.quote(locationUrl, ':?=/')
# response = urlopen(locationUrlQuote).read().decode('utf-8')
# # responseJson = json.loads(response)
# print(response)

print(urlopen('https://maps.google.com/maps/api/geocode/xml?language=zh-CN&latlng=31.27,121.47').read())
# print(type(response))
# print(type(responseJson))
# lat = responseJson.get('results')[0]['geometry']['location']['lat']
# lng = responseJson.get('results')[0]['geometry']['location']['lng']
# print(address + '的经纬坐标是: %f, %f'  %(lat, lng))

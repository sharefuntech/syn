#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib
import json

def getGeoForAddress(address):
	# address = "上海市中山北一路121号"
	addressUrl = "http://api.map.baidu.com/geocoder/v2/?output=json&ak=SEY17qP3iqa5bGd9cqAuV0ed&address=" + address
    #百度中文url不需要转码
	# addressUrlQuote = urllib.quote(addressUrl, ':?=/')
	try:
		response = urllib.urlopen(addressUrl).read()
		responseJson = json.loads(response)
	except Exception, e:
		print 'connection error with baidu service'

	lat = responseJson.get('result')['location']['lat']
	lng = responseJson.get('result')['location']['lng']

	print address + '的经纬度是: %f, %f'  %(lat, lng)
	
	return [lat, lng]

if __name__ == '__main__':
    main()

# place = getGeoForAddress("上海市中山北一路121号")
# print place[1]

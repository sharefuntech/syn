#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib
import json

def getGeoForAddress(address):
	# address = "上海市中山北一路121号"
	addressUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address
    #中文url需要转码才能识别
	# addressUrlQuote = urllib.parse.quote(addressUrl, ':?=/')
	addressUrlQuote = urllib.quote(addressUrl, ':?=/')
	response = urllib.urlopen(addressUrlQuote).read().decode('utf-8')
	responseJson = json.loads(response)
	# print(response)
    #type of response is string
	# print(type(response))
    #type of responseJson is dict
	# print(type(responseJson))
	lat = responseJson.get('results')[0]['geometry']['location']['lat']
	lng = responseJson.get('results')[0]['geometry']['location']['lng']
	print address + '的经纬度是: %f, %f'  %(lat, lng)
	return [lat, lng]

if __name__ == '__main__':
    main()

#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib
import json
import urllib2  

# proxy = urllib2.ProxyHandler({'http': '127.0.0.1:8087'})
# opener = urllib2.build_opener(proxy)
# urllib2.install_openner(opener)

# address = "上海市中山北一路121号"  
# addressUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address  
# #中文url需要转码才能识别  
# # addressUrlQuote = urllib.quote(addressUrl, ':?=/') 
# addressUrlQuote = urllib2.quote(addressUrl, ':?=/') 

 
# # response = urllib.urlopen(addressUrlQuote).read().decode('utf-8')
# response = urllib2.urlopen(addressUrlQuote).read().decode('utf-8')
# responseJson = json.loads(response) 

proxies = {'http':'http://127.0.0.1:8087'}
address = "上海市中山北一路121号"  
addressUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address  
#中文url需要转码才能识别  
addressUrlQuote = urllib.quote(addressUrl, ':?=/') 
response = urllib.urlopen(addressUrlQuote, proxies=proxies).read().decode('utf-8')
responseJson = json.loads(response) 

lat = responseJson.get('results')[0]['geometry']['location']['lat']  
lng = responseJson.get('results')[0]['geometry']['location']['lng']  

print address + '的经纬度是: %f, %f'  %(lat, lng) 
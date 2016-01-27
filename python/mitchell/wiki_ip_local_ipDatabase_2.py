import urllib2, os, os.path, urllib 
# from urllib.request import urlopen
from bs4 import BeautifulSoup
import datetime
import random
import re
import json
import time

# historyUrl = 'https://en.wikipedia.org/w/index.php?title=Python_(programming_language)&offset=20150602174040&limit=500&action=history'

# html = urlopen(historyUrl)
# bsObj = BeautifulSoup(html)

# ipAddress = bsObj.findAll('a', {'class': 'mw-anonuserlink'})
# ipAddressList = set()
# for ip in ipAddress:
# 	ipText = ip.get_text()
# 	print(ipText)
# 	if ipText not in ipAddressList:
# 		ipAddressList.add(ipText)
# #watch ip database
# print(ipAddressList)

# #write ip database
# fileObject = open('ipAddressList.txt', 'w')
# for ip in ipAddressList:
# 	fileObject.write(ip)
# 	fileObject.write('\n')
# fileObject.close()

ipFile = open('ipAddressList.txt')
ipList = ipFile.read()
ipListCol = ipList.split()

ipLocation = {}

def getIpGeo(ip):
	url = "http://freegeoip.net/json/" + ip
	headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'} 
	req = urllib2.Request(url, headers = headers)
	try:
		response = urllib2.urlopen(req).read().decode('utf-8')  
	except HTTPError:
		return None
	responseJson = json.loads(response)
	#collect city information corresponse to ip address
	ipGeo = {}
	ipGeo['country_code'] = responseJson.get('country_code')
	ipGeo['country'] = responseJson.get('country_name')
	ipGeo['latitude'] = responseJson.get('latitude')
	ipGeo['longitude'] = responseJson.get('longitude')
	#deposite ipGeo info into set
	ipLocation[ip] = ipGeo
	#watch each cycle for ipgeo fetch
	print ipGeo
	time.sleep(15)
	return ipLocation

# for ip in ipListCol:
# 	url = "http://freegeoip.net/json/" + ip
# 	headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'} 
# 	req = urllib2.Request(url, headers = headers)
# 	response = urllib2.urlopen(req).read().decode('utf-8')  

# 	# response = urlopen("http://freegeoip.net/json/" + ip).read().decode('utf-8')
# 	responseJson = json.loads(response)
# 	#collect city information corresponse to ip address
# 	ipGeo = {}
# 	ipGeo['country_code'] = responseJson.get('country_code')
# 	ipGeo['country'] = responseJson.get('country_name')
# 	ipGeo['latitude'] = responseJson.get('latitude')
# 	ipGeo['longitude'] = responseJson.get('longitude')
# 	#deposite ipGeo info into set
# 	ipLocation[ip] = ipGeo
# 	time.sleep(15)
# 	#watch single ipGeo info
# 	print ipGeo 

for ip in ipListCol:
	getIpGeo(ip)

print ipLocation 

jsObj = json.dumps(ipLocation)
fileObject = open('ip_json_all.json', 'w')
fileObject.write(jsObj)
fileObject.close()

# ipLocation = {}
# #loop for fetch geo info
# for ip in ipAddressList:
# 	response = urlopen("http://freegeoip.net/json/" + ip).read().decode('utf-8')
# 	responseJson = json.loads(response)
# 	#collect city information corresponse to ip address
# 	city = {}
# 	city['city'] = responseJson.get('city')
# 	city['country'] = responseJson.get('country_code')
# 	city['latitude'] = responseJson.get('latitude')
# 	city['longitude'] = responseJson.get('longitude')
# 	#deposite city info into set
# 	ipLocation[city['city']] = city
# 	time.sleep(2)
# 	#watch single city info
# 	print(city)

# print(ipLocation)
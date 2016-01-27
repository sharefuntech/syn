import random
import json
import csv

ipFile = open('ip_geo_part.txt')
ipList = ipFile.read()
# print ipList
ipListCol = ipList.split()
json.dump(ipListCol)
# print ipListCol
# print ipStrObj
# csvFile = open('./ipGeo.csv', 'wt')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('country', 'latitude', 'longitude'))
# 	for ip in ipStrObj:
# 		writer.writerow((ip['country'], ip['latitude'], ip['longitude']))
# finally:
# 	csvFile.close()


# ipTable = [{'latitude': 51.652, 'country': u'United Kingdom', 'longitude': -3.232, 'country_code': u'GB'},{'latitude': 37.35, 'country': u'United States', 'longitude': -121.986, 'country_code': u'US'},{'latitude': 57.444, 'country': u'Denmark', 'longitude': 10.547, 'country_code': u'DK'},{'latitude': 29.548, 'country': u'United States', 'longitude': -98.292, 'country_code': u'US'},{'latitude': 47.483, 'country': u'Austria', 'longitude': 16.483, 'country_code': u'AT'}]

# for ip in ipTable:
# 	print ip['latitude']


# csvFile = open('./ipGeo.csv', 'wt')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('country', 'latitude', 'longitude'))
# 	for ip in ipTable:
# 		writer.writerow((ip['country'], ip['latitude'], ip['longitude']))
# finally:
# 	csvFile.close()

# csvFile = open('./ipGeo.csv', 'wt')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('country', 'latitude', 'longitude'))
# finally:
# 	csvFile.close()

# for ip in ipTable:
# 	csvFile = open('./ipGeo.csv', 'wt')
# 	try:
# 		writer = csv.writer(csvFile)
# 		writer.writerow((ip['country'], ip['latitude'], ip['longitude']))
# 	finally:
# 		csvFile.close()



# for x in xrange(1,10):
# 	print random.randint(0, 100)
# ipList = ['158.59.194.213', '18.9.14.13', '58.59.14.21']

# ipLocation = {}

# for x in xrange(1,5):
# 	city = {}
# 	city['name'] = x
# 	city['lati'] = x
# 	city['lang'] = x
# 	# print city
# 	ipLocation[city['name']] = city

# print ipLocation

# numList = [1, 2, 3, 3, 4, 5, 5, 6, 6, 6]
# numSet = set()

# for num in numList:
# 	if num not in numSet:
# 		numSet.add(num)

# print numSet
# ipTable = ['158.59.194.213', '18.9.14.13', '58.59.14.21']
# fileObject = open('sampleList.txt', 'w')
# for ip in ipTable:
# 	fileObject.write(ip)
# 	fileObject.write('\n')
# fileObject.close()

# dictObj = {
# 	'andy':{
# 		'age': 23,
# 		'city': 'shanghai',
# 		'skill': 'python'
# 	},
# 	'william': {
# 		'age': 33,
# 		'city': 'hangzhou',
# 		'skill': 'js'
# 	}
# }

# jsObj = json.dumps(dictObj)

# # print jsObj

# fileObject = open('jsonFile.json', 'w')
# fileObject.write(jsObj)
# fileObject.close()
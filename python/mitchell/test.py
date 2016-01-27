#!/usr/bin/env python
# -*- coding: utf-8 -*-
import random
import json
import csv
import re

str = '123(456, this , 34.567, 123, 778)'
str_2 = 'hi there, hello wrold! 123(456, this , 34.567, 123, 778)'
r_2 = re.compile(r'^this.*')
# r = re.compile(r'\bthis\b')
# red = r.match(str)
match = r_2.match(str_2)
# if match:
#     print match.group()

str = 'ayellodogrerft1234567890'
str_3 = 'ayellodogrerft'
str_4 = 'cn12345678904567'
str_5 = 'openMarkerTipById1(16272,this,121.42831,31.184939)'
# regex = re.compile('^openMarkerTipById1\(\d{5}[,]this[,].*\)$')
regex = re.compile('1\d{2}[.]\d{1,10}')
regex_2 = re.compile('3\d{1}[.]\d{1,10}')

red = re.search(regex, str_5)
if red is not None:
    # print 'Got'
    print red.group()
else:
    print 'Nope'

red_2 = re.search(regex_2, str_5)
if red_2 is not None:
    # print 'Got'
    print red_2.group()
else:
    print 'Nope'

print re.search(regex_2, str_5).group()



# for x in range(3):
#     print x

# getGeoForAddress('上海市中山北一路121号')
# str = 'hello world'
# print str[0:4]
# print str[5:]
#============================================
#中文注释，需要代码首页加入utf-8编码申明  -*- coding: utf-8 -*-
'''
中文出现
'''
# ipFile = open('test.json')
# ipList = ipFile.read()
# # jsFile = simplejson.load(ipList)
# print type(ipList)
# print ipList

#===============================================================
# info = {'name' : 'jay', 'sex' : 'male', 'age': 22}
# print type(info)
# jsoninfo = json.dumps(info)
# print jsoninfo
# print type(jsoninfo)

#=================================================================
# ip1 = {'latitude': 51.652, 'country': u'Kingdom', 'longitude': -3.232, 'country_code': u'GB'}
# ip2 = {'latitude': 37.35, 'country': u'United States', 'longitude': -121.986, 'country_code': u'US'}

# ipDict = {}

# ipDict = dict(ip1.items() + ip2.items())

# print ipDict
#==================================================================

# ipFile = open('ip_geo_part.txt')
# ipList = ipFile.read()
# # print ipList
# ipListCol = ipList.split()
# json.dump(ipListCol)
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

#====================================================================
'''
write list to csv
it works fine
'''
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
#====================================================================

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

import urllib2, os, os.path, urllib
import datetime
import random
import re
import json
import time
import csv

"""
read ip list for fetch latitude/longitude
"""
ipFile = open('ipAddressList.txt')
# ipFile = open('ip_list_short.txt')
ipList = ipFile.read()
ipListCol = ipList.split()
# print ipListCol

"""
write first colum of csv
"""
csvFile = open('./ip_csv_append.csv', 'wt')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('country_code', 'country', 'latitude', 'longitude'))
finally:
	csvFile.close()

"""
function for fetch latitude/longitude
"""
def getIpGeo(ip):
	url = "http://freegeoip.net/json/" + ip
	headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'}
	req = urllib2.Request(url, headers = headers)
	try:
		response = urllib2.urlopen(req).read().decode('utf-8')
	except HTTPError:
		return None
	responseJson = json.loads(response)

	#fetch data from json object
	country_code = responseJson.get('country_code')
	country = responseJson.get('country_name')
	latitude = responseJson.get('latitude')
	longitude = responseJson.get('longitude')

	"""
	write csv with append model
	"""
	csvFile = open('./ip_csv_append.csv', 'a')
	try:
		writer = csv.writer(csvFile)
		writer.writerow((country_code, country, latitude, longitude))
	finally:
		csvFile.close()

"""
loop for geo data fetch via each ip
"""
for ip in ipListCol:
	getIpGeo(ip)

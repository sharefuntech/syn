from urllib.request import urlopen
from bs4 import BeautifulSoup
import datetime
import random
import re
import json
import time

historyUrl = 'https://en.wikipedia.org/w/index.php?title=Python_(programming_language)&offset=20150602174040&limit=500&action=history'

html = urlopen(historyUrl)
bsObj = BeautifulSoup(html)

ipAddress = bsObj.findAll('a', {'class': 'mw-anonuserlink'})
ipAddressList = set()
for ip in ipAddress:
	ipText = ip.get_text()
	print(ipText)
	if ipText not in ipAddressList:
		ipAddressList.add(ipText)
#watch ip database
print(ipAddressList)

#write ip database
fileObject = open('ipAddressList.txt', 'w')
for ip in ipAddressList:
	fileObject.write(ip)
	fileObject.write('\n')
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
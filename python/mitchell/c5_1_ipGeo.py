import json
from urllib.request import urlopen

def getCountry(ipaddress):
	city = {}
	response = urlopen("http://freegeoip.net/json/" + ipaddress).read().decode('utf-8')
	responseJson = json.loads(response)
	city['city'] = responseJson.get('city')
	city['latitude'] = responseJson.get('latitude')
	city['longitude'] = responseJson.get('longitude')
	return city
	# return responseJson.get('country_name', 'latitude', 'longitude')

print(getCountry('116.236.167.220'))
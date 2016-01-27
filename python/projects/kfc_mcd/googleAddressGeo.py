#!/usr/bin/env python  
# -*- coding: utf-8 -*-  
import urllib
import json  

def getGeoForAddress(address):  
    # address = "上海市中山北一路121号"

    proxies = {'http':'http://127.0.0.1:8087'}

    addressUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address  
    #中文url需要转码才能识别  
    addressUrlQuote = urllib.quote(addressUrl, ':?=/') 

    response = urllib.urlopen(addressUrlQuote, proxies=proxies).read().decode('utf-8')
    responseJson = json.loads(response) 

    lat = responseJson.get('results')[0]['geometry']['location']['lat']  
    lng = responseJson.get('results')[0]['geometry']['location']['lng']

    # print address + '的经纬度是: %f, %f'  %(lat, lng)
    print address + '的经纬度是: %f, %f'  %(lat, lng) 
 
    return [lat, lng]  

if __name__ == '__main__':  
    main()  

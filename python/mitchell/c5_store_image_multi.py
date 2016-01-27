#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import urllib
from urllib import request
from urllib.request import urlretrieve
from urllib.request import urlopen
from bs4 import BeautifulSoup

# downloadDictionary = 'downloaded'
# baseUrl = 'http://guoweish.github.io'
downloadDictionary = 'downloaded_3'
baseUrl = 'http://xiaoji-chen.com'

def getAbsoluteUrl(baseUrl, source):
    if source.startswith('http://www.'):
        url = 'http://' + source[11:]
    elif source.startswith('http://'):
        url = source
    elif source.startswith('www.'):
        url = source[4:]
        url = 'http://' + source
    else:
        url = baseUrl + '/' + source
    if baseUrl not in url:
        return None
    return url

def getDownloadPath(baseUrl, absoluteUrl, downloadDictionary):
    path = absoluteUrl.replace('www', '')
    path = path.replace(baseUrl, '')
    path = downloadDictionary + path
    dictionary = os.path.dirname(path)

    if not os.path.exists(dictionary):
        os.makedirs(dictionary)

    return path
    #path包含了文件目录路径和图片扩展名

# #设置单一下载目录
# if not os.path.exists(downloadDictionary):
#     os.makedirs(downloadDictionary)

#python3的urllib库包含了urllib和urllib2,所以api已经改动，headers用法如下
headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'}
req = urllib.request.Request(baseUrl,  headers = headers)

html = urllib.request.urlopen(req)
bsObj = BeautifulSoup(html)
downloadList = bsObj.findAll(src = True)

for download in downloadList:
    fileUrl = getAbsoluteUrl(baseUrl, download['src'])
    if fileUrl is not None:
        print(fileUrl)
        # urlretrieve(fileUrl, downloadDictionary)
    urlretrieve(fileUrl, getDownloadPath(baseUrl, fileUrl, downloadDictionary))

# urlretrieve(fileUrl, getDownloadPath(baseUrl, fileUrl, downloadDictionary))

# html = urlopen('http://guoweish.github.io')
# bsObj = BeautifulSoup(html)
# imageLocation = bsObj.find('a', {'class': 'workthumb'}).find('img')['src']
# imagePath = baseUrl + imageLocation
# urlretrieve(imagePath, 'workthumb.png')
# imageLocation = bsObj.findAll('a', {'class': 'workthumb'})
# print(type(imageLocation))
# for imageHolder in imageLocation
#     image = imageHolder.find('img')['src']
#     print(image)

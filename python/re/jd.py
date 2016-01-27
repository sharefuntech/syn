#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
import re
import urllib
from bs4 import BeautifulSoup

url = 'http://127.0.0.1:8888/test.html'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get(url)

#===验证selenium在find之后再findall的关系
divList = driver.find_element_by_id('choose-color')

itemList = driver.find_elements_by_xpath('//div[@id = "choose-color"]//div[@class = "dd"]//div[not(contains(@class, "disabled"))]')
print itemList
# pList = itemList.find_elements_by_xpath('//div[not(contains(@class, "disabled"))]')
# print divList.text.encode('utf-8')
# print itemList.text.encode('utf-8')
# print itemList
# print pList
# for p in pList:
# 	print p.text.encode('utf-8')

# for p in itemList:
# 	print p.text.encode('utf-8')

# html = urllib.urlopen(url).read()
# bsObj = BeautifulSoup(html, "html.parser")
#========bs虽然能找到目标dom，但是没有selenium的浏览器click等交互功能，还是不行
# divList = bsObj.find('div', {'id':'choose-color'}).findAll(attrs=re.compile('^item'))
# divList = bsObj.find('div', {'id':'choose-color'}).findAll(attrs=re.compile('disable$'))
# divList = bsObj.find('div', {'id':'choose-color'}).findAll(attrs={'class': re.compile('^item(?!disable$)')})
# divList = bsObj.find('div', {'id':'choose-color'}).findAll(attrs={'class': ['selected']})
# divList = bsObj.find('div', {'id':'choose-color'}).findAll(attrs={'class': re.compile('(item$)')})
# for d in divList:
# 	print d['class']
# 	if 'disable' in d['class']:
# 		print 'ya'
	# for c in d['class']:
	# 	if c == 'disable':
	# 		print 'ya'
	# 	else:
	# 		print 'nono'
	# if d['class'][1] == 'disable':
	# 	print 'ya'
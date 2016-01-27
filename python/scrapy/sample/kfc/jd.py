#!/usr/bin/python
# -*- coding: utf-8 -*-
import urllib
import urllib2
from bs4 import BeautifulSoup
from selenium import webdriver
# import requests
import time
import AddressGeo_baidu_py2

url = 'http://item.jd.com/1217501.html'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get(url)

time.sleep(2)

comm_bt = driver.find_element_by_id('detail-tab-comm').find_element_by_tag_name('a').text
print comm_bt
# page_curr = driver.find_element_by_class_name('ui-page').find_element_by_class_name('ui-page-curr').text
# print page_curr


#======works done!!!==================
def getAddress():
	shop_list = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('tr')
	printAddress()
	# shop_list = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('td')
	# for shop in shop_list:
	# 	print shop.text

def turnPage():
	getAddress()
	driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
	time.sleep(1)

def printAddress():
	for x in range(11):
		if x == 0:
			# print 'csv row'
			pass
		else:
			shop_cmd = "shop_address = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath('//tr[" +str(x + 1) + "]/td[2]').text"
			exec(shop_cmd)
			# print shop_address
			shop_address_encode = shop_address.encode('utf-8')
			full_address = '上海市' + shop_address_encode
			# print shop_address_encode
			# 转码有问题，参数无法传入经纬度获取函数
			AddressGeo_baidu_py2.getGeoForAddress(full_address)
			# AddressGeo_baidu_py2.getGeoForAddress(shop_address_encode)
			# for y in range(2):
			# 	find_cmd = "print driver.find_element_by_css_selector('#listhtml').find_element_by_xpath('//tr[" +str(x + 1) + "]/td[" +str(y + 1) + "]').text"
			# 	exec(find_cmd)

#final exec function
# for z in range(30):
# 	turnPage()
#==================================================

#========this turn page and get address works===================
# shop_list = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('td')

# for shop in shop_list:
# 	print shop.text

# print driver.find_element_by_css_selector('a[style*="text-decoration:underline"]').text

# driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()

# time.sleep(1)
# print driver.find_element_by_css_selector('a[style*="text-decoration:underline"]').text

# shop_list_2 = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('td')

# for shop_2 in shop_list_2:
# 	print shop_2.text
#===============================================================

#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
import time
import baiduAddressGeo
import googleAddressGeo
import csv

#======写csv文件表头字段==================================
csvFile = open('./kfc_official_geo_google.csv', 'a')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('shopName', 'lat', 'lng'))
finally:
	csvFile.close()
#set id for each shop
# id = 1

url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get(url)
time.sleep(1)

def nextPage():
	try:
		driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
	except Exception, e:
		print 'finish! no more pages!'
		return
	time.sleep(1)

def getShopGeo():
	for i in range(1,11):
		shopName_xpath = '//tr[' + str(i + 1) + ']/td[1]'
		shopAddress_xpath = '//tr[' + str(i + 1) + ']/td[2]'
		shopName = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopName_xpath).text.encode('utf-8')
		shopAddress = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopAddress_xpath).text

		shop_address_encode = shopAddress.encode('utf-8')
		full_address = '上海市' + shop_address_encode

		try:
			# shopGeo = baiduAddressGeo.getGeoForAddress(full_address)
			# use google geo api
			shopGeo = googleAddressGeo.getGeoForAddress(full_address)
		except Exception, e:
			print 'can not get geo for this address'
			pass
		lat = shopGeo[0]
		lng = shopGeo[1]

		csvFile = open('./kfc_official_geo_google.csv', 'a')
		try:
			writer = csv.writer(csvFile)
			writer.writerow((shopName, lat, lng))
			# global id += 1
		finally:
			csvFile.close()
		

		# print shopName
		# print shopAddress

for z in range(31):
	getShopGeo()
	nextPage()

#======可以完整抓取所有店面信息，字段还未拆分==================
# def getAddress():
# 	shop_list = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('tr')
# 	printAddress()
# 	# shop_list = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('td')
# 	# for shop in shop_list:
# 	# 	print shop.text

# def turnPage():
# 	getAddress()
# 	driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
# 	time.sleep(1)

# def printAddress():
# 	for x in range(11):
# 		if x == 0:
# 			# print 'csv row'
# 			pass
# 		else:
# 			shop_cmd = "shop_address = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath('//tr[" +str(x + 1) + "]/td[2]').text"
# 			exec(shop_cmd)
# 			# print shop_address
# 			shop_address_encode = shop_address.encode('utf-8')
# 			full_address = '上海市' + shop_address_encode
# 			# print shop_address_encode
# 			# 转码有问题，参数无法传入经纬度获取函数
# 			AddressGeo_baidu_py2.getGeoForAddress(full_address)
			# AddressGeo_baidu_py2.getGeoForAddress(shop_address_encode)
			# for y in range(2):
			# 	find_cmd = "print driver.find_element_by_css_selector('#listhtml').find_element_by_xpath('//tr[" +str(x + 1) + "]/td[" +str(y + 1) + "]').text"
			# 	exec(find_cmd)

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

#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
from bs4 import BeautifulSoup
import time
import csv
import re

#======写csv文件表头字段==================================
# csvFile = open('./iphone6_plus.csv', 'a')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('shopName', 'lat', 'lng'))
# finally:
# 	csvFile.close()

#===最贵！！！Apple iPhone 6 Plus (A1524) 128GB 银色 移动联通电信4G手机
url = 'http://item.jd.com/1217541.html'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')


driver.get(url)
time.sleep(2)

# driver.find_element_by_id('detail-tab-comm').find_element_by_tag_name('a').click()
driver.find_element_by_xpath('//li[@id = "detail-tab-comm"]//a').click()
time.sleep(2)

#===find previous and following sibling
# print driver.find_element_by_css_selector('a[class*="ui-page-next"]').find_element_by_xpath('//preceding-sibling[1]').text
# print driver.find_element_by_css_selector('div[class* = "ui-page-next"]>span + *').text
# print driver.find_element_by_xpath('//a[@class = "ui-pager-next"]').text
# print driver.find_element_by_xpath('//a[@class = "ui-pager-next"]/preceding-sibling::a').text
# print driver.find_element_by_xpath('//a[@class = "ui-page-curr"]').text
# print driver.find_element_by_xpath('//a[@class = "ui-page-curr"]/following-sibling::a').text

# #===拉取一个页面的评论，测试成功=======================
# comm_list = driver.find_elements_by_xpath('//div[@id = "comment-0"]//div[@class = "com-table-main"]//div[@class = "p-comment"]')
# for p in comm_list:
# 	print p.text
# #================================================
def getCommentsPerPage():
	try:
		comm_list = driver.find_elements_by_xpath('//div[@id = "comment-0"]//div[@class = "com-table-main"]//div[@class = "p-comment"]')
		for p in comm_list:
			print p.text
	except Exception, e:
		print 'could not fetch comments on this page'
	

def turnPage():
	try:
		driver.find_element_by_css_selector('a[class*="ui-page-curr"] + *').click()
		time.sleep(2)
		print 'current page is: %s' %driver.find_element_by_class_name('ui-page-curr').text
	except Exception, e:
		print 'turn page fail'
#====

for x in range(100):
	getCommentsPerPage()
	turnPage()

#===============================================

# page_curr = driver.find_element_by_class_name('ui-page').find_element_by_class_name('ui-page-curr').text
# print page_curr



#==================================================
#====由于页面重定向，点击后在本页面跟踪已经没有意义，继续用本页面的查询webdriver会出错，如要继续，只能通过比较页面url，确认是否在同一页，或者单独页面的不同产品处理
#==================================================
# #产品评论地址===============================================
# comm_bt = driver.find_element_by_id('detail-tab-comm').find_element_by_tag_name('a').text
# print comm_bt
# #===========================================================

#只抓取到2个，漏掉一个， 第一个'item selected'不匹配==============================
# colorList = driver.find_elements_by_xpath('//div[@id = "choose-color"]//div[@class = "dd"]//div[@class = "item"]')
# for c in colorList:
# 	print c.text
#全部抓取到3个
# colorList = driver.find_elements_by_xpath('//div[@id = "choose-color"]//div[@class = "dd"]//div[contains(@class, "item")]')
# print colorList

#测试点击链接查找====================
# versionList = driver.find_elements_by_xpath('//div[@id = "choose-version"]//div[@class = "dd"]//div[contains(@class, "item")]')
# for version in versionList:
# 	try:
# 		version.find_element_by_tag_name('a').click()
# 		time.sleep(7)
# 	except Exception, e:
# 		print 'click not support'
# 		continue
	
# 	try:
# 		phoneTypeList = driver.find_elements_by_xpath('//div[@id = "choose-type"]//div[@class = "dd"]//div[contains(@class, "item")]')
# 		for phoneType in phoneTypeList:
# 			print phoneType.text
# 	except Exception, e:
# 		print 'only one option'
# 		continue
	
	# for phoneType in phoneTypeList:
	# 	print phoneType.text

	# print version.find_element_by_tag_name('a').text
	# print version
	# version.find_element_by_tag_name('a').click()
	# time.sleep(7)


# #====单独测试点击，测试成功，需要抓取a标签再点击才有效=========================
# phoneTypeList = driver.find_elements_by_xpath('//div[@id = "choose-type"]//div[@class = "dd"]//div[contains(@class, "item")]')
# for phoneType in phoneTypeList:
# 	print phoneType.text

# v = driver.find_element_by_xpath('//div[@id = "choose-version"]//div[@class = "dd"]//div[contains(@class, "item")][2]//a')
# v.click()
# time.sleep(7)

# phoneTypeList_2 = driver.find_elements_by_xpath('//div[@id = "choose-type"]//div[@class = "dd"]//div[contains(@class, "item")]')
# for phoneType_2 in phoneTypeList_2:
# 	print phoneType_2.text
# #========================================

# #选择各类颜色==========================
# colorList = driver.find_elements_by_xpath('//div[@id = "choose-color"]//div[@class = "dd"]//div[contains(@class, "item")]')
# for color in colorList:
# 	print color.text, 'START ====================================='
# 	color.find_element_by_tag_name('a').click()
# 	time.sleep(7)
# 	#选择通信制式==========================
# 	versionList = driver.find_elements_by_xpath('//div[@id = "choose-version"]//div[@class = "dd"]//div[contains(@class, "item")]')
# 	for version in versionList:
# 		print version.text, 'START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
# 		# print version
# 		version.find_element_by_tag_name('a').click()
# 		time.sleep(7)
# 		# 选择容量==========================
# 		specList = driver.find_elements_by_xpath('//div[@id = "choose-spec"]//div[@class = "dd"]//div[not(contains(@class, "disabled"))]')
# 		for spec in specList:
# 			print spec.text, 'START ******************'
# 			#检查无货的不要点击
# 			spec.find_element_by_tag_name('a').click()
# 			time.sleep(7)	
# 			#选择购买方式==========================
# 			phoneTypeList = driver.find_elements_by_xpath('//div[@id = "choose-type"]//div[@class = "dd"]//div[contains(@class, "item")]')
# 			for phoneType in phoneTypeList:
# 				print phoneType.text

# 			print spec.text, 'END ******************'	
# 		print version.text, 'END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
# 	print color.text, 'END ======================================='


#=====exp====================================
#=======works==========================================
# sizeList = bsObj.find('div', {'id':'choose-spec'}).findAll('div', {'class':'item'})
# for size in sizeList:
# 	print size.text 
# 	if 'selected' in size['class']:
# 		print 'ya'
# 		print '======================='
# 		continue
# 	else:
# 		print 'na'

# 	print 'here do a lot stuff'
# 	print '======================='
#=========================================================

# regList = bsObj.find('div', {'id':'choose-spec'}).findAll(attrs = re.compile(r'''item$'''))
# print regList

# regList = bsObj.find('div', {'id':'choose-spec'}).findAll(lambda tag: tag.attrs == 'item' and not tag.attrs == 'disabled' )
# print regList

# regList = bsObj.find('div', {'id':'choose-spec'}).findAll(lambda tag: tag.attrs == 'item' or tag.attrs == 'item selected' )
# print regList


# for size in sizeList:
# 	try:
# 		size.find('a', {'title': '所选颜色版本该容量商品在该地区无货'})
# 		print 'i am '
# 	except Exception, e:
# 		print 'not me'
		
# sizeList = bsObj.find('div', {'class':'disabled'})
# print sizeList
# jsEx = driver.execute_script("return document.getElementById('choose-spec')")
# print jsEx.text

# print driver.find_element_by_css_selector('#choose-spec').find_element_by_xpath('//a[@title="所选颜色版本该容量商品在该地区无货"]').text
# print driver.find_element_by_css_selector('#choose-spec').find_element_by_xpath('//div[1]').text

# sizeList = driver.find_element_by_css_selector('#choose-spec').find_elements_by_xpath('//div[@class="item"][@class!="disabled"]')
# print sizeList

# phoneTypeList = driver.find_element_by_css_selector('#choose-type').find_elements_by_class_name('item')
# for phoneType in phoneTypeList:
# 	print phoneType.text
# print '==========================='

# testClick = driver.find_element_by_css_selector('#choose-version').find_element_by_xpath('//a[@title="公开版"]').click()
# time.sleep(4)

# phoneTypeList_2 = driver.find_element_by_css_selector('#choose-type').find_elements_by_class_name('item')
# for phoneType_2 in phoneTypeList_2:
# 	print phoneType_2.text

# outStock = driver.find_element_by_css_selector('#choose-spec').find_element_by_class_name('disabled')

# print outStock.text

# for x in range(3):
# 	findPath = '//div[' + str(x + 1) + '][@class="disabled"]'
# 	try:
# 		driver.find_element_by_css_selector('#choose-spec').find_element_by_class_name('dd').find_element_by_xpath(findPath)
# 	except Exception, e:
# 		print 'not me'
# 	else:
# 		print 'i got you!'
	

# for stock in outStock:
# 	try:
# 		# stock.find_element_by_css_selector('b[style*="display: none; "]')
# 		stock.find_element_by_xpath('//a[@title="所选颜色版本该容量商品在该地区无货"]')
# 	except Exception, e:
# 		print stock.text
# 	else:
# 		print 'i got you!'

# #选择各类颜色==========================
# colorList = driver.find_element_by_css_selector('#choose-color').find_elements_by_class_name('item')
# for color in colorList:
# 	print color.text, 'START =========================================================='
# 	color.click()
# 	time.sleep(1)
# 	#选择通信制式==========================
# 	versionList = driver.find_element_by_css_selector('#choose-version').find_elements_by_class_name('item')
# 	for version in versionList:
# 		print version.text, 'START ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
# 		version.click()
# 		time.sleep(1)
# 		#选择容量==========================
# 		specList = driver.find_element_by_css_selector('#choose-spec').find_elements_by_class_name('item')
# 		for spec in specList:
# 			print spec.text, 'START ******************'
# 			#检查无货的不要点击，也可以尝试用 try/exception/pass　是否可以跳过不能点击的？==========================
# 			try:
# 				spec.find_element_by_css_selector('b[style*="display: none; "]')
# 			except Exception, e:
# 				print 'in stock'
# 				spec.click()
# 				time.sleep(1)
# 			else:
# 				print 'out of stock'
# 				continue
				
# 			#选择购买方式==========================
# 			phoneTypeList = driver.find_element_by_css_selector('#choose-type').find_elements_by_class_name('item')
# 			for phoneType in phoneTypeList:
# 				print phoneType.text

# 			print spec.text, 'END ******************'
# 		print version.text, 'END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
# 	print color.text, 'END =========================================================='


# print colorList




# def nextPage():
# 	try:
# 		driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
# 	except Exception, e:
# 		print 'finish! no more pages!'
# 		return
# 	time.sleep(1)

# def getShopGeo():
# 	for i in range(1,11):
# 		shopName_xpath = '//tr[' + str(i + 1) + ']/td[1]'
# 		shopAddress_xpath = '//tr[' + str(i + 1) + ']/td[2]'
# 		shopName = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopName_xpath).text.encode('utf-8')
# 		shopAddress = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopAddress_xpath).text

# 		shop_address_encode = shopAddress.encode('utf-8')
# 		full_address = '上海市' + shop_address_encode

# 		try:
# 			# shopGeo = baiduAddressGeo.getGeoForAddress(full_address)
# 			# use google geo api
# 			shopGeo = googleAddressGeo.getGeoForAddress(full_address)
# 		except Exception, e:
# 			print 'can not get geo for this address'
# 			pass
# 		lat = shopGeo[0]
# 		lng = shopGeo[1]

# 		csvFile = open('./kfc_official_geo_google.csv', 'a')
# 		try:
# 			writer = csv.writer(csvFile)
# 			writer.writerow((shopName, lat, lng))
# 			# global id += 1
# 		finally:
# 			csvFile.close()
		

		# print shopName
		# print shopAddress

# for z in range(31):
# 	getShopGeo()
# 	nextPage()

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

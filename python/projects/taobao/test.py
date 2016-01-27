#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
import time


url = 'https://detail.tmall.com/item.htm?spm=a220o.1000855.0.da321h.2FLYQb&id=36862921678'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get(url)
time.sleep(1)

print driver.find_element_by_class_name('tm-promo-price').find_element_by_class_name('tm-price').text

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





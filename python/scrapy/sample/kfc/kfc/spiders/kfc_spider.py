#!/usr/bin/python
# -*- coding: utf-8 -*-
from scrapy.contrib.spiders import CrawlSpider
from selenium import webdriver
from kfc.items import KfcItem
import time
import baiduAddressGeo

class KfcSpider(CrawlSpider):
	name = 'kfc'
	allowed_domain = ['kfc.com.cn']
	start_urls = ['http://www.kfc.com.cn/kfccda/storelist/index.aspx']

	def __init__(self):
		self.driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

	def parse(self, response):
		self.driver.get(response.url)

		for z in range(31):
			#fetch geo info on current page
			for i in range(1,11):
				#initial xpath, as the shop info start in 2nd tr on each page
				shopName_xpath = '//tr[' + str(i + 1) + ']/td[1]'
				shopAddress_xpath = '//tr[' + str(i + 1) + ']/td[2]'
				shopName = self.driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopName_xpath).text
				shopAddress = self.driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopAddress_xpath).text
				#shopAddress need to be encode, as initial asiic format
				shop_address_encode = shopAddress.encode('utf-8')
				full_address = '上海市' + shop_address_encode
				try:
					# shopGeo will be fetched from baidu as [lat, lng]
					shopGeo = baiduAddressGeo.getGeoForAddress(full_address)
				except Exception, e:
					print 'can not get geo for this address'
					pass

				item = KfcItem()
				item['shopName'] = shopName
				item['lat'] = shopGeo[0]
				item['lng'] = shopGeo[1]
				yield item

			#turn to next page for shops
			try:
				self.driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
			except Exception, e:
				print 'finish! no more pages!'
				return
			#delay for 1s to wait until next page loaded
			time.sleep(1)
		#close webdriver
		self.driver.close()

	#==============================================================================
	# def nextPage(self):
	# 	try:
	# 		self.driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
	# 	except Exception, e:
	# 		print 'finish! no more pages!'
	# 		return
	# 	time.sleep(1)

	# def getShopGeo(self):
	# 	for i in range(1,11):
	# 		shopName_xpath = '//tr[' + str(i + 1) + ']/td[1]'
	# 		shopAddress_xpath = '//tr[' + str(i + 1) + ']/td[2]'
	# 		shopName = self.driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopName_xpath).text
	# 		shopAddress = self.driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopAddress_xpath).text

	# 		shop_address_encode = shopAddress.encode('utf-8')
	# 		full_address = '上海市' + shop_address_encode
	# 		try:
	# 			shopGeo = baiduAddressGeo.getGeoForAddress(full_address)
	# 		except Exception, e:
	# 			print 'can not get geo for this address'
	# 			pass

	#it is not convinient to use function inside parse, to manage items, so interge these functions into parse(). these functions works, with self. added into head
	# def parse(self, response):
	# 	self.driver.get(response.url)

	# 	for z in range(31):
	# 		self.getShopGeo()
	# 		self.nextPage()

	# 	self.driver.close()
	#==============================================================================

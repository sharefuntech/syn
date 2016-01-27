#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
import time
import csv

#======写csv文件表头字段==================================
csvFile = open('./iphone6_plus.csv', 'a')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('buyer_id','buyer_time','buyer_level','buyer_addr','buyer_device','comment'))
finally:
	csvFile.close()

#===最贵！！！Apple iPhone 6 Plus (A1524) 128GB 银色 移动联通电信4G手机
url = 'http://item.jd.com/1217541.html'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')

#载入页面=========================================
driver.get(url)
time.sleep(5)
#转跳到评论页=========================================
driver.find_element_by_xpath('//li[@id = "detail-tab-comm"]//a').click()
time.sleep(5)

#定义评论抓取函数====================================
def getCommentsPerPage():
	try:
		#抓取每页上的10条评论
		comm_list = driver.find_elements_by_xpath('//div[@id = "comment-0"]//div[@class = "com-table-main"]//div[@class = "comments-item"]')
		for comm in comm_list:
			#首先检查买家地址，如果没有就舍弃该条记录
			try:
				buyer_addr = comm.find_element_by_xpath('.//span[@class = "u-addr"]').text.encode('utf-8')
			except Exception, e:
				# buyer_addr = ''
				continue #如果没有买家地理信息，舍弃此购买记录
			#评论内容
			comment = comm.find_element_by_xpath('.//div[@class = "p-comment"]//span[@class = "desc"]').text.encode('utf-8')
			#买家帐号
			buyer_id = comm.find_element_by_xpath('.//span[@class = "user-name"]').text.encode('utf-8')
			#购买时间
			buyer_time = comm.find_element_by_xpath('.//span[@class = "buy-time"]').text.encode('utf-8')
			#买家等级
			buyer_level = comm.find_element_by_xpath('.//span[@class = "u-vip-level"]').text.encode('utf-8')
			#买家访问网络设备，则买家通过电脑购买
			try:
				buyer_device = comm.find_element_by_xpath('.//span[@class = "user-access"]').text.encode('utf-8')
			except Exception, e:
				# buyer_device = '来自PC网站' #买家通过电脑购买
				buyer_device = ''
			print buyer_id,buyer_time,buyer_level,buyer_addr,buyer_device,comment
			print '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
			#写入csv文件
			csvFile = open('./iphone6_plus.csv', 'a')
			try:
				writer = csv.writer(csvFile)
				writer.writerow((buyer_id,buyer_time,buyer_level,buyer_addr,buyer_device,comment))
			finally:
				csvFile.close()
	except Exception, e:
		print 'could not fetch comments on this page'
		return #出错中断抓取避免数据重复错误
	
#定义翻页函数==========================================
def turnPage():
	try:
		driver.find_element_by_css_selector('a[class*="ui-page-curr"] + *').click()
		time.sleep(15)
		print 'current page is: %s ***************************************************' %driver.find_element_by_class_name('ui-page-curr').text
	except Exception, e:
		print 'turn page fail'
		return #出错中断抓取避免数据重复错误

#主程序==============================================
for x in range(100):
	getCommentsPerPage()
	turnPage()




		


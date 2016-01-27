#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import time
import csv
import random

# dcap = dict(DesiredCapabilities.PHANTOMJS)
# dcap["phantomjs.page.settings.userAgent"] = (
#     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36"
# )
#======写csv文件表头字段==================================
csvFile = open('./book-xyj.csv', 'a')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('buyer_id','buyer_time','buyer_level','buyer_addr','buyer_device','comment'))
finally:
	csvFile.close()

#===西游记！！！
url = 'http://item.jd.com/10008248.html'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs' ,desired_capabilities=dcap)
#设置代理================================
# myProxy = "127.0.0.1:8087"
# proxy = Proxy({
#     'proxyType': ProxyType.MANUAL,
#     'httpProxy': myProxy,
#     'ftpProxy': myProxy,
#     'sslProxy': myProxy,
#     'noProxy': '' # set this value as desired
#     })
# driver = webdriver.Firefox(proxy=proxy)
#=====================================
# driver = webdriver.Firefox()

#载入页面=========================================
driver.get(url)
time.sleep(10)
#转跳到评论页=========================================
driver.find_element_by_xpath('//li[@id = "detail-tab-comm"]//a').click()
time.sleep(7)


# driver.find_element_by_class_name('ui-pager-next').click()
# print driver.find_element_by_xpath('//div[@id = "comment-0"]//div[@class = "ui-page"]//a[@class = "ui-page-curr"]').text
# print driver.find_element_by_xpath('//div[@id = "name"]//h1').text

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
			csvFile = open('./book-xyj.csv', 'a')
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
		# driver.find_element_by_css_selector('a[class*="ui-page-curr"] + *').click()
		driver.find_element_by_class_name('ui-pager-next').click()
		print 'current page is: %s **************************************************' %driver.find_element_by_class_name('ui-page-curr').text
		time.sleep(random.randint(60,70))
		# print 'current page is: %s ***************************************************' %driver.find_element_by_class_name('ui-page-curr').text
	except Exception, e:
		print '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
		print 'turn page fail'
		print '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
		time.sleep(random.randint(60,70)) #避免翻页失败快速连接，引发下一次被据
		return #出错中断抓取避免数据重复错误

#主程序==============================================
for x in range(629):
	getCommentsPerPage()
	turnPage()




		


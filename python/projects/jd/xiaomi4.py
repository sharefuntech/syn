#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import time
import csv

#======写csv文件表头字段==================================
csvFile = open('./xiaomi4.csv', 'a')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('buyer_id','buyer_time','buyer_level','buyer_addr','buyer_device','comment'))
finally:
	csvFile.close()

#===最多！！！小米4 中国屌丝好手机
url = 'http://item.jd.com/1514794.html'
#伪装useragent和ip地址=====================================
#非伪装============================
# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
#伪装==============================
dcap = dict(DesiredCapabilities.PHANTOMJS)
dcap["phantomjs.page.settings.userAgent"] = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:25.0) Gecko/20100101 Firefox/25.0 "
)
service_args = [
        '--proxy=127.0.0.1:8087',
        '--proxy-type=http',
        ]

driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs' ,desired_capabilities=dcap, service_args=service_args) 
#mac os设置================================================
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
			csvFile = open('./xiaomi4.csv', 'a')
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
		time.sleep(30)
		print 'current page is: %s ***************************************************' %driver.find_element_by_class_name('ui-page-curr').text
	except Exception, e:
		print 'turn page fail'
		return #出错中断抓取避免数据重复错误

#主程序==============================================
for x in range(8):
	getCommentsPerPage()
	turnPage()




		


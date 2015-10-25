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
# 第一次需要创建csv，以后都不需要
# csvFile = open('./fund.csv', 'a')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('fund_code','fund_name','date','current_value','total_value'))
# finally:
# 	csvFile.close()

#=======================================
# fund_code = '040001'
# fund_name = '华安创新股票'
fund_code = '160314'
fund_name = '华夏行业混合'
# url = 'http://stock.finance.sina.com.cn/fundInfo/view/FundInfo_LSJZ.php?symbol=040001'
url = 'http://stock.finance.sina.com.cn/fundInfo/view/FundInfo_LSJZ.php?symbol=160314'
# driver for linux
# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# driver for mac
driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')

#载入页面=========================================
driver.get(url)
time.sleep(3)

#数据抓取函数====================================
def getDataPerPage():
	try:
		#提取单页数据
		tr_list = driver.find_elements_by_xpath('//div[@id = "right"]//tr')
		for tr in tr_list:
			# 提取单日数据
			try:
				# ./表示直属元素 .//表示之后所有元素
				data_list = tr.find_elements_by_xpath('./td[@class = "f005"]')
				date = data_list[0].text.encode('utf-8')
				current_value = data_list[1].text.encode('utf-8')
				total_value = data_list[2].text.encode('utf-8')
				print date, current_value, total_value
				#start写入csv文件===============
				csvFile = open('./fund.csv', 'a')
				try:
					writer = csv.writer(csvFile)
					writer.writerow((fund_code,fund_name,date,current_value,total_value))
				finally:
					csvFile.close()
				#end写入csv文件===============
			except Exception, e:
				print 'not data tr'
				continue
	except Exception, e:
		print 'could not fetch data on this page'
		return #出错中断抓取避免数据重复错误
	
#翻页函数==========================================
def turnPage():
	try:
		# driver.find_element_by_css_selector('a[class*="ui-page-curr"] + *').click()
		page_list = driver.find_elements_by_xpath('//div[@id = "right"]//div[@class = "pb"]//a')
		# 获取数组末尾链接，即下一页链接，pop方法返回list最后一个元素
		next_page = page_list.pop()
		next_page.click()
		# print next_page.text.encode('utf-8')
		# 翻页间隔，防止被封杀
		time.sleep(random.randint(2,4))
	except Exception, e:
		print '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
		print 'turn page fail'
		print '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
		time.sleep(random.randint(2,4)) #避免翻页失败快速连接，引发下一次被据
		return #出错中断抓取避免数据重复错误

#计算总页数==========================================
def getTotoalPageNumber():
	totalPageNumber = driver.find_element_by_xpath('//div[@id = "right"]//div[@class = "pb"]//em[@class = "page_total"]').text.encode('utf-8')
	return int(totalPageNumber)

#主程序==============================================
totalPageNumber = getTotoalPageNumber()
for x in range(totalPageNumber):
	getDataPerPage()
	turnPage()






		


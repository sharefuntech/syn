#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import time
import csv
import random

dcap = dict(DesiredCapabilities.PHANTOMJS)
dcap["phantomjs.page.settings.userAgent"] = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36"
)
#======写csv文件表头字段==================================
# csvFile = open('./fund_list.csv', 'a')
# try:
# 	writer = csv.writer(csvFile)
# 	writer.writerow(('fund_code','fund_name','current_value','total_value'))
# finally:
# 	csvFile.close()

#=======================================
# url = 'http://vip.stock.finance.sina.com.cn/fund_center/index.html#jzkfgpx'
url = 'http://vip.stock.finance.sina.com.cn/fund_center/index.html#jzkfall'
# driver for linux
# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# driver for mac
# driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs' ,desired_capabilities=dcap)

#使用firefox==================================
driver=webdriver.Firefox()
#载入页面=========================================
driver.get(url)
time.sleep(3)

#数据抓取函数====================================
def getDataPerPage():
	try:
		#提取单页数据
		tr_list = driver.find_elements_by_xpath('//div[@id = "jjjzC"]//tbody//tr')
		for tr in tr_list:
			# 提取单日数据
			try:
				# ./表示直属元素 .//表示之后所有元素
				td_list = tr.find_elements_by_xpath('./td')
				# print td_list[0].text.encode('utf-8')
				fund_code = td_list[1].find_element_by_xpath('./a').text.encode('utf-8')
				# print fund_code
				fund_name = td_list[2].find_element_by_xpath('./a').text.encode('utf-8')
				print fund_code, fund_name

				th_list = tr.find_elements_by_xpath('./th')
				# print th_list[0].text.encode('utf-8')
				current_value = th_list[0].text.encode('utf-8')
				total_value = th_list[1].text.encode('utf-8')
				print current_value, total_value
				print '-------------------------'

				#start写入csv文件===============
				# csvFile = open('./fund_list.csv', 'a')
				# try:
				# 	writer = csv.writer(csvFile)
				# 	writer.writerow((fund_code,fund_name, current_value, total_value))
				# finally:
				# 	csvFile.close()
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
		# 当前页码
		curr_page = driver.find_element_by_xpath('//p[@id = "jjjzP"]//span[@class = "pagecurr pagedisabled"]')
		print 'current page is: '
		print curr_page.text.encode('utf-8')

		nextPage = driver.find_element_by_css_selector('span[class*="pagecurr pagedisabled"] + *')
		print 'next page is: '
		print nextPage.text.encode('utf-8')

		nextPage.click()
		# # 获取翻页链接
		# pageHolder = driver.find_elements_by_xpath('//p[@id = "jjjzP"]//a')

		# # 最后一个元素是下一页链接
		# # nextPageLink = pageHolder[-1]
		# nextPageLink = pageHolder.pop()
		# nextPageLink.click()
		# 休眠放封杀
		time.sleep(3)
		# print 'page turned'
		# curr_page = driver.find_element_by_xpath('//p[@id = "jjjzP"]//span[@class = "pagecurr pagedisabled"]')
		# print curr_page.text.encode('utf-8')
	except Exception, e:
		print '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
		print 'turn page fail'
		print '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
		time.sleep(3) #避免翻页失败快速连接，引发下一次被据
		return #出错中断抓取避免数据重复错误

#计算总页数==========================================
def getTotoalPageNumber():
	pageHolder = driver.find_elements_by_xpath('//p[@id = "jjjzP"]//a')
	# print pageHolder
	totalPageNumber = pageHolder[-2].text.encode('utf-8')
	print totalPageNumber
	return int(totalPageNumber)

#主程序==============================================
# totalPageNumber = getTotoalPageNumber()
# for x in range(3):
	# getDataPerPage()
	# turnPage()

# 测试
# getTotoalPageNumber()
getDataPerPage()
turnPage()






		


#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import random
import csv
import time
import urllib
import json
import platform
import gc

'''
读入csv格式保存的基金代码，获取每个基金的历史业绩
运行流程：
getAllFundQuote() 入口程序
--iniAllFundQuoteCsv() 初始化基金业绩存储csv文件
--readAllFundQuote()  读入基金名称列表
----getSingleFundQuote() 抓取单个基金业绩
------setupConnection() 载入单个基金页面
--------checkSystem() 检测操作系统类型
------calculateTotalPage() 计算单个基金业绩内容所有页面数量
------scrapQuote() 抓取单个页面数据
--------writeScrappedQuote() 写入抓取的数据
------turnPage() 翻页器
'''

allFundListCsv = 'allFundList.csv'
fundQuoteLongerThreeYearsCsv = 'fundQuoteLonger5Years.csv'

# getAllFundQuote() 入口程序====================================
def getAllFundQuote(allFundListCsv, fundQuoteLongerThreeYearsCsv):
	csvName = fundQuoteLongerThreeYearsCsv
	writeMode = 'a'
	csvHead = ['fundCategary', 'fundCode', 'fundName', 'date', 'currentValue', 'totalValue']
	iniAllFundQuoteCsv(csvName, writeMode, csvHead)
	readAllFundQuote(allFundListCsv)
# -------------------------------------------------------------

# --iniAllFundQuoteCsv() 初始化基金业绩存储csv文件================
def iniAllFundQuoteCsv(csvName, writeMode, csvHead):
	allFundQuoteCsv = open(csvName, writeMode)
	try:
		writer = csv.writer(allFundQuoteCsv)
		writer.writerow((csvHead))
		print 'successfully initial csv: ', csvName
	finally:
		allFundQuoteCsv.close()
# ---------------------------------------------------------------

# --readAllFundQuote()  读入基金名称列表=========================
def readAllFundQuote(allFundListCsv):
	csvReader = open(allFundListCsv, 'rb')
	fundList = csv.reader(csvReader)
	# 根据基金代码名单抓取每个基金业绩
	for fund in fundList:
		# 读入基金代码，基金代码在csv文件第一列,delete csv head first!!!!!! or use try/catch just can ignore the error?
		fundCategary = fund[0]
		fundCode = fund[1]
		fundName = fund[2]
		print 'read in fund: ', fundCategary, fundCode, fundName
		# 抓取单个基金业绩
		getSingleFundQuote(fundCategary, fundCode, fundName)
	csvReader.close()
# ---------------------------------------------------------------

# ------setupConnection() 载入单个基金页面=========================
def setupConnection(fundCode, driverMode):
	url = 'http://stock.finance.sina.com.cn/fundInfo/view/FundInfo_LSJZ.php?symbol=' + fundCode;
	# 根据驱动模式和操作系统选择driver
	if driverMode == 'browser':
		driver = webdriver.Firefox()
	elif driverMode == 'phantomjs':
		driver = selectPhantomjs()
	#载入页面
	try:
		driver.get(url)
	except Exception, e:
		print 'setup connection fail'
		return
		# break #如果单个基金载入失败，return会退出整个程序，break可以载入下一个基金循环(还是在外部控制为宜)
	
	# 需要返回driver而不是driver.get(url)，才能实现传递抓取页面对象
	pageConnection = driver
	time.sleep(3)
	print 'connection established for fund: ', fundCode
	# 测试内部应用calculateTotalPage通过
	# calculateTotalPage(driver) 
	return pageConnection
# ---------------------------------------------------------------

# --------selectPhantomjs() 选择phanthomjs平台=====================
def selectPhantomjs():
	systemType = checkSystem()
	# linux
	if systemType == 'Linux':
		driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
	# macOS
	elif systemType == 'Darwin':
		driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')
	#windows
	elif systemType == 'Windows': 
			driver = webdriver.PhantomJS(executable_path='C:\\bin\\phantomjs\\bin\\phantomjs')
	return driver
# ---------------------------------------------------------------

# --------checkSystem() 检测操作系统类型============================
def checkSystem():
    systemType = platform.system()
    # print systemType
    return systemType
# ---------------------------------------------------------------

# ----getSingleFundQuote() 抓取单个基金业绩======================
def getSingleFundQuote(fundCategary, fundCode, fundName):
	try:
		# 载入单个基金页面
		pageConnection = setupConnection(fundCode, 'browser')
		totalPageNumber = calculateTotalPage(pageConnection)

		# if established year less than 5 years, abort digging
		if totalPageNumber < 60:
			print 'less than 5 years, drop this fund!'
			return
			
		for x in range(totalPageNumber):
			scrapQuote(fundCategary, fundCode, fundName, pageConnection)
			turnPage(pageConnection)
		# close webdriver connection
		# quit() for firefox
		# pageConnection.quit()
	except Exception, e:
		print 'fail to load the specific fund'
		# quit() for firefox
		# pageConnection.quit()
		return
	# try to release memory
	finally:
		# quit() for firefox
		pageConnection.quit()
		# gc.collect()
		# return
# ---------------------------------------------------------------

# ------calculateTotalPage() 计算单个基金业绩内容所有页面数量========
def calculateTotalPage(pageConnection):
	try:
		totalPageNumber = pageConnection.find_element_by_xpath('//div[@id = "right"]//div[@class = "pb"]//em[@class = "page_total"]').text.encode('utf-8')
		print 'total quote page of this fund is: ', totalPageNumber
		return int(totalPageNumber)
	except Exception, e:
		print 'fail to calculate total page for single fund'
		return
# ---------------------------------------------------------------

# ------trunPage() 翻页器========================================
def turnPage(pageConnection):
	try:
		# driver.find_element_by_css_selector('a[class*="ui-page-curr"] + *').click()
		pageList = pageConnection.find_elements_by_xpath('//div[@id = "right"]//div[@class = "pb"]//a')
		# 获取数组末尾链接，即下一页链接，pop方法返回list最后一个元素
		nextPage = pageList.pop()
		nextPage.click()
		# print nextPage.text.encode('utf-8')
		# 翻页间隔，防止被封杀
		time.sleep(2)
		print 'turn page successfully! '
	except Exception, e:
		print 'turn page fail'
		time.sleep(random.randint(3,5)) #避免翻页失败快速连接，引发下一次被据
		return #出错中断抓取避免数据重复错误
# ---------------------------------------------------------------

# ------scrapQuote() 抓取单个页面数据==============================
def scrapQuote(fundCategary, fundCode, fundName, pageConnection):
	try:
		#提取单页数据
		trList = pageConnection.find_elements_by_xpath('//div[@id = "right"]//tbody//tr')
		# 指定每页第一行数据作为采集对象
		trTarget = trList[2]
		dataList = trTarget.find_elements_by_xpath('./td')
		date = dataList[0].text.encode('utf-8')
		currentValue = dataList[1].text.encode('utf-8')
		totalValue = dataList[2].text.encode('utf-8')
		print fundCategary, fundCode, fundName, date, currentValue, totalValue
		# print fundCategary
		print '---------------------------------------------------'
		#写入csv文件===============
		writeScrappedQuote(fundCategary, fundCode, fundName, date, currentValue, totalValue)
	except Exception, e:
		print 'could not fetch data on this page'
		return #出错中断抓取避免数据重复错误
	# try to release memory
	finally:
		gc.collect()
		return
# ---------------------------------------------------------------

def writeScrappedQuote(fundCategary, fundCode, fundName, date, currentValue, totalValue):
	allFundQuote = open(fundQuoteLongerThreeYearsCsv, 'a')
	try:
		writer = csv.writer(allFundQuote)
		writer.writerow((fundCategary, fundCode, fundName, date, currentValue, totalValue))
	finally:
		allFundQuote.close()
# ---------------------------------------------------------------

#================================================================
#================================================================
# run
getAllFundQuote(allFundListCsv, fundQuoteLongerThreeYearsCsv)

# flag = 4
# if flag < 5:
#  	print 'too small'

# csvName = 'test.csv'
# writeMode = 'a'
# csvHead = ['date', 'value', 'name']
# iniAllFundQuoteCsv(csvName, writeMode, csvHead)

#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import time
import csv
import random
import platform

'''
抓取股票型开放基金名单
运行流程：
getAllFundList() 入口程序
--iniAllFundListCsv() 初始化基金列表存储csv文件
--setupConnection() 建立连接
----checkSystem() 检测操作系统类型
--calculateTotalPage() 计算所有页面数量
--scrapper() 抓取页面数据
----getSinglePageFundList() 抓取单个页面基金信息
------writeScrappedFund() 写入抓取的数据
----turnPage() 翻页器
'''

targetUrl = 'http://quote.eastmoney.com/center/fundlist.html#0,1_4_0'

# getAllFundList() 入口程序======================================
def getAllFundList(targetUrl):
	# iniAllFundListCsv() #初始化基金业绩存储csv文件(放弃初始化添加字段名称，防止excel打开后将00开头字符串截去)
	pageConnection = setupConnection(targetUrl, 'phantomjs') #建立连接
	totalPageNumber = calculateTotalPage(pageConnection) #计算所有页面数量
	scrapper(pageConnection, totalPageNumber) #抓取单个页面基金信息
#---------------------------------------------------------------

# --iniAllFundListCsv() 初始化基金业绩存储csv文件===================
def iniAllFundListCsv():
	allFundListCsv = open('./allFundList.csv', 'a')
	try:
		writer = csv.writer(allFundListCsv)
		writer.writerow(('fundCode','fundName','currentValue','totalValue'))
	finally:
		allFundListCsv.close()
# ---------------------------------------------------------------

# --setupConnection() 载入单个基金页面==============================
def setupConnection(targetUrl, driverMode):
	# 目标url
	url = targetUrl

	# --------selectPhantomjs() 选择phanthomjs平台
	def selectPhantomjs():
		systemType = checkSystem()
		# linux
		if systemType == 'Linux':
			driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
		# macOS
		elif systemType == 'Darwin':
			driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')
		#windows not test yet
		else : 
			driver = ''
		return driver
	# -------------------------------------------

	# --------checkSystem() 检测操作系统类型========
	def checkSystem():
	    systemType = platform.system()
	    # print systemType
	    return systemType
	# -------------------------------------------

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
	
	# 需要返回driver而不是driver.get(url)，才能实现传递抓取页面对象
	pageConnection = driver
	time.sleep(3)
	# 测试内部应用calculateTotalPage通过
	# calculateTotalPage(driver) 
	return pageConnection
# ---------------------------------------------------------------

# --calculateTotalPage() 计算内容所有页面数量=======================
def calculateTotalPage(pageConnection):
	try:
		pageHolder = pageConnection.find_elements_by_xpath('//div[@id = "pageNav"]//a')
		totalPageNumber = pageHolder[-2].text.encode('utf-8')
		# print totalPageNumber
		return int(totalPageNumber)
	except Exception, e:
		print 'fail to calculate total page for single fund'
		return
# ---------------------------------------------------------------

# --scrapper() 抓取页面数据=======================================
def scrapper(pageConnection, totalPageNumber):
	for page in range(totalPageNumber):
		getSinglePageFundList(pageConnection)
		turnPage(pageConnection)
# ---------------------------------------------------------------

# --getSinglePageFundList() 抓取单个页面基金信息=====================
def getSinglePageFundList(pageConnection):
	try:
		#提取单页数据
		tr_list = pageConnection.find_elements_by_xpath('//div[@id = "dataTable"]//tbody//tr')
		# 要从第三个tr开始，前2个是标题栏
		tr_list_hasData = tr_list[2:]
		for tr in tr_list_hasData:
			# 提取单日数据
			try:
				# ./表示直属元素 .//表示之后所有元素
				dataList = tr.find_elements_by_xpath('./td')
				fundCode = str(dataList[1].text.encode('utf-8'))
				fundName = dataList[2].find_element_by_xpath('./a').text.encode('utf-8')
				currentValue = dataList[5].text.encode('utf-8')
				totalValue = dataList[5].text.encode('utf-8')
				print fundCode, fundName, currentValue, totalValue
				print '---------------------------------------------------'
				#start写入csv文件
				writeScrappedQuote(fundCode, fundName, currentValue, totalValue)
			except Exception, e:
				print 'not data tr'
				continue
	except Exception, e:
		print 'could not fetch data on this page'
		return #出错中断抓取避免数据重复错误
# ---------------------------------------------------------------

# ----writeScrappedFund() 写入抓取的数据===========================
def writeScrappedQuote(fundCode, fundName, currentValue, totalValue):
	allFundListCsv = open('./allFundList.csv', 'a')
	try:
		writer = csv.writer(allFundListCsv)
		writer.writerow((fundCode, fundName, currentValue, totalValue))
	finally:
		allFundListCsv.close()
# ---------------------------------------------------------------

# ----turnPage() 翻页器===========================================
def turnPage(pageConnection):
	try:
		# # 获取翻页链接
		pageHolder = pageConnection.find_elements_by_xpath('//div[@id = "pageNav"]//a')
		# # 最后一个元素是下一页链接
		nextPageLink = pageHolder[-1]
		# nextPageLink = pageHolder.pop()
		nextPageLink.click()
		# 休眠放封杀
		time.sleep(random.randint(2,3))
	except Exception, e:
		print 'turn page fail'
		time.sleep(random.randint(2,3)) #避免翻页失败快速连接，引发下一次被据
		return #出错中断抓取避免数据重复错误
# ---------------------------------------------------------------

#主程序===========================================================
getAllFundList(targetUrl)








		


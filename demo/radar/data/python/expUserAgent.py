#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
import time
import csv
import random
import platform

# --setupConnection() 载入目标网页==============================
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
			driver = webdriver.PhantomJS()
		return driver
	# -------------------------------------------

	# --------checkSystem() 检测操作系统类型========
	def checkSystem():
	    systemType = platform.system()
	    print systemType
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

targetUrl = 'http://www.atool.org/useragent.php'

setupConnection(targetUrl, 'phantomjs')
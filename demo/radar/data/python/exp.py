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

# --readAllFundQuote()  读入基金名称列表=========================
def readAllFundQuote():
	csvReader = open('./allFundList.csv', 'rb')
	fundList = csv.reader(csvReader)
	# 根据基金代码名单抓取每个基金业绩
	for fund in fundList:
		# 读入基金代码，基金代码在csv文件第一列
		fundCode = fund[0].decode('utf-8').encode('utf-8')
		fundName = fund[1].decode('utf-8').encode('utf-8')
		print fundCode, fundName
		# 抓取单个基金业绩
		# getSingleFundQuote(fundCode, fundName)
	csvReader.close()
# ------------------------------------------------------------

# run ========================================================
readAllFundQuote()

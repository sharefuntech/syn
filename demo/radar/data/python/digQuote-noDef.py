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

inputCsv = 'stockFundList.csv'
outputCsv = 'fundQuoteLonger5Years.csv'

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

csvName = outputCsv
writeMode = 'a'
csvHead = ['fundCode', 'fundName', 'date', 'currentValue', 'totalValue']
iniAllFundQuoteCsv(csvName, writeMode, csvHead)

# --readAllFundQuote()  读入基金名称列表=========================
csvReader = open(inputCsv, 'rb')
fundList = csv.reader(csvReader)
# 根据基金代码名单抓取每个基金业绩
for fund in fundList:
	# 读入基金代码，基金代码在csv文件第一列,delete csv head first!!!!!! or use try/catch just can ignore the error?
	fundCategary = fund[0]
	fundCode = fund[1]
	fundName = fund[2]
	print 'read in fund: ', fundCategary, fundCode, fundName

	

csvReader.close()
#!/usr/bin/python
# -*- coding: utf-8 -*-
import csv
import datetime,time

'''
将基金价格和时间预先转化为坐标点信息，减少js计算量
time.strptime(dateString, dateFormat) 将字符串日期转为结构化日期元组
time.mktime(structureDate) 将日期元组转化为浮点数，便于运算
运行流程：
calculateGeometry() 入口程序
--readAllFundQuote()  读入基金名称列表
----convertStringDateToFloat() 将字符串形式的时间转化为浮点数形式便于比较
'''

# --readAllFundQuote()  读入基金名称列表=========================
def readAllFundQuote(csvFile):
	csvReader = open(csvFile, 'rb')
	fundQuote = csv.reader(csvReader)
	# 根据基金代码名单抓取每个基金业绩
	for fundQuoteRow in fundQuote:
		try:
			dateString = fundQuoteRow[2].decode('utf-8').encode('utf-8')
			dateFormat = '%Y/%m/%d'
			dateFloat = convertStringDateToFloat(dateString, dateFormat)
			quoteString = fundQuoteRow[4]
			quoteFloat = float(quoteString)
			# print type(quoteFloat)
			print dateFloat
		except Exception, e:
			# csv文件第一行通常是head，不处理会报错
			print 'omit csv head row'
			continue
	csvReader.close()
# ---------------------------------------------------------------

# ----convertStringDateToFloat() 将字符串时间转化为浮点数=========
def convertStringDateToFloat(dateString, dateFormat):
	dateStructure = time.strptime(dateString, dateFormat)
	dateFloat = time.mktime(dateStructure)
	return dateFloat
# ---------------------------------------------------------------

readAllFundQuote('./fundQuoteForPreCalculation.csv')

# testDate = time.strptime('2015/3/7', '%Y/%m/%d')
# testFloatDate = time.mktime(testDate)
# print testFloatDate

# print time.time()
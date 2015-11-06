#!/usr/bin/python
# -*- coding: utf-8 -*-
import csv
import datetime,time
import math

'''
将基金价格和时间预先转化为坐标点信息，减少js计算量
time.strptime(dateString, dateFormat) 将字符串日期转为结构化日期元组
time.mktime(structureDate) 将日期元组转化为浮点数，便于运算
运行流程：
calculateGeometry() 入口程序
--readAllFundQuote()  读入基金名称列表
----convertStringDateToFloat() 将字符串形式的时间转化为浮点数形式便于比较
----convertDateToAngle() 将日期转化为角度
'''

# --readAllFundQuote()  读入基金名称列表=========================
def readAllFundQuote(csvFile):
	csvReader = open(csvFile, 'rb')
	fundQuote = csv.reader(csvReader)

	# 存储处理后的日期与价格的数组
	dateArray = []
	quoteArray = []
	for fundQuoteRow in fundQuote:
		try:
			dateString = fundQuoteRow[2].decode('utf-8').encode('utf-8')
			dateFormat = '%Y/%m/%d'
			dateFloat = convertStringDateToFloat(dateString, dateFormat)
			# stock date in array
			dateArray.append(dateFloat)
			quoteString = fundQuoteRow[4]
			quoteFloat = float(quoteString)
			# stock quote in array
			quoteArray.append(quoteFloat)
			# print type(quoteFloat)
			# print dateFloat
		except Exception, e:
			# csv文件第一行通常是head，不处理会报错
			print 'omit csv head row'
			continue
	csvReader.close()

	dateArrayLength = len(dateArray)
	# 日期极值
	startDate = convertStringDateToFloat('2001/1/1', '%Y/%m/%d')
	endDate = convertStringDateToFloat('2015/12/31', '%Y/%m/%d')
	# print startDate, endDate

	maxDate = dateArray[0]
	minDate = dateArray[dateArrayLength-1]

	# distanceDate = maxDate - minDate
	distanceDate = endDate - startDate
	# 价格极值
	maxQuote = max(quoteArray)
	minQuote = min(quoteArray)
	# 雷达有效半径
	rRada = 450
	# 价格尺度
	rQuote = 9
	# 雷达中心坐标点
	xCenterRadar = 500
	yCenterRadar = 500

	arrayCounter = 0
	for array in dateArray:
		angleDate = (array - minDate) / distanceDate * (math.pi * 2)
		# print angleDate
		xPosition = xCenterRadar + math.sin(angleDate) * (quoteArray[arrayCounter]/rQuote) * rRada
		yPosition = yCenterRadar + math.cos(angleDate) * (quoteArray[arrayCounter]/rQuote) * rRada
		print int(xPosition), int(yPosition)
		arrayCounter += 1

# ---------------------------------------------------------------

# ----convertStringDateToFloat() 将字符串时间转化为浮点数============
def convertStringDateToFloat(dateString, dateFormat):
	dateStructure = time.strptime(dateString, dateFormat)
	dateFloat = time.mktime(dateStructure)
	return dateFloat
# ---------------------------------------------------------------

# ----convertDateToAngle() 将日期转化为角度========================
def convertDateToAngle():
	pass
# ---------------------------------------------------------------


readAllFundQuote('./fundQuoteForPreCalculation.csv')

# testDate = time.strptime('2015/3/7', '%Y/%m/%d')
# testFloatDate = time.mktime(testDate)
# print testFloatDate

# print time.time()
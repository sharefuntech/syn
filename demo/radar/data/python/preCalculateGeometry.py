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

# 存储处理后的日期与价格的数组
# dateArray = []
# quoteArray = []
# positionArray = []

# --readAllFundQuote()  读入基金名称列表=========================
def readAllFundQuote(csvFile):
	# 初始化结果存储csv
	iniProcessedCsv()

	# 日期极值
	startDate = convertStringDateToFloat('2001/1/1', '%Y/%m/%d')
	endDate = convertStringDateToFloat('2015/12/31', '%Y/%m/%d')
	distanceDate = endDate - startDate
	# 雷达有效半径
	rRada = 450
	# 价格尺度
	rQuote = 9
	# 雷达中心坐标点
	xCenterRadar = 500
	yCenterRadar = 500

	# 读入原始csv
	csvReader = open(csvFile, 'rb')
	fundQuote = csv.reader(csvReader)

	for fundQuoteRow in fundQuote:
		try:
			dateString = fundQuoteRow[2].decode('utf-8').encode('utf-8')
			dateFormat = '%Y/%m/%d'
			dateFloat = convertStringDateToFloat(dateString, dateFormat)
			quoteString = fundQuoteRow[4]
			quoteFloat = float(quoteString)
			xPosition = calculateXPosition(dateFloat, startDate, distanceDate, xCenterRadar, quoteFloat, rQuote, rRada)
			yPosition = calculateYPosition(dateFloat, startDate, distanceDate, yCenterRadar, quoteFloat, rQuote, rRada)
			fundCode = fundQuoteRow[0]
			fundName = fundQuoteRow[1]
			date = fundQuoteRow[2]
			currentValue = fundQuoteRow[3]
			totalValue = fundQuoteRow[4]
			# 将处理后的坐标写入存储csv文件
			writeProcessedCsv(fundCode, fundName, date, currentValue, totalValue, xPosition, yPosition)
			print fundCode, fundName, date, currentValue, totalValue, xPosition, yPosition
			print '-----------------------------------------'
		except Exception, e:
			# csv文件第一行通常是head，不处理会报错
			print 'omit csv head row'
			continue
	csvReader.close()
	# 将日期转化为角度，价格转化为位置
	# convertDateToAngle(dateArray, quoteArray)
# ---------------------------------------------------------------

# --writeProcessedCsv() 将处理后的坐标写入存储csv文件================
def writeProcessedCsv(fundCode, fundName, date, currentValue, totalValue, xPosition, yPosition):
	processedCsv = open('./processedFundQuote.csv', 'a')
	try:
		writer = csv.writer(processedCsv)
		writer.writerow((fundCode, fundName, date, currentValue, totalValue, xPosition, yPosition))
	finally:
		processedCsv.close()
# ---------------------------------------------------------------

# --iniProcessedCsv() 初始化基金业绩存储csv文件================
def iniProcessedCsv():
	processedCsv = open('./processedFundQuote.csv', 'a')
	try:
		writer = csv.writer(processedCsv)
		writer.writerow(('fundCode','fundName','date','currentValue','totalValue', 'xPosition', 'yPosition'))
	finally:
		processedCsv.close()
# ---------------------------------------------------------------

# ----calculateXPosition() 计算数据点的x坐标========================
def calculateXPosition(dateFloat, startDate, distanceDate, xCenterRadar, quoteFloat, rQuote, rRada):
	angleDate = (dateFloat - startDate) / distanceDate * (math.pi * 2)
	# 按价格比例计算单点位置
	xPosition = xCenterRadar + math.sin(angleDate) * (quoteFloat/rQuote) * rRada
	return int(xPosition)
# ---------------------------------------------------------------

# ----calculateYPosition() 计算数据点的y坐标========================
def calculateYPosition(dateFloat, startDate, distanceDate, yCenterRadar, quoteFloat, rQuote, rRada):
	angleDate = (dateFloat - startDate) / distanceDate * (math.pi * 2)
	# 按价格比例计算单点位置
	yPosition = yCenterRadar - math.cos(angleDate) * (quoteFloat/rQuote) * rRada
	return int(yPosition)
# ---------------------------------------------------------------

# ----convertStringDateToFloat() 将字符串时间转化为浮点数============
def convertStringDateToFloat(dateString, dateFormat):
	dateStructure = time.strptime(dateString, dateFormat)
	dateFloat = time.mktime(dateStructure)
	return dateFloat
# ---------------------------------------------------------------

# ----convertDateToAngle() 将日期转化为角度，价格转化为位置===========
def convertDateToAngle(dateArray, quoteArray):
	dateArrayLength = len(dateArray)
	# 日期极值
	startDate = convertStringDateToFloat('2001/1/1', '%Y/%m/%d')
	endDate = convertStringDateToFloat('2015/12/31', '%Y/%m/%d')

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
		# 计算日期在雷达圆周中的角度
		angleDate = (array - startDate) / distanceDate * (math.pi * 2)
		# 按价格比例计算单点位置
		xPosition = xCenterRadar + math.sin(angleDate) * (quoteArray[arrayCounter]/rQuote) * rRada
		yPosition = yCenterRadar + math.cos(angleDate) * (quoteArray[arrayCounter]/rQuote) * rRada
		print int(xPosition), int(yPosition)
		arrayCounter += 1
# ---------------------------------------------------------------

readAllFundQuote('./allFundQuoteLess.csv')

# testDate = time.strptime('2015/3/7', '%Y/%m/%d')
# testFloatDate = time.mktime(testDate)
# print testFloatDate

# print time.time()
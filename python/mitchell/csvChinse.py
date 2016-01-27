# -*- coding: utf-8 -*-
from selenium import webdriver
from bs4 import BeautifulSoup
import csv

driver = webdriver.PhantomJS(executable_path = '/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get('http://item.m.jd.com/comments/1514794.html?sid=f78e65a1b56bb56e2b85135d980625c1')

pageSource = driver.page_source
bsObj = BeautifulSoup(pageSource)
commentList = bsObj.findAll('span', {'class': 'name'})

csvFile = open('./name.csv', 'wt')
try:
	writer = csv.writer(csvFile)
	writer.writerow(('id', 'name'))
	nameId = 1
	for cmt in commentList:
		cmtText = cmt.get_text().encode('utf-8')
		writer.writerow((nameId, cmtText))
		nameId += 1
finally:
	csvFile.close()

driver.close()

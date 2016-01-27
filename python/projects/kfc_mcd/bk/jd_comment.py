# -*- coding: utf-8 -*-

from selenium import webdriver
from bs4 import BeautifulSoup
import codecs
import csv

driver = webdriver.PhantomJS(executable_path = '/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')

driver.get('http://item.m.jd.com/comments/1514794.html?sid=f78e65a1b56bb56e2b85135d980625c1')

# time.sleep(2)

# comment = driver.find_elements_by_css_selector('.detail')

# for u in comment:
# 	print(u.text)


pageSource = driver.page_source
bsObj = BeautifulSoup(pageSource)
commentList = bsObj.findAll('span', {'class': 'name'})


csvFile = open('./name.csv', 'wt')
# csvFile.write(codecs.BOM_UTF8)
# csvFile.write('\xEF\xBB\xBF')
try:
	# writer = csv.writer(csvFile, dialect='excel')
	writer = csv.writer(csvFile)
	writer.writerow(('id', 'name'))
	nameId = 1
	for cmt in commentList:
		cmtText = cmt.get_text().encode('utf-8')
		# cmtText = cmt.get_text()
		writer.writerow((nameId, cmtText))
		nameId += 1
finally:
	csvFile.close()

# for cmt in commentList:
# 	print(cmt.get_text())

# print(driver.find_element_by_css_selector('.price-spot').text)
# print(driver.find_element_by_css_selector('.u-addr').text)
# print(driver.find_element_by_css_selector('.buy-time').text)

driver.close()

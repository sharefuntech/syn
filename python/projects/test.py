from bs4 import BeautifulSoup
import urllib
import time
from selenium import webdriver

# url = 'http://localhost:8888/test.html'
url = 'http://item.jd.com/1217520.html'

driver = webdriver.PhantomJS(executable_path='/Users/guowei/Documents/tools/phantomjs/bin/phantomjs')
driver.get(url)

#choose color
colorList = driver.find_element_by_id('choose-color').find_elements_by_class_name('item')
for color in colorList:
	print color.text
	color.find_element_by_tag_name('a').click()
	time.sleep(1)
	#choose version
	versionList = driver.find_element_by_id('choose-version').find_elements_by_class_name('item')
	for version in versionList:
		print version.text
		version.find_element_by_tag_name('a').click()
		time.sleep(1)
		#choose spec
		specList = driver.find_element_by_id('choose-spec').find_elements_by_class_name('item')
		for spec in specList:
			try:
				spec.find_element_by_css_selector('b[style*="display: none; "]')
			except Exception, e:
				print 'nope'
			else:
				print 'yeap'


	# spec.find_element_by_css_selector('b[style*="display: none; "]')
	# print spec.text
	# spec.click()

# bsObj = BeautifulSoup(driver.page_source, "html.parser")
# colorList = bsObj.find('div', {'id': 'choose-color'}).findAll('div', {'class':'item'})
# #choose color $$$$$$$$$$$$$$$$$$$$$$
# for color in colorList:
# 	print color.find('a')
# 	color.click()
# 	time.sleep(1)
	# print color.find('a').get_text(), '============================================='
	# color.click()
	# time.sleep(1)
	# #choose version$$$$$$$$$$$$$$$$
	# versionList = bsObj.find('div', {'id': 'choose-version'}).findAll('div', {'class':'item'})
	# for version in versionList:
	# 	print version.find('a').get_text(), '**********************'
	# 	version.find('a').click()
	# 	time.sleep(1)
	# 	#choose spec $$$$$$$$$$$$$$$$
	# 	specList = bsObj.find('div', {'id': 'choose-spec'}).findAll('div', {'class':'item'})
	# 	for spec in specList:
	# 		print version.find('a').get_text(), '~~~~~~~~~~~~~~~~'
	# 		if spec.find('b', {'style': 'display: none; '}):
	# 			print 'out of stock'
	# 			continue
	# 		else:
	# 			# spec.find('a').click()
	# 			# time.sleep(1)
	# 			print 'in stock'
	# 		print spec.find('a').get_text(), '~~~~~~~~~~~~~~~~'
	# 	print version.find('a').get_text(), '**********************'
	# print color.find('a').get_text(), '============================================='




# for spec in specList:
# 	print spec.get_text()
# 	print spec
# 	if spec.find('b', {'style': 'display: none; '}):
# 		print 'got'
# 	else:
# 		print 'nope'

# html = urllib.urlopen(url).read()
# time.sleep(1)
# bsObj = BeautifulSoup(html, "html.parser")
# # print bsObj

# specList = bsObj.find('div', {'id': 'choose-spec'}).findAll('div', {'class':'item'})

# for spec in specList:
# 	print spec.get_text()
# 	print spec
	
	# if spec.find('b', {'style': 'display: none;'}):
	# 	print 'got'
	# else:
	# 	print 'nope'
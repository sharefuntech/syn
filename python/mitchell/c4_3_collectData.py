from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

pages = set()

def getLinks(pageUrl):
	global pages
	html = urlopen('http://guoweish.github.io/' + pageUrl)
	bsObj = BeautifulSoup(html)
	# try:
	# 	print(bsObj.find(id='home').find('ul').find('a').find(class_='workname').get_text())
	# 	print(bsObj.find(id='home').find('ul').find('a').attrs['href'])
	# except AttributeError:
	# 	print('AttributeError')

	for link in bsObj.findAll('a', href=re.compile('(html)')):
	# for link in bsObj.findAll('a'):
		if 'href' in link.attrs:
			if link.attrs['href'] not in pages:
				newPage = link.attrs['href']
				print('----------------------\n' + newPage)
				# print('http://guoweish.github.io/' + newPage)
				pages.add(newPage)
				getLinks(newPage)

getLinks('')
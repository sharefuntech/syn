from urllib.request import urlopen
from bs4 import BeautifulSoup
import re
import datetime
import random

pages = set()
random.seed(datetime.datetime.now())

#retrieve a list of all internal links on a page
def getInternalLinks(bsObj, includerUrl):
	internalLinks = []
	#internal links start with a '/'
	for link in bsObj.findAll('a', href=re.compile('^(/|.*' + includerUrl + ')')):
		if link.attrs['href'] is not None:
			if link.attrs['href'] not in internalLinks:
				internalLinks.append(link.attrs['href'])
	return internalLinks

#retrieve a list of all external links
def getExternalLinks(bsObj, excluderUrl):
	externalLinks = []
	#external links start with 'http' or 'www' and don't contain the current url
	for link in bsObj.findAll('a', href=re.compile('^(http|www)((?!' + excluderUrl + ').)*$')):
		if link.attrs['href'] is not None:
			if link.attrs['href'] not in externalLinks:
				externalLinks.append(link.attrs['href'])
	return externalLinks

def splitAddress(address):
	addressParts = address.replace('http://', '').split('/')
	return addressParts

def getRandomExternalLink(startingPage):
	html = urlopen(startingPage)
	bsObj = BeautifulSoup(html)
	externalLinks = getExternalLinks(bsObj, splitAddress(startingPage)[0])
	if len(externalLinks) == 0:
		internalLinks = getInternalLinks(startingPage)
		return getNextExternalLink(internalLinks[random.randint(0, len(internalLinks) - 1)])
	else:
		return externalLinks[random.randint(0, len(externalLinks) - 1)]

def followExternalOnly(startingSite):
	externalLink = getRandomExternalLink(startingSite)
	print('random external link is: ' + externalLink)
	followExternalOnly(externalLink)

followExternalOnly('http://gudian.hengyan.com/')


# def getLinks(pageUrl):
# 	global pages
# 	html = urlopen('http://guoweish.github.io/' + pageUrl)
# 	bsObj = BeautifulSoup(html)
# 	# try:
# 	# 	print(bsObj.find(id='home').find('ul').find('a').find(class_='workname').get_text())
# 	# 	print(bsObj.find(id='home').find('ul').find('a').attrs['href'])
# 	# except AttributeError:
# 	# 	print('AttributeError')

# 	for link in bsObj.findAll('a', href=re.compile('(html)')):
# 	# for link in bsObj.findAll('a'):
# 		if 'href' in link.attrs:
# 			if link.attrs['href'] not in pages:
# 				newPage = link.attrs['href']
# 				print('----------------------\n' + newPage)
# 				# print('http://guoweish.github.io/' + newPage)
# 				pages.add(newPage)
# 				getLinks(newPage)

# getLinks('')
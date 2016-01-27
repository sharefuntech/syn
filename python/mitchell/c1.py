from urllib.request import urlopen
from urllib.error import HTTPError
from bs4 import BeautifulSoup

# html = urlopen('http://www.pythonscraping.com/exercises/exercise1.html')
# bsobj = BeautifulSoup(html.read())

# print(bsobj.title)
# print(bsobj.h1)

def getTitle(url):
	try:
		html = urlopen(url)
	except HTTPError as e:
		return None
	try:
		bsobj = BeautifulSoup(html.read())
		title = bsobj.title
	except AttributeError as e:
		return None
	return title

title = getTitle('http://www.pythonscraping.com/exercises/exercise1.html')

if title == None:
	print('title not found')
else:
	print(title)
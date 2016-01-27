from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen('http://www.pythonscraping.com/pages/page3.html')
bsObj = BeautifulSoup(html)

for sibling in bsObj.find('table', {'id': 'giftList'}).tr.next_siblings:
	print(sibling)


# for child in bsObj.find('tr', {'class': 'gift'}).children:
# 	print(child.get_text())

# html = urlopen('http://localhost:8888/warandpeace.html')
# bsObj = BeautifulSoup(html)

# textClass = bsObj.findAll(class_ = 'green')
# for text in textClass:
# 	print(text.get_text())

# alltext = bsObj.find(id = 'text')
# print(alltext.get_text())

# textList = bsObj.findAll(text = 'Montmorencys')
# print(len(textList))

# nameList = bsObj.findAll('span', {'class': 'green', 'class': 'red'})
# for name in nameList:
# 	print(name.get_text())
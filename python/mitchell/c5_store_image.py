from urllib.request import urlretrieve
from urllib.request import urlopen
from bs4 import BeautifulSoup

baseUrl = 'http://guoweish.github.io/'
html = urlopen('http://guoweish.github.io')
bsObj = BeautifulSoup(html)
imageLocation = bsObj.find('a', {'class': 'workthumb'}).find('img')['src']
imagePath = baseUrl + imageLocation
urlretrieve(imagePath, 'workthumb.png')
# imageLocation = bsObj.findAll('a', {'class': 'workthumb'})
# print(type(imageLocation))
# for imageHolder in imageLocation
#     image = imageHolder.find('img')['src']
#     print(image)

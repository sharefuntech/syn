import urllib2
import BeautifulSoup

html = urllib2.urlopen("http://www.pythonscraping.com/exercises/exercise1.html")
bsObj = BeautifulSoup(html.read())

print(bsObj.h1)
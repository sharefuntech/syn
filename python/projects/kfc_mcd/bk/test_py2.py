import urllib, urllib2
from bs4 import BeautifulSoup
import csv
import AddressGeo_baidu_py2
import re
from selenium import webdriver
import time


url3='http://beian.hndrc.gov.cn/indexinvestment.jsp?id=162518'

response = urllib2.urlopen(url3)
html = response.read().decode('utf-8')
bsObj = BeautifulSoup(html)

print bsObj

# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# driver.get("http://pythonscraping.com/pages/javascript/ajaxDemo.html")
# time.sleep(3)
# print driver.find_element_by_id("content").text 
# driver.close()

# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# url = 'http://beian.hndrc.gov.cn/indexinvestment.jsp?id=162518'
# driver.get(url)
# print driver.find_element_by_id('constructcontent').text
# driver.close()



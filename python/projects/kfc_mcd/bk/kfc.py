#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib
import urllib2
from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import time

url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
# headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'}
# values = {'cname': '上海', 'pageIndex': 5, 'pageSize': 10}
# data = urllib.urlencode(values)

driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get(url)
# page = driver.find_element_by_css_selector("div.fenye")

print driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').text
driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
# print driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').text

# driver.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').click()
# time.sleep(2)

# r = urllib2.urlopen(driver.page_source)
# x=r.read()
# print x

# this works, get the current page number
# print page.find_element_by_css_selector('a[style*="text-decoration:underline"]').text
#this really works, turn out to the page of 2, which next to the current page
# print page.find_element_by_css_selector('a[style*="text-decoration:underline"] + *').text

# page = driver.find_element_by_css_selector("div.fenye")
# print page.find_element_by_tag_name("a")
# driver.find_element(:link => '')
# driver.find_element_by_xpath("a[@style = 'text-decoration:underline']")
# driver.find_element_by_link_text("MOST RECENT").click()
# r = urllib2.urlopen(driver.page_source)
# x=r.read()
# print x

#===========use post from requests=============================
# url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
# cname = '%E4%B8%8A%E6%B5%B7&pid=&pageIndex=2&pageSize=10'
# r = requests.post(url, data=cname)
# print(r.text)

#==========use proxy, not works================================
# proxies = {'http': 'http://127.0.0.1:8087'}
# url = 'http://www.google.com'
# html = urllib.urlopen(url, proxies=proxies).read().decode('utf-8')
# bsObj = BeautifulSoup(html, "html.parser")
# print bsObj

#=========try to post with selenium, not works=================
# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
# url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
# cname = '%E4%B8%8A%E6%B5%B7&pid=&pageIndex=2&pageSize=10'

# driver.get(url, cname)

# # print (driver.find_element_by_id('constructcontent').text)
# driver.close()

#=========print html info=====================================
# url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
# html = urllib.urlopen(url)
# print html.info()

#========post method, maybe works but can't sure without verify======
# url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
# cname = '%E4%B8%8A%E6%B5%B7&pid=&pageIndex=2&pageSize=10'
# request = urllib2.Request(url, cname)
# html = urllib2.urlopen(request).read()
# print html

#========post method, maybe works but can't sure without verify======
# url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
# cname = '%E4%B8%8A%E6%B5%B7&pid=&pageIndex=2&pageSize=10'
# html = urllib.urlopen(url, cname).read().decode('utf-8')
# bsObj = BeautifulSoup(html, "html.parser")
# shop = bsObj.find('tbody', {'id':'listhtml'})
# page = bsObj.find('a', {'style':'text-decoration:underline'})
# print page

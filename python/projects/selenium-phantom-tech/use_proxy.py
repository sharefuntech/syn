#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
import time
from bs4 import BeautifulSoup

#测试通过，可以连接纽约时报
service_args = [
    '--proxy=127.0.0.1:8087',
    '--proxy-type=http',
    ]
browser = webdriver.PhantomJS('/home/guowei/bin/phantomjs/bin/phantomjs', service_args=service_args)

url = 'http://www.nytimes.com/upshot/'
browser.get(url)
time.sleep(5)

#网页结构有输出
bsObj = BeautifulSoup(browser.page_source)
print bsObj

#有输出
print bsObj.find('p').get_text()

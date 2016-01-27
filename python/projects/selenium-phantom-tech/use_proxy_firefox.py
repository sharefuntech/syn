#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.proxy import *
import time

#测试通过，可以连接纽约时报
myProxy = "127.0.0.1:8087"

proxy = Proxy({
    'proxyType': ProxyType.MANUAL,
    'httpProxy': myProxy,
    'ftpProxy': myProxy,
    'sslProxy': myProxy,
    'noProxy': '' # set this value as desired
    })

driver = webdriver.Firefox(proxy=proxy)

# url = 'http://www.facebook.com'
# url = 'http://nytimes.com/'

#该网站可以测试ip地址，验证代理是否成功使用
url = 'http://www.ip.cn/'
driver.get(url)
time.sleep(3)
id = driver.find_element_by_id('result')
print id.text
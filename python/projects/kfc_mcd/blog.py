#!/usr/bin/env python
# -*- coding: utf-8 -*-
from selenium import webdriver
import time

url = 'http://www.kfc.com.cn/kfccda/storelist/index.aspx'
driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
driver.get(url)

time.sleep(2)

shop_list = driver.find_element_by_css_selector('#listhtml').find_elements_by_tag_name('tr')
print  type(shop_list)
print  len(shop_list)
print shop_list[0]
shop_list.remove(shop_list[0])
print  len(shop_list)

for i in range(10):
    print shop_list[i].find_element_by_xpath('//td[1]').text

# for shop in shop_list:
#     print driver.find_element_by_xpath('//td[1]').text
# for i in range(1,11):
#     shopName_xpath = '//tr[' + str(i + 1) + ']/td[1]'
#     shopAddress_xpath = '//tr[' + str(i + 1) + ']/td[2]'
#     shopName = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopName_xpath).text
#     shopAddress = driver.find_element_by_css_selector('#listhtml').find_element_by_xpath(shopAddress_xpath).text
#     print shopName
#     print shopAddress

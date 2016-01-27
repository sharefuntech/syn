import urllib,urllib2
from bs4 import BeautifulSoup

url = 'http://www.ip.cn/'
proxy = '127.0.0.1:8087'
opener = urllib2.build_opener( urllib2.ProxyHandler({'http': proxy}) )
urllib2.install_opener(opener)
 
html = urllib2.urlopen(url).read()
bsObj = BeautifulSoup(html, "html.parser")
ip = bsObj.find('div', {'id':'result'}).get_text()
print ip

# 'X-Forwarded-For': '220.181.136.230'

# from selenium import webdriver
# from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
# import time

# dcap = dict(DesiredCapabilities.PHANTOMJS)
# dcap["phantomjs.page.settings.X-Forwarded-For"] = (
#     "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36"
# )

# driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs' ,desired_capabilities=dcap) 

# driver.get("http://www.ip.cn/")
# time.sleep(1)

# # works for baidu
# data = driver.find_element_by_id('cp').text
# print data
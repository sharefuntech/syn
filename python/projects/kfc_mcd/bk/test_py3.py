from selenium import webdriver
from bs4 import BeautifulSoup
import time

driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs')
driver.get("http://www.kfc.com.cn/kfccda/storelist/index.aspx")
time.sleep(3)
pageSource = driver.page_source
bsObj = BeautifulSoup(pageSource)
content = bsObj.find('tbody', {'id': 'listhtml'}).get_text()
print(content)

driver.close()
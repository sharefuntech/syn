from selenium import webdriver
import time

driver = webdriver.PhantomJS(executable_path = '/home/guowei/bin/phantomjs/bin/phantomjs')

driver.get('http://m.jd.com/products/9987-653-655.html')

# time.sleep(2)

price = driver.find_elements_by_css_selector('.list_body .price-spot')

for p in price:
	print(p.text)

# print(driver.find_element_by_css_selector('.price-spot').text)
# print(driver.find_element_by_css_selector('.u-addr').text)
# print(driver.find_element_by_css_selector('.buy-time').text)

driver.close()

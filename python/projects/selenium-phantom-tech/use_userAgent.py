from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time

dcap = dict(DesiredCapabilities.PHANTOMJS)
dcap["phantomjs.page.settings.userAgent"] = (
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36"
)

driver = webdriver.PhantomJS(executable_path='/home/guowei/bin/phantomjs/bin/phantomjs' ,desired_capabilities=dcap) 

driver.get("http://www.baidu.com")
time.sleep(1)

# works for baidu
data = driver.find_element_by_id('cp').text
print data

# not works for dianpin, ban for spider?
# navList = driver.find_element_by_class_name('channel-nav').find_elements_by_tag_name('a')
# print navList

# cap_dict = driver.desired_capabilities
# for key in cap_dict:
#     print '%s: %s' % (key, cap_dict[key])
# print driver.current_url

driver.quit
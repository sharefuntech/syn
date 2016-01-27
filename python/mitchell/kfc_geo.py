#!/usr/bin/env python
# -*- coding: utf-8 -*-
import urllib
from urllib.request import urlopen
from bs4 import BeautifulSoup

url = "http://kfc.xixik.com/shop/shanghai/kfc"
html = urlopen(url)
bsObj = BeautifulSoup(html)
address = bsObj.find('div', {'class': 'couponAddress'}).get_text()
# address = bytes(address, 'utf-8')

# address = address.encode('gb2312', 'ignore')
# address = address.decode('gb2312', 'ignore')
print(address)

# for address in bsObj.findAll('div', {'class': 'couponAddress'}):
#     print(address.get_text())

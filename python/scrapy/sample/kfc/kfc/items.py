# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field


class KfcItem(Item):
    # store = Field()
    # address = Field()
    # shopId = Field()
    shopName = Field()
    lat = Field()
    lng = Field()
    pass

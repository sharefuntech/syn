from scrapy.spiders import Spider
from scrapy.selector import Selector

from handfirst.items import InfoItem

class LaptopSpider(Spider):
	name = 'laptop'
	allowed_domain = ['localhost']
	start_urls = ['http://guoweish.github.io/index.html']

	def parse(self, response):
		for sel in response.xpath('//ul/a'):
			item = InfoItem()
			item['description'] = sel.xpath('div/text()').extract()
			item['link'] = sel.xpath('@href').extract()
			item['image'] = sel.xpath('img/@src').extract()
			yield item
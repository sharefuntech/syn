from scrapy.selector import Selector
from scrapy import Spider
from wikiSpider.items import Article
from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors.sgml import SgmlLinkExtractor

class ArticleSpider(CrawlSpider):
	"""docstring for ArticleSpider"""
	name = 'article'
	allowed_domain = ['en.wikipedia.org']
	start_urls = ["http://en.wikipedia.org/wiki/Main_Page","http://en.wikipedia.org/wiki/Python_%28programming_language%29"]
	rules = [Rule(SgmlLinkExtractor(allow = ('(/wiki/)((?!:).)*$'),),callback = 'parse_item', follow = True)]

	def parse_item(self, response):
		item = Article()
		title = response.xpath('//h1/text()')[0].extract()
		print('title is: ' + title)
		item['title'] = title
		# content = bytes(title, 'UTF-8')
		# content = content.decode('UTF-8')
		print(content)
		return item

#======== only crawl once =======================
# class ArticleSpider(Spider):
# 	"""docstring for ArticleSpider"""
# 	name = 'article'
# 	allowed_domain = ['en.wikipedia.org']
# 	start_urls = ["http://en.wikipedia.org/wiki/Main_Page","http://en.wikipedia.org/wiki/Python_%28programming_language%29"]

# 	def parse(self, response):
# 		item = Article()
# 		title = response.xpath('//h1/text()')[0].extract()
# 		print('title is: ' + title)
# 		item['title'] = title
# 		return item
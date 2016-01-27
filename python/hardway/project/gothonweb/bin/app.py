import web

urls = ('/hello', 'index')
# urls = ('/', 'route')

app = web.application(urls, globals())

render = web.template.render('templates/')

class index(object):
	def GET(self):
		return render.hello_form()

	def POST(self):
		form = web.input(name='nobody', greet='hello')
		greeting = '%s, %s' %(form.name, form.greet)

		return render.index(greeting = greeting)

if __name__ == '__main__':
	app.run()


#==============================================
# urls = ('/hello', 'index')
# # urls = ('/', 'route')

# app = web.application(urls, globals())

# render = web.template.render('templates/')

# class index(object):
# 	def GET(self):
# 		form = web.input(name='nobody')
# 		greeting = '%s, %s' %(form.name, form.greet)

# 		return render.index(greeting = greeting)

# if __name__ == '__main__':
# 	app.run()


#==============================================
# urls = ('/', 'index')
# # urls = ('/', 'route')

# app = web.application(urls, globals())

# render = web.template.render('templates/')

# class index:
# 	def GET(self):
# 		greeting = 'revise it!'
# 		return render.index(greeting = greeting)

# class route:
# 	def GET(self):
# 		greeting = '<div><span>route<span></div><script>alert("route");</script>'
# 		return greeting

# if __name__ == '__main__':
# 	app.run()
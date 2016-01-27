# mystuff = {'apple': 'hi apple!'}
# print mystuff['apple']

# import mystuff

# mystuff.apple()
# print mystuff.tangerine

class MyStuff(object):
	"""docstring for MyStuff"""
	def __init__(self):
		self.tangerine = 'vilala!'

	def apple(self):
		print 'hi apple! From my stuff!'

# thing = MyStuff()
# thing.apple()
# print thing.tangerine

class Song(object):
	"""docstring for Song"""
	def __init__(self, lyrics):
		self.lyrics = lyrics

	def sing_a_song(self):
		for line in self.lyrics:
			print line

happy_day = Song(['happy birthday to you', 'happy birthday to you', 'happy birthday!'])

happy_day.sing_a_song()

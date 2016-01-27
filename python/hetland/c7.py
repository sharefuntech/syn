
class Person(object):
	"""docstring for Person"""
	def __init__(self, name):
		# super(Person, self).__init__()
		self.name = name

	def setName(self, name):
		self.name = name

	def getName(self):
		return self.name

	def greet(self):
		print 'hello I\'m %s' % self.name 

class Woman(Person):
	"""docstring for Woman"""
	def location(self,place):
		self.place = place
		
# print will.getName()

# page = Person('page')
# print page.getName()

print issubclass(Woman, Person)

# class MemberCounter:
# 	members = 0
# 	def init(self):
# 		MemberCounter.members += 1

# m1 = MemberCounter()
# m1.init()
# m1.init()
# print MemberCounter.members

# m2 = MemberCounter()
# m2.init()
# print MemberCounter.members
# print m2.members
# foo = lambda x: x * x
# print foo(5)

# class Sec:
# 	def __invisi(self):
# 		print 'invisible'

# 	def acces(self):
# 		print 'invisible message:'
# 		self.__invisi()

# s = Sec()
# # s.__invisi()
# s.acces()

# class Bird:
# 	song = 'squaawk!'
# 	def sing(self):
# 		print self.song

# b = Bird()
# # b.sing()
# b.song = 'guagua'
# b.sing()		

#=== 7.2 ============================
# class Person(object):
# 	"""docstring for Person"""
# 	def __init__(self, name):
# 		super(Person, self).__init__()
# 		self.name = name

# 	def setName(self, name):
# 		self.name = name

# 	def getName(self):
# 		return self.name

# 	def greet(self):
# 		print 'hello I\'m %s' % self.name 
		
# wei = Person('wei')
# # print wei.getName()
# wei.setName('william')
# print wei.getName()
# wei.greet()


#=== 7.1 ============================
# def add(x, y):
# 	return x + y

# print add('3', '5')
# print add(3, 5)
# def length_message(x):
# 	print 'length of ', repr(x), 'is ', len(x)
# length_message('hello ooo')


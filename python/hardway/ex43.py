class Parent(object):
	def override(self):
		print 'parent'	

class Child(Parent):
	def override(self):
		super(Child, self).override()
		print 'child'	

# dad = Parent()
# son = Child()

# dad.override()
# son.override()

# dad.implicit()
# son.implicit()
			
class Cat(object):
	def miu(self):
		print 'miu'
		
class Dog(object):
	def bar(self):
		print 'wooooh'	

class Beast(Cat, Dog):
	"""docstring for Beast"""
	def feat(self):
		super(Beast, self).miu()
		super(Beast, self).bar()
		print 'power of pets'
				
# newBee = Beast()
# newBee.feat()

class Others(object):
	"""docstring for Other"""
	def __init__(self):
		print 'its other'

class Another(Others):
	"""docstring for Another"""
	def __init__(self):
		super(Another, self).__init__()
		print 'its Another'
		
# newone = Another()

class Other(object):
	def override(self):
		print 'other override()'

	def implicit(self):
		print 'other implicit()'

	def altered(self):
		print 'other altered()'

class NewOther(object):
	def __init__(self):
		self.other = Other()

	def implicit(self):
		self.other.implicit()
		
	def override(self):
		print 'child override'

	def altered(self):
		print 'child override first'
		self.other.altered()
		print 'composite finished'

newIt = NewOther()
newIt.implicit()
newIt.override()
newIt.altered()
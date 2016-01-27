class Animal(object):
	"""docstring for Animal"""
	pass

class Dog(Animal):
	"""docstring for Dog"""
	def __init__(self, name):
		self.name = name
		
class Cat(Animal):
	"""docstring for Dog"""
	def __init__(self, name):
		self.name = name

class Person(Animal):
	"""docstring for Dog"""
	def __init__(self, name):
		self.name = name
		self.pet = None

class Employee(Person):
	"""docstring for Employee"""
	def __init__(self, name, salary):
		super(Employee, self).__init__(name)
		self.salary = salary

class Fish(object):
	"""docstring for Fish"""
	pass

class Salmon(Fish):
	"""docstring for Salmon"""
	pass

class Halibut(Fish):
	"""docstring for Salmon"""
	pass
				
rover = Dog('rover')	

satan = Cat('satan')

mary = Person('mary')

mary.pet = satan

frank = Employee('frank', 15000)

frank.pet = rover

flipper = Fish()

crouse = Salmon()

harry = Halibut()

print rover.name
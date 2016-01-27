the_count = [1,2,3,4,5]
fruits = ['apple', 'orange', 'kiwi']
change = [1, 'penny', 2, 'sheldon']

for number in the_count:
	print 'this is count %d' %number

for fruit in fruits:
	print 'a fruit is %s' %fruit

for x in change:
	print 'i got %r' %x

elements = []

for x in xrange(1,10):
	elements.append(x)
	print elements[x - 1]

for x in elements:
	print 'elements is %d' %x
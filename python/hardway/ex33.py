i = 0
numbers = []

while i < 6:
	print 'at the top i is %d' %i
	numbers.append(i)

	i += 1
	print 'number now: ', numbers
	print 'at the bottom i is %d' %i

for x in numbers:
	print 'numbers is %d' %x
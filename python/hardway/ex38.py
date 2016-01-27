ten_things = 'apple orange potato tomato carrige'

stuff = ten_things.split(' ')

more_stuff = ['wine', 'cake', 'coke', 'water', 'fish', 'meat']

while len(stuff) != 10:
	next_one = more_stuff.pop()
	print 'add ', next_one
	stuff.append(next_one)
	print 'is %d item now' %len(stuff)

print 'we have ', stuff

print stuff[1], stuff[-1], stuff.pop() 

print ' '.join(stuff)
print '#'.join(stuff)
print '#'.join(stuff[1:3])
print '#'.join(stuff[0:1])
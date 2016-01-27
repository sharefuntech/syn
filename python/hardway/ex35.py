from sys import exit

def gold_room():
	print 'this is a gold room, how much do you take?'

	next = raw_input('>>>>')
	if '0' in next or '1' in next:
		how_much = int(next)
	else:
		dead('you need type a number')

	if how_much < 50:
		print 'nice, you\'re not greedy'
	else:
		dead('you greedy bastard!')

def bear_room():
 	print 'there is a bear here. \n bear has a bunch of money.\n how are you going to move the bear?' 

 	bear_move = False

 	while True:
 		next = raw_input('>>>>')

 		if next == 'take money':
 			dead('bear eat your face')
 		elif next == 'taunt bear' and not bear_move:
 			print 'bear leave the door'
 			bear_move = True
 		elif next == 'taunt bear' and bear_move:
 			dead('bear pissed off and eat your face')
 		elif next == 'open door' and bear_move:
 			gold_room()
 		else:
 			print 'no idea what you mean'

def cthulhu_room():
	print 'here you see the great evil cthulhu, do you flee or go ahead?'

	next = raw_input('>>>>')

	if 'flee' in next:
		start()
	elif 'ahead' in next:
		dead('yummuy head!')
	else:
		cthulhu_room()

def dead(why):
	print why, ' good job'
	exit(0)

def start():
	print 'you are in a dark room, there is a door to right and left, which do you take?'

	next = raw_input('>>>>')

	if next == 'left':
		bear_room()
	elif next == 'right':
		cthulhu_room()
	else: 
		dead('you traped in dark room and starve')

start() 

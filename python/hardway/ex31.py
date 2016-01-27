print 'you enter a drak room with two doors. #1 and #2 which door you\'ll go throuth?'

door = raw_input('>')

if door == '1':
	print 'there is giant bear eating cheese cake, what do you do?'
	print '1. take the cake'
	print '2.scream at the bear'

	bear = raw_input('>')

	if bear == '1':
		print 'bear eat your face'
	elif bear == '2':
		print 'bear eat your leg'
	else:
		print 'well, doing %s is probably better. bear run away.' %bear

elif door == '2':
	print 'you stare into the endless abyss'
	print '1. blueberries'
	print '2. yellow jacket'
	print '3.understanding revolvers yelling melodies'

	insanity = raw_input('>')

	if insanity == '1' or insanity == '2':
		print 'your body survives powered by a mind of jello'
	else:
		print 'the insanity rots your eyes'

else:
	print 'you stumble around and fall on a knife'
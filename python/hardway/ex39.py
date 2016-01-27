# stuff = {'name': 'zed', 'age': 36, 'height': 6*12+2}
# # print stuff['name'], stuff['age'],stuff['height']
# # print 'stuff name %s' %stuff['name']

# stuff[1] = 'hello'
# print stuff[1]

states = {
	'oregon': 'or',
	'florida': 'fl',
	'california': 'ca',
	'newyouk': 'ny',
	'michigan': 'mi'
}

cities = {
	'ca': 'san francisco',
	'mi': 'detroit',
	'fl': 'jacksonville'
}

cities['ny'] = 'newyouk'
cities['or'] = 'portland'

# print '-' * 30
# print 'ny states has: ', cities['ny']
# print 'or states has: ', cities['or']

# print '-' * 30
# print 'michigan abbreviation is: ', states['michigan']
# print 'california abbreviation is: ', states['california']

# print '-' * 30
# print 'michigan has: ', cities[states['michigan']]

print '-' * 30
for state, abbrev in states.items():
	print '%s is abbreviation of %s and has city %s' %(abbrev, state, cities[abbrev])

# print '-' * 30
# for state, city in cities.items():
# 	print 'state %s has city %s' %(state, city)


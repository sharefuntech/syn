from sys import argv

script, user_name = argv
prompt = '>'

print 'hi %s this is script %s ' %(user_name, script)
print 'really %s' %user_name
likes = raw_input(prompt)

print 'where do you live %s' %user_name
live = raw_input(prompt)

print """
hi %r you really %r and live in %r
""" %(user_name, likes, live)
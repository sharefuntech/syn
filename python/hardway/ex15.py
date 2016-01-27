from sys import argv

script, filename = argv

txt = open(filename)

print 'file name? %r' %filename
print txt.read()

print 'read more file? '
file_again = raw_input('>')

txt_again = open(file_again)

print txt_again.read()
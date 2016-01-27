from sys import argv

script, filename = argv

print 'will ease %r' %filename
print 'ctrl-c to cancel, return to comfirm'

raw_input('?')

print 'opening file ...'
target = open(filename, 'w')

print 'truncating the file...'
target.truncate()

print 'now write file'

l_1 = raw_input('line 1: ')
l_2 = raw_input('line 2: ')
l_3 = raw_input('line 3: ')

print 'now writting'

target.write(l_1)
target.write('\n')
target.write(l_2)
target.write('\n')
target.write(l_3)
target.write('\n')

print 'now close'
target.close()

# txt = open(filename)

# print 'file name? %r' %filename
# print txt.read()

# print 'read more file? '
# file_again = raw_input('>')

# txt_again = open(file_again)

# print txt_again.read()
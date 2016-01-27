def print_two(*args):
	arg1, arg2 = args
	print 'arg1: %r, arg2: %r' %(arg1, arg2)

def print_two_again(arg1, arg2):
	print 'arg1: %r, arg2: %r' %(arg1, arg2)

def print_one(arg1):
	print 'arg1: %r' %arg1

def print_none():
	print 'none' 

print_two('hello', 'world')
print_two('one', 'more')
print_one('singlton')
print_none()

# from sys import argv
# from os.path import exists

# script, from_file, to_file = argv

# print 'copying from file %s to file %s' %(from_file, to_file)

# in_file = open(from_file)
# in_data = in_file.read()

# print 'input file is %d bytes' %len(in_data)

# print 'does output file exists? %r' %exists(to_file)

# print 'ctrl-c to cancel, return to comfirm'
# raw_input('?')

# out_file = open(to_file, 'w')
# out_file.write(in_data)

# print 'done'
# out_file.close()
# in_file.close()

# print 'merge file content is: '
# merge_file = open(to_file)
# print merge_file.read()



# print 'will ease %r' %filename
# print 'ctrl-c to cancel, return to comfirm'

# raw_input('?')

# print 'opening file ...'
# target = open(filename, 'w')

# print 'truncating the file...'
# target.truncate()

# print 'now write file'

# l_1 = raw_input('line 1: ')
# l_2 = raw_input('line 2: ')
# l_3 = raw_input('line 3: ')

# print 'now writting'

# target.write(l_1)
# target.write('\n')
# target.write(l_2)
# target.write('\n')
# target.write(l_3)
# target.write('\n')

# print 'now close'
# target.close()

# txt = open(filename)

# print 'file name? %r' %filename
# print txt.read()

# print 'read more file? '
# file_again = raw_input('>')

# txt_again = open(file_again)

# print txt_again.read()
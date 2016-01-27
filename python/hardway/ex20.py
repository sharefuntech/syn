# from sys import argv

# script, input_file = argv

def add(a, b):
	print 'will add a%d and b%d' %(a, b)
	return a + b

print 'output is: ', add(1, 2)

# def print_all(f):
# 	print f.read()

# # seek the start point of a document
# def rewind(f):
# 	f.seek(0)

# def print_a_line(line_count, f):
# 	print line_count, f.readline()

# current_file = open(input_file)

# print 'print current file'
# print_all(current_file)

# print 'lets rewind'
# rewind(current_file)

# print 'lets print 2 lines'
# current_line = 1
# print_a_line(current_line, current_file)
# current_line = current_line + 1
# print_a_line(current_line, current_file)

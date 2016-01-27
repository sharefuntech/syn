# def search(sequence, number, lower, upper):
# 	if lower == upper:
# 		assert number == sequence[upper]
# 		return upper
# 	else:
# 		middle = (lower + upper) // 2
# 		if number > sequence[middle]:
# 			return search(sequence, number, middle + 1, upper)
# 		else:
# 			return search(sequence, number, lower, middle)

# seq = [1, 6, 8, 11, 34]
# search(seq, 11, 1, 34)

# def factorial(n):
# 	result = n
# 	for i in range(1, n):
# 		result *= i
# 	return result

# print factorial(5)

# def factorial(n):
# 	if n == 1:
# 		return 1
# 	else:
# 		return n * factorial(n-1)

# print factorial(5)
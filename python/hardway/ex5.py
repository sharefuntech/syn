#!/usr/bin/env python
# -*- coding: utf-8 -*-
#my_name = "郭伟"
#my_age = 32

#print "my name is %s" %my_name
#print "my age is %d" %my_age
#print "I am a man called %s of age %d" %(my_name, my_age)

x = "there are %d type of people" %10
do_not = "don't "
y = "those who %s know it" %do_not
r = "this will be out in raw 2 + 2 = %r"
#~ print x + y + r

#~ print "i said %s %r" % (x, y)

#~ print (do_not + "") * 5

formatter = "%s %r"
#~ print formatter % (1, "hello")
#~ print formatter % (True, False)
print formatter % (3, 4)

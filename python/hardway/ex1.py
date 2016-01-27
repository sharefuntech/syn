#print "hello world"
#print 'should not see hello world anymore'
cars = 100
space_in_car = 4.0
drivers = 30
passengers = 90
cars_not_driven = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_car
average_passengers_per_car = passengers / cars_driven

print "there are", cars, "cars are available"
print "there are", drivers, "drivers avalable"
print "there will be", cars_not_driven, "empty cars"
print "there will be", carpool_capacity, "transported"
print "here we have", average_passengers_per_car, "people in a car"

# Write a method that takes in two numbers. Return the greatest
# integer that evenly divides both numbers. You may wish to use the
# `%` modulo operation.
#
# Difficulty: medium.

def greatest_common_factor(number1, number2)
  divider = 1
  large_num = number1 >= number2 ? number1 : number2
  small_num = large_num == number1 ? number2 : number1
  while divider <= small_num
    result = small_num / divider
    if large_num % result == 0
      return result
    end
    divider += 1
  end
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts("\nTests for #greatest_commmon_factor")
puts("===============================================")
    puts(
      'greatest_common_factor(3, 9) == 3: ' +
      (greatest_common_factor(3, 9) == 3).to_s
    )
    puts(
      'greatest_common_factor(16, 24) == 8: ' +
      (greatest_common_factor(16, 24) == 8).to_s
    )
    puts(
      'greatest_common_factor(3, 5) == 1: ' +
      (greatest_common_factor(3, 5) == 1).to_s
    )
puts("===============================================")


######################################
# App Academy Answer... not as optimized
# def greatest_common_factor(number1, number2)
#   # start i at smaller of number1, number2
#   i = nil
#   if number1 <= number2
#     i = number1
#   else
#     i = number2
#   end

#   while true
#     if (number1 % i == 0) && (number2 % i == 0)
#       return i
#     end

#     i -= 1
#   end
# end
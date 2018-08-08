# Write a program that will calculate the number of trailing zeros in a factorial of a given number.

# N! = 1 * 2 * 3 * ... * N

# Be careful 1000! has 2568 digits...

# For more info, see: http://mathworld.wolfram.com/Factorial.html

# Examples
# zeros(6) = 1
# # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

# zeros(12) = 2
# # 12! = 479001600 --> 2 trailing zeros

def zeros(n)
    if n <= 3
      return 0
    end
    total = 1
    while n > 1
      total *= n
      n -= 1
    end
    result = 0
    while true
      if total % 10 != 0
        return result
      else
        total /= 10
        result += 1
      end
    end
  end
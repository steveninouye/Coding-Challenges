# Is Prime
# Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

# Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

# Example

def isPrime(num)
    test_num = (num / 2).floor
    num < 2 ? false : (2..test_num).to_a.select{|x| num % x == 0 && num != 2 }.length == 0
  end
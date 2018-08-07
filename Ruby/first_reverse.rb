# Challenge
# Using the Ruby language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 
# Sample Test Cases
# Input:"coderbyte"

# Output:"etybredoc"


# Input:"I Love Code"

# Output:"edoC evoL I"

def FirstReverse(str)
    i = str.length - 1
    result = ''
    while i >= 0
        result += str[i]
        i -= 1
    end
    # code goes here
    return result
           
  end
     
  # keep this function call here    
  puts FirstReverse(STDIN.gets)  
  
  
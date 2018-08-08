# Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

#  Three 1's => 1000 points
#  Three 6's =>  600 points
#  Three 5's =>  500 points
#  Three 4's =>  400 points
#  Three 3's =>  300 points
#  Three 2's =>  200 points
#  One   1   =>  100 points
#  One   5   =>   50 point
# A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

# Example scoring

#  Throw       Score
#  ---------   ------------------
#  5 1 3 4 1   50 + 2 * 100 = 250
#  1 1 1 3 1   1000 + 100 = 1100
#  2 4 4 5 4   400 + 50 = 450

def score( dice )
    total_score = 0
    hash = Hash.new(0)
    dice.each {|x| hash[x] += 1}
    total_score += hash[1] < 3 ? hash[1] * 100 : 1000 + (hash[1] - 3) * 100
    total_score += hash[5] < 3 ? hash[5] * 50 : 500 + (hash[5] -3) * 50
    total_score += hash[6] > 2 ? 600 : 0
    total_score += hash[4] > 2 ? 400 : 0
    total_score += hash[3] > 2 ? 300 : 0
    total_score += hash[2] > 2 ? 200 : 0
    total_score
  end
# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
# with the same value next to each other and preserving the original order of elements.
def unique_in_order(chars) 
  
  chars.is_a?(String) ? chars.squeeze.split(//) : chars.keep_if.with_index { |item, index| item != chars[index+1] }

end

p unique_in_order('AAAABBBCCDAABB') == ['A','B','C','D','A','B']
p unique_in_order('ABBCcAD') == ['A','B','C','c','A','D']
p unique_in_order([1,2,2,3,3]) == [1,2,3]

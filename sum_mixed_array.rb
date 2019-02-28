
def sum_mix(x)
  sum = 0
  for i in x do
    if i.is_a?(String) then
      sum += i.to_i
    else
      sum += i
    end
  end
    p sum
end

sum_mix([1,2,3,"4"])
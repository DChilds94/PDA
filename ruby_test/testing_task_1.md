### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#this will not pass as you need == to check if something is true or not.
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# this will not work as there is a typo. It should read "def highest_card" not "dif highest_card"
# also there has to be a coma between card1 and card2 on line 25.
#the card doesn't have a name and it should return card1.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end
# this is an un-needed end


# this will not work as the variable of total has not been assigned to anything.
# this will not work as total on line 40 needs string interpolation
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```

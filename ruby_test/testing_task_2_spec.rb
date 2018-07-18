require('minitest/autorun')

require_relative('./testing_task_2.rb')

class Testing < MiniTest::Test
  def setup()
    @game = CardGame.new
    @card1 = Card.new("spade", 1)
    @card2 = Card.new("diamond", 12)
    @cards = [@card1, @card2]
  end

  def test_check_for_ace
    assert_equal(true, @game.checkforace(@card1))
    assert_equal(false, @game.checkforace(@card2))
  end

  def test_highest_card
    assert_equal(@card2, @game.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 13", @game.cards_total(@cards))
  end

end

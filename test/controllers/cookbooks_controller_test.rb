require 'test_helper'

class CookbooksControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get featured" do
    get :featured
    assert_response :success
  end

  test "should get menu" do
    get :menu
    assert_response :success
  end

end

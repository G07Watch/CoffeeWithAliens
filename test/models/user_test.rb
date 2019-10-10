# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  nickname        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  first_name      :string
#  last_name       :string
#  phone_number    :integer
#  subscribed      :boolean          default("false")
#  is_host         :boolean          default("false")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  star_system_id  :integer
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

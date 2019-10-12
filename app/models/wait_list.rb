# == Schema Information
#
# Table name: wait_lists
#
#  id                 :integer          not null, primary key
#  priority           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  coffee_schedule_id :integer
#

class WaitList < ApplicationRecord
end

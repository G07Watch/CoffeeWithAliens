# == Schema Information
#
# Table name: hosts
#
#  id         :integer          not null, primary key
#  facebook   :string
#  intro      :text             not null
#  story      :text             not null
#  topics     :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Host < ApplicationRecord
  validates :intro, :story, :topics, presence: true

  belongs_to :user 

end

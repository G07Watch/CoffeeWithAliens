# == Schema Information
#
# Table name: star_systems
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class StarSystem < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :users

end

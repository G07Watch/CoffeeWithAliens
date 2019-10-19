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

class User < ApplicationRecord
  validates :nickname, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token
  after_initialize :ensure_first_name


  belongs_to :star_system

  has_one :host

  has_many :coffee_schedules

  has_many :coffee_times, through: :coffee_schedules



  # FeGrip

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if (user && user.is_password?(password))
  end


  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_first_name
    self.first_name ||= self.nickname
  end

end

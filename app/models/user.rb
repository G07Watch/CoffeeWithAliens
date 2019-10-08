class User < ApplicationRecord
  validates :nickname, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token
  after_initialize :ensure_first_name


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

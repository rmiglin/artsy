class User < ApplicationRecord
    validates :first_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    attr_reader :password

    has_many :carted_entries,
        foreign_key: :user_id,
        class_name: :Cart

    has_many :carted_products,
        through: :carted_entries,
        source: :buyer
    
    #############################  
    has_many :products,
        foreign_key: :seller_id,
        class_name: :Product
    #############################

    after_initialize :ensure_session_token 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

end

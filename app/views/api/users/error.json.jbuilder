json.set! :Errors do
   @user.errors.full_messages.each do |error|
    error
   end
end

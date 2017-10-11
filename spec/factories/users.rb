FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "nitewng#{n}@batinc.com" }
    sequence(:password) { |n| "nitewng#{n}sthebestlolz" }
    first_name "Richard"
    sequence(:last_name) { |n| "Greyson#{n}" }

    factory :admin do
      admin true
    end
  end
end

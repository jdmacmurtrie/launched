FactoryGirl.define do
  factory :project do
    sequence(:title) { |n| "Whale Review Site ##{n}" }
    description "A review site for whales"
    url "www.whalereviews.dog"
    screenshot "https://ichef.bbci.co.uk/news/660/cpsprodpb/115CA/production/_90741117_0bebad60-b644-409a-83cb-5cd96a539a4c.jpg"
    project_type "Group Project"
  end
end

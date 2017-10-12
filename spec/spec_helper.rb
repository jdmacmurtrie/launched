require 'coveralls'
require 'simplecov'
Coveralls.wear!('rails')
SimpleCov.start

RSpec.configure do |config|
  require_relative 'support/database_cleaner'

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end

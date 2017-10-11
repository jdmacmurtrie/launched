require 'simplecov'
require 'coveralls'

SimpleCov.formatter = Coveralls::SimpleCov::Formatter
SimpleCov.start do
   add_filter 'app/channels'
   add_filter 'app/controllers/application_controller.rb'
   add_filter 'app/controllers/static_pages_controller.rb'
   add_filter 'app/mailers'
   add_filter 'app/jobs'
end

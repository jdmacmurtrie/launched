require 'rails_helper'

feature 'user visits static pages' do
  scenario 'projects index' do
    visit root_path

    expect(page).to have_content('Boo Ya')
  end

  scenario 'admin projects new' do
    visit admin_projects_path

    expect(page).to have_content("Boo Ya")
  end
end

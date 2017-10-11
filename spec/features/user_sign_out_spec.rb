require 'rails_helper'

feature 'user signs in' do
  let(:user) { create(:user) }
  scenario 'an authenticated user signs out' do
    visit root_path
    click_link 'Sign In'

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In'

    click_link 'Sign Out'

    expect(page).to have_content('Signed out successfully.')
    expect(page).to have_content('Sign In')
  end

  scenario 'a non-authenticated user tries to sign out' do
    visit root_path

    expect(page).to have_content('Sign In')
  end
end

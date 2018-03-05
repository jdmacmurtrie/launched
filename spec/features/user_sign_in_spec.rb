require 'rails_helper'

feature 'user signs in' do
  let(:user) { create(:user) }
  scenario 'an existing user specifies a valid email and password' do
    visit root_path
    click_link 'Log In'

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In'

    expect(page).to have_content('Welcome Back!')
    expect(page).to have_content('Sign Out')
  end

  scenario 'a nonexistant email and password is supplied' do
    visit root_path
    click_link 'Log In'

    fill_in 'Email', with: 'ayyyy@lm.ao'
    fill_in 'Password', with: 'cutefuzzypuppykitten'
    click_button 'Sign In'

    expect(page).to have_content('Invalid Email or password')
    expect(page).to_not have_content('Welcome Back!')
    expect(page).to_not have_content('Sign Out')
  end

  scenario 'an existing email with the wrong password is denied access' do
    visit root_path
    click_link 'Log In'

    fill_in 'Email', with: user.email
    fill_in 'Password', with: "WRONG"
    click_button 'Sign In'

    expect(page).to have_content('Invalid Email or password')
    expect(page).to_not have_content('Welcome Back!')
    expect(page).to_not have_content('Sign Out')
  end

  scenario 'an already authenticated user cannot re-sign in' do
    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In'

    visit new_user_session_path

    expect(page).to have_content('You are already signed in.')
  end
end

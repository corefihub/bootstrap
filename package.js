Package.describe({
  summary: 'Accounts Templates styled for Twitter Bootstrap.',
  version: '1.15.2',
  name: 'corefihub:useraccounts-bootstrap',
  git: 'https://github.com/corefihub/bootstrap.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.11.1');

  api.use([
    'blaze-html-templates@1.2.0',
    'underscore',
  ], 'client');

  api.use([
    'corefihub:useraccounts-core',
  ], ['client', 'server']);

  // Requires all routing packages loads before this asking for weak dependencies.
  // api.use('sebl29:useraccounts-flow-routing@1.15.0', ['client', 'server'], {weak: true});
  api.use('sebl29:useraccounts-iron-routing@1.15.0', ['client', 'server'], {weak: true});

  api.imply([
    'corefihub:useraccounts-core@1.15.2',
  ], ['client', 'server']);

  api.add_files([
    'lib/at_error.html',
    'lib/at_error.js',
    'lib/at_form.html',
    'lib/at_form.js',
    'lib/at_input.html',
    'lib/at_input.js',
    'lib/at_message.html',
    'lib/at_message.js',
    'lib/at_nav_button.html',
    'lib/at_nav_button.js',
    'lib/at_oauth.html',
    'lib/at_oauth.js',
    'lib/at_pwd_form.html',
    'lib/at_pwd_form.js',
    'lib/at_pwd_form_btn.html',
    'lib/at_pwd_form_btn.js',
    'lib/at_pwd_link.html',
    'lib/at_pwd_link.js',
    'lib/at_reCaptcha.html',
    'lib/at_reCaptcha.js',
    'lib/at_result.html',
    'lib/at_result.js',
    'lib/at_sep.html',
    'lib/at_sep.js',
    'lib/at_signin_link.html',
    'lib/at_signin_link.js',
    'lib/at_signup_link.html',
    'lib/at_signup_link.js',
    'lib/at_social.html',
    'lib/at_social.js',
    'lib/at_terms_link.html',
    'lib/at_terms_link.js',
    'lib/at_resend_verification_email_link.html',
    'lib/at_resend_verification_email_link.js',
    'lib/at_title.html',
    'lib/at_title.js',
    'lib/full_page_at_form.html',
    'lib/at_bootstrap.css'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use([
    'corefihub:useraccounts-bootstrap@1.15.1',
    'corefihub:useraccounts-core@1.15.1',
  ]);

  api.use([
    'accounts-password',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.add_files([
    'tests/tests.js'
  ], ['client', 'server']);
});

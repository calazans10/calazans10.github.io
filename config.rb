configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end

activate :directory_indexes


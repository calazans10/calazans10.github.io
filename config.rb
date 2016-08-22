page '/*.json', layout: false
page '/*.txt', layout: false
page '/*.xml', layout: false

activate :sprockets

configure :development do
  activate :livereload
  set :debug_assets, true
end

configure :build do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end

activate :deploy do |deploy|
  deploy.branch = 'master'
  deploy.build_before = true
  deploy.deploy_method = :git
end

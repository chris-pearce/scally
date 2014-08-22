desc "Test if SASS files are compiling"
task test: ["test:compile", "test:cleanup"]

desc "SASS test tasks"
namespace :test do
  desc "Compile SASS files"
  task :compile do
    Dir["*.scss"].each do |sass|
      css = sass.sub('scss', 'css')
      result = `sass #{sass} #{css}`

      raise result unless $?.to_i == 0

      raise "When compiled the module should output some CSS" unless File.exists?(css)
    end

    puts "Regular compile worked successfully"
  end

  desc "Clean up CSS files"
  task :cleanup do
    Dir["*.css"].each do |css|
      `rm #{css}`
    end

    puts "CSS files cleaned up"
  end
end

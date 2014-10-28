desc "Test if SASS files are compiling"
task test: ["test:compile", "test:cleanup"]

desc "SASS test tasks"
namespace :test do

  desc "Compile SASS files"
  task :compile do

    result = `sass style-test.scss test.css`

    raise result unless $?.to_i == 0

    raise "Compiling Sass files failed" unless File.exists?('test.css')

    puts "Sass files compiled successfully"
  end

  desc "Clean up CSS files"
  task :cleanup do
    Dir["*.css"].each do |css|
      `rm #{css}`
      `rm #{css}.map` if File.file?("#{css}.map")
    end

    puts "CSS files cleaned up"
  end
end

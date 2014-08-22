#!/usr/bin/env ruby

Dir["*.scss"].each do |sass|
  css = sass.sub('scss', 'css')
  result = `sass #{sass} #{css}`

  raise result unless $?.to_i == 0

  raise "When compiled the module should output some CSS" unless File.exists?(css)
end

puts "Regular compile worked successfully"

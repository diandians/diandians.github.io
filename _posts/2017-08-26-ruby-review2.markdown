---
layout: page
title:  "Ruby Review - 2"
date:   2017-08-26 12:00:40 +0800
categories: ruby
---

Fall semaster is coming. Tough life is around the corner. QQ. So later, I may update post less often. Though, I will try my best to write something good.

### Blocks

1. Chunks of code
* Enclosed between either curly braces({}) or the keywords *do* and *end*
* passed to methods as last "parameter"
Convention:
* Use {} when block content is a single line
* Use *do* and *end* when block content apans multiple lines 
* Often used as iterators

```ruby
  1.times {puts "Hello Worlds!"}
  # => Hello Words!

  2.times do |index|
    if index > 0
      puts index
    end
  end
  # => 1

  2.times {|index| puts index if index > 0}
  # => 1
```

2. Coding with blocks
There are two ways to configure a block in your own method.
* Implicit
  * Use block_given? to see if block was passed in
  * Use yield to "call" the block
  * Need to check "block_given?"
  * Otherwise, an exception is thrown

```ruby
  def two_times_implicit
    return "No block" unless block_given
    yield
    yield
  end
  puts two_times_implicit {print "Hello"} # => Hello
                                          # => Hello
  puts two_times implicit # => No block
```

* Explicit
  * Use & in front of the last "parameter"
  * Use call method to call the block
  * Explicit is more direct

```ruby
 def two_times_explicit (&i_am_a_block)
   return "No block" if i_am_a_block.nil?
   i_am_a_block.call
   i_am_a_block.call
 end
 puts two_times_explicit # => No block
 two_times_explicit {puts "Hello"} # => Hello
                                   # => Hello
```

***
### Files

#### Reading from file

```ruby
  File.foreach('test.txt') do |line|
    puts lines     # => The first line of the file
    p line         # => "The first line of the file\n"
    p line.chomp   # => "The first line of the file" (chops off newline char))
    p line.split   # => ["The", "first", "line", "of", "the", "file"]
  end
```

#### Reading from non existing file
You will get an exception. Then you should handle the exception by using *rescue* keyword.
(This would help you in cases where a real exception happens, like there's something wrong with your network)
```ruby
  begin
    File.foreach('do_not_exist.txt') do |line|
      puts line.chomp
    end
    rescue Exception => e
      puts e.message
      puts "Let's pretend this didn't happen..."
    end 
  end  
```

Alternative to Exceptions (for simple cases of not being able to find a file)
```ruby
  if File.exist? 'test.txt'
    File.foreach('test.txt') do |line|
      puts line.chomp
    end
  end
```

#### Writing to File
The file is *automatically* closed after the block executes

```ruby
  File.open("test1.txt", "w") do |file|
    file.puts "One line"
    file.puts "Another"
  end
```
***

Strings


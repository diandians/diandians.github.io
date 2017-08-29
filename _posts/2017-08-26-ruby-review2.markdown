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

### Strings
#### String/Interpolation

1. Single-quote literal strings are very literal
* Allow escaping of ` with \
* Show (almost) everything else as is

2. Double-quoted strings
* Interpret special characters line \n and \t
* Allow string interpolation!

```ruby
  single_quoted = 'ice cream \n followed by it\'s a party!'
  double_quoted = "ice cream \n followed by it\'s a party!"

  puts single_quoted # => ice cream \n followed by it's a party!
  puts double_quoted # => ice cream
  
  def multiply (one, two)
    "#{one} multiplied by #{two} equals #{one * two}"   ## interpolation(only available for double-quoted strings)
  end
  puts multiply(5, 3)
  # => 5 multiplied by 3 equals 15
```

#### More Strings
* String methods ending with ! modify the existing string, most others just return a new string
* Can also use %Q{long multiline string} (same behavior as double-quoted string)

```ruby
  my_name = " tim"
  puts my_name.lstrip.capitalize # => Tim
  p my_name # => " tim"
  my_name.lstrip! # (destructive) removes the leading space
  my_name[0] = 'K' # replace the first character
  puts my_name # => Kim

  cur_weather = %Q{It's a hot day outside
                   Grab you umbrellas...}

  cur_weather.lines do |line|
    line.sub! 'hot', 'rainy' # substitute 'hot' with 'rainy'
    puts "#{line.strip}"
  end
  # => It's a rainy day outside
  # => Grab your umbrellas...
```
* String APIs
  Go to ```ruby-doc.org``` to get more information about String APIs.

#### Symbols

  * Guaranteed to be *unique* and *immutable* (useful in hash table as key, etc)
  * Can be converted to a String with to_s; Or from String to SYmbol with to_sym

***

### Arrays

* Collection of object references (auto-expandable)
* Indexed using [] operator (method)
* Can be indexed with negative numbers or ranges
* Heterogeneous types allowed in the same array
* Can use %w{str1 str2} for string array creation

```ruby
  her_arr[1, "two", :three] # heterogeneous types
  puts her_arr[1] # => two (array indices start at 0)

  arr_words = %w{ what a great day today!}
  puts arr_words[-2] # => day
  puts "#{arr_words.first} - # {arr_words.last}" # => what - today!
  p arr_words[-3, 2] # => ["great", "day"] (go back 3 and take 2)

  # (Range type covered later...)
  p arr_words[2..4] # => ['great', "day", "today"]

  # Make a String out of array elements separated by ','
  puts arr_words.join(',') # => what, a, great, day, today!

```

* Modifying arrays
 * Append: push or <<
 * Remove: pop or shift
 * Set: [] = (method) 

* Randomly pull elements out with sample
* Sort or reverse with sort! and reverse!

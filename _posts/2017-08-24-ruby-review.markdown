---
layout: page
title:  "Ruby Review - 1"
date:   2017-08-24 12:00:40 +0800
categories: ruby
---

Web stuffs are not diffcult to learn, but they are easy to forget if we do not use them for a long time. To get them back, I would like to write a post to review them. I am going to list some basics and important stuffs in the post. Today's topic is ruby. This topic will last for a few days, so I would like to name it _Ruby Review - 1_.

### Ruby basics
1. Ruby is 
* Dynamic language
* object oriented (object processed, almost everything is an object)
* terse at times, but extremely readable
* influence by Perl, Smalltalk, Eiffel, and Lisp

2. 2 space indentation for each nested level is encouraged.(not required, unlike python)
3. ```#``` is used for comments
4. everything is evaluated
```ruby 
	puts 5	# print out 5
	3     # print out 3
```

5. puts - standard ruby method to print out strings to the console (as in put string)
          Adds a new line after the printed string
          Similar to System.out.println() in Java
     
6. p - print out internal representation of an object
          debug style output  
```ruby
    p "Got it" # => Got it 
```

7. Naming conventions
* variables: lower case or snake_case if multiple words 
* constants: ether ALL_CAPS or FirstCaps
* class (and Modules): CamelCase

8. Drop the semicolons
          leave semicolons off at the end of the line
          can cram several statements with a semicolon in between (usually highly discouraged)

***

### Flow of Control
1. Flow of Control:  if/elseif/else       case      until/unless      while/for             
   * no parentheses or curly braces
     use end to close flow control block
   * unless
```ruby
	a= 5
	unless a ==6
		puts "a is not 6"
	end
	# => a is not 6 
```  
   * while, until 
```ruby 
	a = 10
	while a > 9
		puts a
		a -= 1
    end
	# => 10

	a = 9
	until a >= 10
 		puts a
		a += 1
		end
	# => 9  
```


2. Flow Of Control: Modifier Form
   * if, unless, while, until - on the same line as the statement	 
```ruby
	# if modifier form
	a = 5
	b = 0
	puts "One liner" is a == 5 and b == 0
	# => One liner

	#while modifier form
	times_2 = 2
	times_2 *=2 while times_2 < 100
	puts times_2 
	# => 128 
```


3. True/False
   * _false_ and _nil_ objects are false
   * Everything else is true
```ruby
	puts "0 is true" if 0
	puts "false is true" if "false"
	puts "no way - false is false" if false
	puts "empty string is true" if ""
	puts "nil is true" if "nil"
	puts "no way - nil is false" if nil
```

4. Triple Equal
   * Triple Equal: ===
   * sometimes it's not about being exactly equal 
```ruby
	if /sera/ == "coursera"  # regex
		puts "Triple Equals"
	end
	# => Triple Equals

	if "coursera" == "coursera"
		puts "also works"
	end
	# => also works

	if Integer == 21
		puts "21 is an Integer"
	end
	# => 21
```
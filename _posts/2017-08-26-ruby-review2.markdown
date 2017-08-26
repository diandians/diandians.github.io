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

Implicit
* Use block_given? to see if block was passed in
* Use yield to "call" the block
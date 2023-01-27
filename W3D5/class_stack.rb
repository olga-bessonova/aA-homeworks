class Stack
  attr_reader :array
  def initialize
    # create ivar to store stack here!
    @array = []
  end

  def push(el)
    # adds an element to the stack
    array << el
  end

  def pop
    # removes one element from the stack
    array.pop
  end

  def peek
    # returns, but doesn't remove, the top element in the stack
    array.last
  end
end


class Queue 
  attr_reader :array

  def initialize
    @array = []
  end

  def enqueue(el)
    array << el
  end
  
  def dequeue
    array.shift
  end

  def peek
    array.first
  end
end

class Map
  attr_reader :array

  def initialize
    @array = []
  end

  def get(key)
    array.each do |el|
      return el[1] if el[0] == key
    end
  end

  def set(key, value)
    i = array.index {|el| el[0] == key}
    if i
      array[i][1] = value
    else
      array.push([key,value])
    end
    value
  end

  def delete(key)
    value = get(key)
    array.delete([key,value])
  end

  def show
    puts array
  end

end



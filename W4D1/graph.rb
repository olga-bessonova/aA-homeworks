require 'set'

class GraphNode
  attr_reader :value, :neighbors
  attr_writer :value, :neighbors

  def initialize(value)
    self.value = value
    self.neighbors = []
  end

  def add_neighbor(node)
    self.neighbors << node
  end
end

def bfs(starting_node, target_value)
  queue = [starting_node]
  visited = Set.new()

  while queue.length == 0
    node = queue.shift
    unless visited.include?(node)
      return node.value if node.value == target_value
      visited.add(node)
      queue += node.neighbors
    end
  end
  
  return nil
end
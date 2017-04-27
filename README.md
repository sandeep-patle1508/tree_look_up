# TreeLookup
Search for a number and result the path, by using  TreeLookup API and a breadth-first search. We are using TreeLookup API to get children for a node by passing path of this node.

BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) and traverse the graph layer wise thus exploring the neighbour nodes (nodes which are directly connected to source node). You must then move towards the next-level neighbour nodes.

## Getting Started

To begin using this application:
* Unzip the folder and open index.html into browser.
* Enter a number which you want to search into input field. Validation is active here for presence of number value.
* Hit enter or click on 'search' button to get the result.
* Result will get displayed into a table, first column will be the number and second column will be the path.
* If number not found then it will display a message 'Sorry, number not found in tree.'

## Development tool and dependencies

* Using Bootstrap v3.3.7 (http://getbootstrap.com)
* jQuery v1.11.1
* ES6 specification

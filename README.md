# TreeLookup
Search for a number and result the path, by using  TreeLookup API and a breadth-first search. We are using TreeLookup API to get children for a node by passing path of this node.

BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) and traverse the graph layer wise thus exploring the neighbour nodes (nodes which are directly connected to source node). You must then move towards the next-level neighbour nodes.
# Requirements
A SPA with a search box and a search result area below it. The search result area should be populated with the path to the target number using the TreeLookup API and a breadth-first search.

#TreeLookup API Documentation
An instance of TreeLookup can be used to fetch the child nodes of the node at a particular path. It performs this lookup asynchronously and exposes the functionality through 2 similar methods.
getChildrenAsCallback(path, cb)

path type: String The path to the node to fetch.
cb type: Function The function to be called after the lookup is completed.
The callback should accept err type: Error and nodes type: Array as parameters.
getChildrenAsPromise(path)

path type: String The path to the node to fetch.
The returned Promise should resolve with a nodes type: Array parameter and reject with an err type: Error parameter.
Example
var lookup = new TreeLookup();
lookup.getChildrenAsCallback('/', function (err, nodesFromCb) {
    lookup.getChildrenAsPromise('/' + nodesFromCb[0])
        .then(function (nodesFromPromise) {
            console.log(nodesFromPromise);
        });
});

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

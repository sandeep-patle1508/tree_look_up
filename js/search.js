(function(){
  'use strict';
  // Search the number by using BFS
  // Using TreeLookup API to get children for a node
  var searchNode = function (targetNode) {
    var lookup = new TreeLookup();
    var output = 'root';
    var unvisitedNodeQueue = new Queue();
    var stopExecution  = false;

    unvisitedNodeQueue.enqueue('/:/');

    var displayThePath =  function (resultValue) {
      $('.js_node_value').html(targetNode);
      if (resultValue === 'not_found') {
        $('.js_node_path').html('Sorry, number not found in tree.').removeClass('alert-success').addClass('alert-danger');
      } else {
        $('.js_node_path').html(resultValue).removeClass('alert-danger').addClass('alert-success');
      }
    };

    // Recursive function to search target in children of head node(Queue)
    var queueLookup = function () {
      var curr = unvisitedNodeQueue.head;
      if (curr) {
        let [nodeValue, nodePath] = curr.data.split(':');
        lookup.getChildrenAsCallback(nodePath, function (err, nodesFromCb) {

          for(let node of nodesFromCb) {
            if (targetNode === node) {
              output = output + ' -> ' + node;
              stopExecution = true;
              displayThePath(output);
              break;
            } else {
              let nodeValuePath = '';
                if (nodePath === '/') {
                 nodeValuePath = node + ':' + '/' + node;
                } else {
                 nodeValuePath = node + ':' + nodePath + '/' + node;
                }
                unvisitedNodeQueue.enqueue(nodeValuePath);
                output = output + ' -> ' + node;
            }
          }
          unvisitedNodeQueue.dequeue();
          if (stopExecution === false) {
            queueLookup();
          }
        });
      } else {
        displayThePath('not_found');
      }
    };
    queueLookup();
  };

  $( document ).ready(function() {
    // Show the validation error
    var showErrorMsg =  function (element) {
      element.parent().addClass('has-error has-danger');
      element.parent().parent().find('.js_error_field').show();
    };

    // Hide the validation error
    var hideErrorMsg =  function (element) {
      element.parent().removeClass('has-error has-danger');
      element.parent().parent().find('.js_error_field').hide();
    };

    // Validate and submit the search form
    $('.js_search_btn').on('click', function () {
      var searchField = $('.js_search_field');
      if (searchField.val().trim() != '') {
        hideErrorMsg(searchField);
        searchNode(searchField.val());
      } else {
        showErrorMsg(searchField);
      }
    });
  });

})();

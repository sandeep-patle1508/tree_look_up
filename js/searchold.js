(function(){
  'use strict';


var searchNode = function (targetNode) {
  var lookup = new TreeLookup();
  var output = '';
  var unvisitedNodeQueue = new Queue();
  var nodePathQueue = new Queue();
  unvisitedNodeQueue.enqueue('/:/');
  var stopExecution  = false;
  
  var queueLookup = function () {
    var curr = unvisitedNodeQueue.head;
    var queueLen = unvisitedNodeQueue.length();

      for (let i=0; i < queueLen; i++) {
          
          //console.log(curr.data);
          
          let [nodeValue, nodePath] = curr.data.split(':');

          //console.log(nodeValue + 'nodevalue');

          //console.log(nodePath + ' nodepath');

          console.log("loop breeak")

          if ( nodeValue === targetNode) {
            console.log("++++++++++++++++++++++++++");
            console.log(output);
            console.log("++++++++++++++++++++++++++");
            stopExecution = true;
            return;
            break;
          } else {

            if (stopExecution === false) {
              output = output + nodeValue + '/';
            }

            lookup.getChildrenAsCallback(nodePath, function (err, nodesFromCb) {


              console.log(nodePath);

              console.log(nodesFromCb);

              if (stopExecution === false) {
                for(let node of nodesFromCb) {
                  //console.log(node + ' push');
                  let nodeValuePath = '';
                  if (nodePath === '/') {
                    nodeValuePath = node + ':' + '/' + node; 
                  } else {
                    nodeValuePath = node + ':' + nodePath + '/' + node; 
                  }
                  unvisitedNodeQueue.enqueue(nodeValuePath);
                }

                unvisitedNodeQueue.dequeue();

                
              }
            });
            
          }
          curr = curr.next;
      }
      console.log(stopExecution);
      if (stopExecution === false) {
        //queueLookup();
        stopExecution = true;
      }
      //return output;
  };

  return queueLookup();

  // lookup.getChildrenAsCallback('/', function (err, nodesFromCb) {

  //     for(var node of nodesFromCb) {
  //       var nodeValuePath = node + ':/' + node; 
  //       unvisitedNodeQueue.enqueue(nodeValuePath);
  //     }

      

  //     // console.log("++++++++++++++++++++++++++++++++++++++")
  //     // unvisitedNodeQueue.print();
  //     // console.log("++++++++++++++++++++++++++++++++++++++")
  //     // // while (curr) {
  //     //   console.log(curr.data);

  //     //   if ( curr.data == '17') {
  //     //     // for(n of ['21', '22']) {
  //     //     //   unvisitedNodeQueue.enqueue(node);
  //     //     // }
  //     //     console.log("tete")
  //     //   }

  //     //   curr = curr.next;
  //     // }
  // });
  

};


$( document ).ready(function() {
  var showErrorMsg =  function (element) {
    element.parent().addClass('has-error has-danger');
    element.parent().parent().find('.js_error_field').show();
  };

  var hideErrorMsg =  function (element) {
    element.parent().removeClass('has-error has-danger');
    element.parent().parent().find('.js_error_field').hide();
  };

  $('.js_search_btn').on('click', function () {
    var searchField = $('.js_search_field');
    if (searchField.val().trim() != '') {
      hideErrorMsg(searchField);
      var result = searchNode(searchField.val());
      console.log("final = "+ result);
    } else {
      showErrorMsg(searchField);
    }
  });


});

})();




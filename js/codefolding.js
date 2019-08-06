window.initializeCodeFolding = function(show) {

  // index for unique code element ids
  var currentIndex = 1;

  // select all code blocks
  var codeBlocks = $('pre.sourceCode, pre.r, pre.python, pre.bash, pre.sql, pre.cpp, pre.stan');
  codeBlocks.each(function() {

    if (!this.classList.contains("collapsible")) 
      return;

    $(this).parent(".sourceCode").addClass('noscroll-x');
    
    // create a collapsable div to wrap the code in
    var div = $('<div class="collapse"></div>');
    var id = 'rcode-643E0F36' + currentIndex++;
    div.attr('id', id);
    $(this).before(div);
    $(this).detach().appendTo(div);

    // add a show code button right above
    var buttonIcon = $('<span class="fa fa-caret-right"></span>');
    var button = $('<button type="button" class="btn btn-info"> Show</button>');
    button
      .prepend(buttonIcon)
      .attr('data-toggle', 'collapse')
      .attr('data-target', '#' + id)
      .attr('aria-controls', id);

    var buttonRow = $('<div class="row"></div>');
    var buttonCol = $('<div class="col-sm-12"></div>');

    buttonCol.append(button);
    buttonRow.append(buttonCol);
    div.before(buttonRow);

    // update state of button on show/hide
    div.on('hidden.bs.collapse', function () {
      button
        .text(" Show")
        .prepend(buttonIcon);
      buttonIcon
        .removeClass('fa-caret-down')
        .addClass('fa-caret-right');
    });
    
    div.on('show.bs.collapse', function () {
      button
        .text(" Hide")
        .prepend(buttonIcon);
      buttonIcon
        .removeClass('fa-caret-right')
        .addClass('fa-caret-down');
    });
  });
};

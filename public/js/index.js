function Folder(data) {
    this.title = ko.observable(data.title);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.folders = ko.observableArray([]);

    // Operators
    self.addFolder = function() {
        self.folders.push(new Folder({ title: this.newFolderText() }));
        self.newFolderText("");
    };
}

ko.applyBindings(new TaskListViewModel());

$(function(){
  var viewModel = {};
  viewModel.fileData = ko.observable({
    dataURL: ko.observable(),
    // base64String: ko.observable(),
  });
  viewModel.multiFileData = ko.observable({
    dataURLArray: ko.observableArray(),
  });
  viewModel.onClear = function(fileData){
    if(confirm('Are you sure?')){
      fileData.clear && fileData.clear();
    }
  };
  viewModel.debug = function(){
    window.viewModel = viewModel;
    console.log(ko.toJSON(viewModel));
    debugger;
  };
  ko.applyBindings(viewModel);
});

$(function () {
  $('[data-toggle="popover"]').popover('show');
});

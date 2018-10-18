function Folder(data) {
    this.title = ko.observable(data.title);
}

function AppViewModel() {
    var self = this;
    self.folders = ko.observableArray([]);
    self.newFolderText = ko.observable();

    self.addFolder = function() {
        self.folders.push(new Folder({
            title: this.newFolderText()
        }));
        self.newFolderText("");
    };

    // self.save = function() {
    //     $.ajax("/tasks", {
    //        data: ko.toJSON({ tasks: self.tasks }),
    //        type: "post", contentType: "application/json",
    //        success: function(result) { alert(result) }
    //    });
    // };
    //
    // $.getJSON("/folder", function(allData) {
    //     var mappedTasks = $.map(allData, function(item) { return new Folder(item) });
    //     self.tasks(mappedTasks);
    // });

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

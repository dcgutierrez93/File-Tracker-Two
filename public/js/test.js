function ItemViewModel() {
    var self = this;
    self.id = ko.observable();
    self.title = ko.observable();
}

var viewModel = new ItemViewModel();

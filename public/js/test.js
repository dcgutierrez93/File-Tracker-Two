var SimpleListModel = function(items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function() {
        if (this.itemToAdd() != "") {
            // Adds the item
            this.items.push(this.itemToAdd());
            // Clear items after add
            this.itemToAdd("");  observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
};

ko.applyBindings(new SimpleListModel());

function TodoService() {
    this.todos = ["task 1", "task 2"];
}
TodoService.prototype.getAll = function () {
    return this.todos;
};
let service = new TodoService();
console.log(service.getAll());
//# sourceMappingURL=classes.js.map
let sayHiMixin = {
    __proto__: sayMixin,
    say() {
      return super.say(`${this.name}`); 
    },
};
function setPrototype() {
    Object.assign(User.prototype, sayHiMixin);
}

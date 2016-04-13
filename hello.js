/**
 * Created by dinghanyu on 4/10/16.
 */
function Hello() {
var name;
this.setName = function (thisName) {
    name = thisName;
};
this.sayHello = function () {
    console.log(name);
};
}

function HelloTest() {
    this.test = function () {
        console.log('for a test');
    }
}

module.exports = Hello;
//module.exports = HelloTest; 只能有一个exports对象,这种写法相当于一个模块一个对象.
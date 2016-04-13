/**
 * Created by dinghanyu on 4/10/16.
 */
var ex = require('./exports');
ex.test();
ex.world();
var Hello = require('./hello');
// hello = new Hello();
hello = new Hello();
hello.setName("123");
hello.sayHello();

// var HelloTest = require('./hello');
// test = new HelloTest();
// test.test();
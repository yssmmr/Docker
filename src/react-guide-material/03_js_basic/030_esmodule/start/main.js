import funcB, { hello, User } from "./module.js"
/* defaltをimportする場合には、｛｝がいらない */

hello();
const user = new User("Tom");
user.hello();
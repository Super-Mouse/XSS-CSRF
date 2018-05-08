import 'lodash'
import $ from "jquery";

export default {
    sayName(name) {
        $('#btn').addClass(name);
    },
    sayColor(color) {
        document.write('My name is' + color)
    }
}
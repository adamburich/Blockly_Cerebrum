/**
 * 
 * @param {*} generator 
 */

export function bindGameManagerCalls(generator) {
    generator['create'] = function (block) {
        var prefabName = generator.valueToCode(block, 'prefabName', Blockly.JavaScript.ORDER_ATOMIC).replaceAll("'", "");
        var objectName = generator.valueToCode(block, 'objectName', Blockly.JavaScript.ORDER_ATOMIC).replaceAll("'", "");
        return "Create " + prefabName + " " + objectName;
    }

    generator['waitfor'] = function (block) {

        return "waitfor";
    }

    generator['prompt'] = function (block) {
        var arg = generator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
        arg = arg.replace("(", "");
        arg = arg.replace(")", "");

        return "prompt " + arg;
    }

    generator['speaker1'] = function (block) {
        var arg = generator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

        return "speaker1 " + arg;
    }

    generator['speaker2'] = function (block) {
        var arg = generator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

        return "speaker2 " + arg;
    }

    generator['gameDelay'] = function (block) {
        var arg = generator.valueToCode(block, "timeInSeconds", Blockly.JavaScript.ORDER_ATOMIC);

        return "game.delay " + arg;
    }

    generator['debugCanvas_on'] = function (block) {

        return "debugcanvas.on";
    }

    generator['debugCanvas_off'] = function (block) {

        return "debugcanvas.off";
    }

    generator['debugDelay'] = function (block) {

        return "debug.delay";
    }

    generator['debugCanvas'] = function (block) {

        return "debugCanvas";
    }

    generator['debug'] = function (block) {
        var arg = generator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

        return "debug " + arg;
    }

    generator['destroy'] = function (block) {
        var arg = generator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

        return "destroy " + arg;
    }

    generator['turnoff'] = function (block) {
        var arg = generator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

        return "turnoff " + arg;
    }

    generator['turnon'] = function (block) {
        var arg = generator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

        return "turnon " + arg;
    }

    generator['is_on'] = function (block) {
        var arg = generator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

        return "ison " + arg;
    }

    generator['is_off'] = function (block) {
        var arg = generator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

        return "isoff " + arg;
    }

    generator['pause'] = function (block) {
        var arg = generator.valueToCode(block, "timeInSeconds", Blockly.JavaScript.ORDER_ATOMIC);

        return "pause " + arg;
    }

    generator['wait'] = function (block) {
        var arg = generator.valueToCode(block, "timeInSeconds", Blockly.JavaScript.ORDER_ATOMIC);

        return "Wait " + arg;
    }

    generator['gamespeed'] = function (block) {
        var arg = generator.valueToCode(block, "gamespeed_int", Blockly.JavaScript.ORDER_ATOMIC);

        return "GameSpeed " + arg;
    }
}
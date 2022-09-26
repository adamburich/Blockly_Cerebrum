/**
 * 
 * @param {*} generator 
 */

export function bindHelpers(generator) {
    generator['object_calling'] = function (block) {
        var object = block.getField("Object_Variable")
        var object_string = "$" + object.selectedOption_[0]
        var call_eval = " " + generator.statementToCode(block, "Params").trimStart();
        call_eval = call_eval.replace("  ", " ");
        var code = object_string + call_eval;
        return code;
    };

    generator['lists_create_with'] = function (block) {
        // Create a list with any number of elements of any type.
        const elements = new Array(block.itemCount_);
        for (let i = 0; i < block.itemCount_; i++) {
            elements[i] =
                generator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE) ||
                'null';
        }
        const code = '[' + elements.join(', ') + ']';
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };
    generator['variables_set'] = function variables_set(block) {

        // Variable setter.
        const argument0 = generator.valueToCode(
            block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
        const varName = block.inputList[0].fieldRow[1].selectedOption_[0];
        return "$" + varName + ' = ' + argument0 + '';
    }

    generator['variables_get'] = function (block) {
        //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
        var code = "$" + block.inputList[0].fieldRow[0].selectedOption_[0];
        return [code, Blockly.JavaScript.ORDER_ATOMIC]
    }

    generator['math_change'] = function (block) {
        //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
        return "";
    }

    generator['text'] = function (block) {
        const code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

}
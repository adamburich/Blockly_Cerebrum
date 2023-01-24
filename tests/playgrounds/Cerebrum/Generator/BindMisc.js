/**
 * 
 * @param {*} generator 
 */

export function bindMisc(generator) {
    generator['variables_set_dynamic_double'] = function (block) {
        var VAL = generator.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE);
        var var_name = block.inputList[0].fieldRow[1].selectedOption_[0];
        var code = "$" + var_name + " =$ " + VAL;

        return code;
    };
    generator['expression_arithmetic'] = function (block) {


        // Basic arithmetic operators, and power.
        const OPERATORS = {
            'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
            'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
            'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
            'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
            'POWER': [null, Blockly.JavaScript.ORDER_NONE],  // Handle power separately.
        };
        const tuple = OPERATORS[block.getFieldValue('OP')];
        const operator = tuple[0];
        const order = tuple[1];
        const argument0 = generator.valueToCode(block, 'A', order) || '0';
        const argument1 = generator.valueToCode(block, 'B', order) || '0';

        let code;
        // Power in JavaScript requires a special case since it has no operator.
        if (!operator) {
            code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
            return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }
        code = argument0 + operator + argument1;
        code = code.replace("\n", "")
        return [code, Blockly.JavaScript.ORDER_NONE];
    };



    generator['logic_compare'] = function (block) {
        // Comparison operator.
        const OPERATORS =
            { 'EQ': '==', 'NEQ': '!=', 'LT': '<', 'LTE': '<=', 'GT': '>', 'GTE': '>=' };
        let operator = OPERATORS[block.getFieldValue('OP')];
        const order = (operator === '==' || operator === '!=') ?
            Blockly.JavaScript.ORDER_EQUALITY :
            Blockly.JavaScript.ORDER_RELATIONAL;
        const argument0 = generator.valueToCode(block, 'A', order) || '0';
        const argument1 = generator.valueToCode(block, 'B', order) || '0';
        if(operator == "=="){
            operator = "=";
        }
        const code = argument0 + ' ' + operator + ' ' + argument1;
        return [code, order];
    };

    generator['logic_operation'] = function (block) {
        // Operations 'and', 'or'.
        const operator = (block.getFieldValue('OP') === 'AND') ? '&&' : '||';
        const order = (operator === '&&') ? Blockly.JavaScript.ORDER_LOGICAL_AND :
            Blockly.JavaScript.ORDER_LOGICAL_OR;
        let argument0 = generator.valueToCode(block, 'A', order);
        let argument1 = generator.valueToCode(block, 'B', order);
        if (!argument0 && !argument1) {
            // If there are no arguments, then the return value is false.
            argument0 = 'false';
            argument1 = 'false';
        } else {
            // Single missing arguments have no effect on the return value.
            const defaultArgument = (operator === '&&') ? 'true' : 'false';
            if (!argument0) {
                argument0 = defaultArgument;
            }
            if (!argument1) {
                argument1 = defaultArgument;
            }
        }
        const code = argument0 + ' ' + operator + ' ' + argument1;
        return [code, order];
    };

    generator['logic_negate'] = function (block) {
        // Negation.
        const order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
        const argument0 = generator.valueToCode(block, 'BOOL', order) || 'true';
        const code = '!' + argument0;
        return [code, order];
    };

    generator['logic_boolean'] = function (block) {
        // Boolean values true and false.
        const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    generator['logic_null'] = function (block) {
        // Null data type.
        return ['null', Blockly.JavaScript.ORDER_ATOMIC];
    };

    generator['logic_ternary'] = function (block) {
        // Ternary operator.
        const value_if =
            generator.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_CONDITIONAL) ||
            'false';
        const value_then =
            generator.valueToCode(block, 'THEN', Blockly.JavaScript.ORDER_CONDITIONAL) ||
            'null';
        const value_else =
            generator.valueToCode(block, 'ELSE', Blockly.JavaScript.ORDER_CONDITIONAL) ||
            'null';
        const code = value_if + ' ? ' + value_then + ' : ' + value_else;
        return [code, Blockly.JavaScript.ORDER_CONDITIONAL];
    };

    generator['text_multiline'] = function (block) {
        let text = block.getFieldValue("TEXT");
        return [text, Blockly.JavaScript.ORDER_NONE];
    }
}
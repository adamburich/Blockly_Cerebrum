/**
 * 
 * @param {*} generator 
 */

export function bindControlFlowCommand(generator) {
    generator['procedures_defreturn'] = function (block) {
        var name = block.getFieldValue("NAME");
        //console.log(block)
        var body = generator.statementToCode(block, "STACK");
        let bodArray = body.split("\n");
        for(let i = 0; i < bodArray.length; i++){
            bodArray[i] = bodArray[i].trimStart(" ");
        }
        body = bodArray.join("\n")
        var returnVal = generator.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_NONE)
        return body;
    }

    generator['procedures_defnoreturn'] = function (block) {
        var name = block.getFieldValue("NAME");
        var body = generator.statementToCode(block, "STACK");
        let bodArray = body.split("\n");
        for(let i = 0; i < bodArray.length; i++){
            bodArray[i] = bodArray[i].trimStart(" ");
        }
        body = bodArray.join("\n")

        return body;
    }

    generator['procedures_callnoreturn'] = function (block) {
        const funcName = block.getFieldValue('NAME');
        const args = [];
        const variables = block.getVars();
        for (let i = 0; i < variables.length; i++) {
          args[i] = generator.valueToCode(block, 'ARG' + i, Blockly.JavaScript.ORDER_NONE) ||
              'null';
        }
        const code = 'do ' + funcName + ' ' + args.join('  ') + ' ';
        return code;
    }
    
    generator['procedures_callreturn'] = function(block) {
        // Call a procedure with a return value.
        const funcName = block.getFieldValue('NAME');
        const args = [];
        const variables = block.getVars();
        for (let i = 0; i < variables.length; i++) {
          args[i] = generator.valueToCode(block, 'ARG' + i, Blockly.JavaScript.ORDER_NONE) ||
              'null';
        }
        const code = 'do ' + funcName + ' ' + args.join('  ') + ' ';
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    generator['do_return'] = function (block) {
        var tt_block = block.childBlocks_[0];
        var tt = "";
        var name = "";
        if (tt_block != null) {
            if (tt_block.type == "text") {
                name = generator.valueToCode(block, "fname", Blockly.JavaScript.ORDER_NONE);
            }
            else {
                tt = tt_block.tooltip;
                name = tt.substring(tt.indexOf('"') + 1, tt.lastIndexOf('"'))
                name = "'" + name + "'";
            }
        }
        var fname = name;
        var paramblock = null;
        if (block.nextConnection.targetConnection != null) {
            paramblock = block.nextConnection.targetConnection.sourceBlock_;
        }
        var params = "";
        if (paramblock != null) {
            params = generator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
            while (paramblock != null && paramblock.nextConnection.targetConnection != null) {
                paramblock = paramblock.nextConnection.targetConnection.sourceBlock_;
                params += " " + generator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);

            }
            params = params.replace("\n", " ");
        }
        // TODO: Assemble JavaScript into code variable.
        var code = "Do " + fname.trimStart() + " " + params;
        return code;
    };

    generator['do_noreturn'] = function (block) {
        //console.log(block);
        var tt_block = block.childBlocks_[0];
        var tt = "";
        var name = "";
        if (tt_block != null) {
            if (tt_block.type == "text") {
                name = tt_block.getFieldValue("NAME");
            }
            else {
                tt = tt_block.tooltip;
                name = tt.substring(tt.indexOf('"') + 1, tt.lastIndexOf('"'))
            }
        }
        var fname = "'" + name + "'";
        var paramblock = null;
        if (block.nextConnection.targetConnection != null) {
            paramblock = block.nextConnection.targetConnection.sourceBlock_;
        }
        var params = "";
        if (paramblock != null) {
            params = generator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
            while (paramblock != null && paramblock.nextConnection.targetConnection != null) {
                paramblock = paramblock.nextConnection.targetConnection.sourceBlock_;
                params += " " + generator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);

            }
            params = params.replace("\n", " ");
        }
        var code = "Do " + fname.trimStart() + " " + params;
        return code;
    };

    generator['gotolabelreturn'] = function (block) {
        var label = block.getField("label").selectedOption_[0];
        var code = "Goto '" + label + "'\n";
        return code;
    };

    generator['gotolabelnoreturn'] = function (block) {
        //console.log(block);
        var tt_block = block.childBlocks_[0];
        var tt = "";
        var name = "";
        if (tt_block != null) {
            tt = tt_block.tooltip;
            name = tt.substring(tt.indexOf('"') + 1, tt.lastIndexOf('"'))
        }
        //var label = block.childBlocks_[0].tooltip;
        var code = "Goto '" + name + "'\n";
        //var code = label;
        return code;
    };


    generator['goandreturn'] = function (block) {
        var fileName = block.getFieldValue("file_todo");
        var functionName = block.getFieldValue("fname");
        var code = "$" + functionName + " = '" + fileName + "'\n";
        code += "Do $" + functionName + "\n";
        return code;
    };

    generator['controls_if'] = function (block) {
        //console.log(block);
        var cond = generator.valueToCode(block, "IF0", Blockly.JavaScript.ORDER_CONDITIONAL);
        var body = generator.statementToCode(block, "DO0");
        var code = "If\n  " + cond + "\n" + "Then\n" + body + "\n" + "Endif";
        return code;
    };

    generator['controls_ifelse'] = function (block) {
        //console.log(block);
        var cond = generator.valueToCode(block, "IF0", Blockly.JavaScript.ORDER_CONDITIONAL);
        var body = generator.statementToCode(block, "DO0");
        var elseBody = generator.statementToCode(block, "ELSE");
        var code = "If\n  " + cond + "\n" + "Then\n" + body + "\n" + "Else\n" + elseBody + "\n" + "Endif";
        return code;
    };
}
/**
 * 
 * @param {*} generator 
 */

export function bindControlFlowCommand(generator) {
    generator['procedures_defreturn'] = function (block) {
        var name = block.getFieldValue("NAME");
        //console.log(block)
        var body = generator.statementToCode(block, "STACK");
        // let bodArray = body.split("\n");
        // for(let i = 0; i < bodArray.length; i++){
        //     bodArray[i] = bodArray[i].trimStart(" ");
        // }
        // body = bodArray.join("\n")
        var returnVal = generator.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_NONE)
        
        return " #return_procedure:" + name + "\n" + body + " #end:"+name;
    }

    generator['procedures_defnoreturn'] = function (block) {
        var name = block.getFieldValue("NAME");
        var body = generator.statementToCode(block, "STACK");
        // let bodArray = body.split("\n");
        // for(let i = 0; i < bodArray.length; i++){
        //     bodArray[i] = bodArray[i].trimStart(" ");
        // }
        // body = bodArray.join("\n")

        return " #returnless_procedure:" + name + "\n" + body + " #end:"+name;
    }

    generator['procedures_callnoreturn'] = function (block) {
        const funcName = block.getFieldValue('NAME');
        const args = [];
        const variables = block.getVars();
        for (let i = 0; i < variables.length; i++) {
          args[i] = generator.valueToCode(block, 'ARG' + i, Blockly.JavaScript.ORDER_NONE) ||
              'null';
        }
        const code = 'Do ' + "'" + funcName + "' " + args.join('  ') + ' ';
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
        const code = 'Do ' + "'" + funcName + "' " + args.join('  ') + ' ';
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };

    generator['do_return'] = function (block) {
        // var tt_block = block.childBlocks_[0];
        // if(tt_block != undefined){
        //     // Call a procedure with a return value.
        //     const funcName = tt_block.getFieldValue('NAME');
        //     const args = [];
        //     const variables = tt_block.getVars();
        //     for (let i = 0; i < variables.length; i++) {
        //       args[i] = generator.valueToCode(tt_block, 'ARG' + i, Blockly.JavaScript.ORDER_NONE) ||
        //           'null';
        //     }
        //     const code = 'Do ' + "'" + funcName + "' " + args.join('  ') + ' ';
        //     return code;
        // }
        // else return "Do "
        let call = block.childBlocks_[0].getFieldValue("TEXT");
        console.log(block.childBlocks_, call);
        return ["Do " + call, Blockly.JavaScript.ORDER_NONE]
    };

    generator['do_noreturn'] = function (block) {
        // //console.log(block);
        // var tt_block = block.childBlocks_[0];
        // if(tt_block != undefined){
        //     // Call a procedure with a return value.
        //     const funcName = tt_block.getFieldValue('NAME');
        //     const args = [];
        //     const variables = tt_block.getVars();
        //     for (let i = 0; i < variables.length; i++) {
        //       args[i] = generator.valueToCode(tt_block, 'ARG' + i, Blockly.JavaScript.ORDER_NONE) ||
        //           'null';
        //     }
        //     const code = 'Do ' + "'" + funcName + "' " + args.join('  ') + ' ';
        //     return code;
        // }
        // else return "Do "
        return generator.statementToCode(block, "fname")
    };

    generator['gotolabelreturn'] = function (block) {
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
        return code;
    };

    generator['goto'] = function (block) {
        //console.log(block);
        // var tt_block = block.childBlocks_[0];
        // var tt = "";
        // var name = "";
        // if (tt_block != null) {
        //     tt = tt_block.tooltip;
        //     name = tt.substring(tt.indexOf('"') + 1, tt.lastIndexOf('"'))
        // }
        //var label = block.childBlocks_[0].tooltip;
        let call = block.childBlocks_[0].getFieldValue("TEXT");
        var code = "Goto " + call;
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
        cond = cond.replace("(", "");
        cond = cond.replace(")", "");
        console.log(cond);
        var body = generator.statementToCode(block, "DO0");
        var code = "If\n" + "\t" + cond + "\n" + "Then\n" + "\t" + body.trimStart() + "\n" + "Endif";
        return code;
    };

    generator['controls_ifelse'] = function (block) {
        //console.log(block);
        var cond = generator.valueToCode(block, "IF0", Blockly.JavaScript.ORDER_CONDITIONAL);
        var body = generator.statementToCode(block, "DO0");
        var elseBody = generator.statementToCode(block, "ELSE");
        var code = "If\n  " + "\t" + cond + "\n" + "Then\n" + "\t" + body.trimStart() + "\n" + "Else\n" + "\t" + elseBody.trimStart() + "\n" + "Endif";
        return code;
    };

    generator['label'] = function (block) {
        var name = "Label " + generator.valueToCode(block, "label_name", Blockly.JavaScript.ORDER_NONE)
        var body = generator.statementToCode(block, "label_body");
        return name + "\n" + body;
    }
}
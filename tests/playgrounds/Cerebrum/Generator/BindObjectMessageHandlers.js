/**
 * 
 * @param {*} generator 
 */

export function bindObjectMessageHandlersToGenerator(generator) {
    generator['follow'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = statements_params;
        console.log(code);
        return "follow" + code;
    };

    generator['switchtoscene'] = function (block) {
        var value_scenename = generator.valueToCode(block, 'scene', Blockly.JavaScript.ORDER_ATOMIC);
        var code = "switchtoscene " + value_scenename;

        return code;
    };

    generator['clickable_reset'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'clickable.reset';
        return code;
    };

    generator['reset'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'reset';
        return code;
    };

    generator['localposition'] = function (block) {
        var xpos = generator.valueToCode(block, 'xpos', Blockly.JavaScript.ORDER_ATOMIC);
        var ypos = generator.valueToCode(block, 'ypos', Blockly.JavaScript.ORDER_ATOMIC);
        var zpos = generator.valueToCode(block, 'zpos', Blockly.JavaScript.ORDER_ATOMIC);
        var code = ' localposition ' + xpos + ',' + ypos + ',' + zpos;
        return code;
    };

    generator['clickable_ispressed'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'clickable.resetpressed';
        return code;
    };

    generator['clickable_resetpressed'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'clickable.ispressed';
        return code;
    };

    generator['clickable'] = function (block) {
        var value_clickable_bool = generator.valueToCode(block, 'clickable_bool', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = "clickable " + value_clickable_bool;
        return code;
    };

    generator['playsound'] = function (block) {
        var value_interval = generator.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'playsound ' + value_interval;
        return code;
    };

    generator['stopsound'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'stopsound';
        return code;
    };

    generator['play'] = function (block) {
        var value_triggername = generator.statementToCode(block, 'triggername', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'play ' + value_triggername;
        return code;
    };

    generator['jump'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'jump ' + statements_params;
        return code;
    };

    generator['says'] = function (block) {
        var value_saying = generator.valueToCode(block, 'saying', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'says ' + value_saying;
        return code;
    };

    generator['on'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'on ' + statements_params;
        return code;
    };

    generator['off'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'off ' + statements_params;
        return code;
    };

    generator['delete'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'delete ' + statements_params;
        return code;
    };

    generator['exists'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'exists ' + statements_params;
        return code;
    };

    generator['localrotatetox'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localrotatetox ' + statements_params;
        return code;
    };

    generator['localrotatex'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localrotatex ' + statements_params;
        return code;
    };

    generator['rotatetox'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rotatetox ' + statements_params;
        return code;
    };

    generator['rotatex'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rotatex ' + statements_params;
        return code;
    };

    generator['localmovex'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localmovex ' + statements_params;
        return code;
    };

    generator['movex'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'movex ' + statements_params;
        return code;
    };

    generator['matchrotation'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = "matchrotation " + statements_params;
        return code;
    };

    generator['parentto'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params');
        // TODO: Assemble JavaScript into code variable.
        var code = "parentto " + statements_params;
        return code;
    };

    generator['attachto'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = "attachto " + statements_params;
        return code;
    };

    generator['outline'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = statements_params;
        return code;
    };

    generator['outline_on'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = "outline.on";
        return code;
    };

    generator['outline_off'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'outline.off';
        return code;
    };

    generator['outline_color'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = "outline_color " + statements_params;
        return code;
    };

    generator['outline_check'] = function (block) {
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = statements_params;
        return code;
    };

    /** */
    generator['param'] = function param(block) {
        var value_name = generator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = generator.valueToCode(block, 'param_val', Blockly.JavaScript.ORDER_ATOMIC);
        return code
    };

    generator['math_number'] = function (block) {
        const code = "" + Number(block.getFieldValue('NUM'));
        const order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
            Blockly.JavaScript.ORDER_UNARY_NEGATION;
        return [code, order];
    }

    generator['params'] = function (block) {
        console.log(block)
        var value_name = generator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = generator.valueToCode(block, 'param_val', Blockly.JavaScript.ORDER_ATOMIC);
        return code;
    };

    generator['localrotatetoy'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localrotatetoy ' + statements_params;
        return code;
    };

    generator['localrotatey'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localrotatey ' + statements_params;
        return code;
    };

    generator['rotatetoy'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rotatetoy ' + statements_params;
        return code;
    };

    generator['rotatey'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rotatey ' + statements_params;
        return code;
    };

    generator['localmovey'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localmovey ' + statements_params;
        return code;
    };

    generator['movey'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'movey ' + statements_params;
        return code;
    };

    generator['localrotatetoz'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localrotatetoz ' + statements_params;
        return code;
    };

    generator['localrotatez'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localrotatez ' + statements_params;
        return code;
    };

    generator['rotatetoz'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rotatetoz ' + statements_params;
        return code;
    };

    generator['rotatez'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'rotatez ' + statements_params;
        return code;
    };

    generator['localmovez'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'localmovez' + statements_params;
        return code;
    };

    generator['movez'] = function (block) {
        
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'movez ' + statements_params;
        return code;
    };

    generator['menu_choice'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'Menu.choice';
        return code;
    };

    generator['menu_result'] = function (block) {
        var value_match_string = generator.valueToCode(block, 'match_string', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'Menu.result ' + value_match_string;
        return code;
    };

    generator['menu_done'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'Menu.done';
        return code;
    };

    generator['menu_choices'] = function (block) {
        var value_choice_strings = generator.valueToCode(block, 'choice_strings', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'Menu.choices ' + value_choice_strings;
        return code;
    };

    generator['menu_question'] = function (block) {
        var value_question = generator.valueToCode(block, 'Question', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = 'Menu.question ' + value_question;
        return code;
    };

    generator['menu_on'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = 'Menu.on';
        return code;
    };

    generator['setitemdatetime'] = function (block) {
        var offset = generator.valueToCode(block, "offset", Blockly.JavaScript.ORDER_ATOMIC);
        var format = generator.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC);

        var code = " setItemDateTime " + offset + " " + format;
        //console.log("." + statements_params)
        return code;
    };

    generator['setitemtext'] = function (block) {
        var text = generator.valueToCode(block, "stringexpression", Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = " setItemText " + text.replaceAll("\\'", "");
        //console.log("." + statements_params)
        return code;
    };

    generator['setitemdate'] = function (block) {

        var offset = generator.valueToCode(block, "offset", Blockly.JavaScript.ORDER_ATOMIC);
        var format = generator.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC);

        var code = " setItemDate " + offset + " " + format;
        //console.log("." + statements_params)
        return code;
    };

    generator['setmaterial'] = function (block) {

        var material = generator.statementToCode(block, "material", Blockly.JavaScript.ORDER_ATOMIC);

        var code = " setMaterial " + material;
        //console.log("." + statements_params)
        return code;
    };

    generator['scale'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " scale " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['align'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " align " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['orient'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " orient " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['grab'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " grab " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['release'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " release " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['lookat'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " lookat " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['lookatme'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " lookatme " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['setglobal'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " setglobal " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['getglobal'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " getGlobal " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['setimagecolor'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " setimagecolor " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

// ---------------------------------------------------------------------------
// ---------------------Blocks Added For Demo---------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


    generator['speaker.color'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " speaker.color " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['speaker.object'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " speaker.object " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['changeshader'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " changeshader " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['lookatlegacy'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " lookatlegacy " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['selectable'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " selectable " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['component.off'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " component.off " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['getdate'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " getdate " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['getbone'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " getbone " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['close'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " close " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['component.off'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " component.off " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['component.on'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " component.on " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['component.remove'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " component.remove " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['component.add'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " component.add " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['setglobal'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " setglobal " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['getglobal'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " getglobal " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['moveto'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " moveto " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['starttimer'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " starttimer " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['iscurrent'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " iscurrent " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['write'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " write " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['droop'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " droop " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['setvitals'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " setvitals " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['setblend'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " setblend " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['settimer'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " settimer " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['stoptimer'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " stoptimer " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['endstage'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " endstage " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['closestage'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " closestage " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['setstage'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " setstage " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['pressed'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " pressed " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['headturn'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " headturn " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['taskcompleted'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " taskcompleted " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['numitems'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " numitems " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['scalex'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " scalex " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['scaley'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " scaley " + statements_params;
        //console.log("." + statements_params)
        return code;
    };

    generator['scalez'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var statements_params = generator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
        var code = " scalez " + statements_params;
        //console.log("." + statements_params)
        return code;
    };


}
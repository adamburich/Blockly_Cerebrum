export function bindCleaners(generator) {
    generator.finish = function (code) {

        code = code.replaceAll("TRUE", "true");
        code = code.replaceAll("FALSE", "false");
        code = code.replaceAll("  ", " ");

        return code;

    }

    generator.scrub_ = function (block, code, opt_thisOnly) {
        const lastBlock = block.getParent();
        if (!lastBlock) {
            code = "\n" + code;
        }
        const nextBlock =
            block.nextConnection && block.nextConnection.targetBlock();
        if (nextBlock && !opt_thisOnly) {
            if ((block.type == "param") && (nextBlock.type == "param")) {
                code = code + ' ' + generator.blockToCode(nextBlock);
            }
            else {
                code = code + '\n' + generator.blockToCode(nextBlock);
            }
        }
        //code = code.trimStart("\n");
        return code;
        //return code;
    };
}
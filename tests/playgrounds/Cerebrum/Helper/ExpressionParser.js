import { buildValBlocks } from "./BuildBlocksFromCode.js";
export { buildBlockFromInfix };

// Created an empty array
var stackarr = [];
 
// Variable topp initialized with -1
var topp = -1;

let blocks = {};
let varstack = [];
 
// Push function for pushing
// elements inside stack
function push(e) {
    topp++;
    stackarr[topp] = e;
}
 
// Pop function for returning top element
function popp() {
    if (topp === -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}

function isOp(op) {
    if (op === '+' || op === '-' ||
        op === '^' || op === '*' ||
        op === '/' || op === '(' ||
        op === ')') {
        return true;
    }
    else
        return false;
}
 
function precedence(op) {
    if (op === '@' || op === '(' || op === ')') {
        return 1;
    }
    else if (op === '+' || op === '-') {
        return 2;
    }
    else if (op === '/' || op === '*') {
        return 3;
    }
    else if (op === '^') {
        return 4;
    }
    else
        return -1;
}
 
function InfixtoPostfix(expression) {
 
    // Postfix array created
    var postfix = [];
    var temp = 0;
    push('@');
 
    // Iterate on infix string
    for (var i = 0; i < expression.length; i++) {
        var el = expression[i];
 
        // Checking whether isOp or not
        if (isOp(el)) {
            if (el === ')') {
                while (stackarr[topp] != "(") {
                    postfix[temp++] = popp();
                }
                popp();
            }
 
            // Checking whether el is (  or not
            else if (el === '(') {
                push(el);
            }
 
            // Comparing precedence of el and
            // stackarr[topp]
            else if (precedence(el) > precedence(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedence(el) <=
                    precedence(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = popp();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }
    }
 
    // Adding character until stackarr[topp] is @
    while (stackarr[topp] != '@') {
        postfix[temp++] = popp();
    }
 
    // String to store postfix expression
    var st = "";
    for (var i = 0; i < postfix.length; i++)
        st += postfix[i];
    st = st.replaceAll("+", " +")
    st = st.replaceAll("-", " -")
    st = st.replaceAll("*", " *")
    st = st.replaceAll("/", " /")
    st = st.replaceAll("  ", " ");
    let out = st.split(" ");
    // To print postfix expression in HTML
    return out;
}

function buildExpressionBlockFromPostfix(workspace, blockA, blockB, op){
    if(blockA instanceof Array){
        blockA = blockA[0];
    }
    if(blockB instanceof Array){
        blockB = blockB[0];
    }

    if(op === "+"){
        op = "ADD";
    }
    else if(op === "-"){
        op = "MINUS";
    }
    else if(op === "/"){
        op = "DIVIDE";
    }
    else if(op === "*"){
        op = "MULTIPLY";
    }

    let baseBlock = workspace.newBlock("expression_arithmetic");
    baseBlock.setFieldValue(op, "OP");

    //console.log(baseBlock)

    let root_blockA_conn = baseBlock.inputList[0].connection;
    let blockA_conn = blockA.outputConnection;
    root_blockA_conn.connect(blockA_conn);

    let root_blockB_conn = baseBlock.inputList[1].connection;
    let blockB_conn = blockB.outputConnection;
    root_blockB_conn.connect(blockB_conn);

    baseBlock.setEnabled(true);
    blockA.setEnabled(true);
    blockB.setEnabled(true);
    //valBlock.setEnabled(true);

    baseBlock.initSvg();
    blockA.initSvg();
    blockB.initSvg();

    return baseBlock;
}

function buildBlockFromInfix(workspace, infix){
    let postfix = InfixtoPostfix(infix);
    let blockstack = [];
    let expstack = [];
    console.log(postfix)
    for(let i = 0; i < postfix.length; i++){
        if(!isOp(postfix[i])){
            console.log(postfix[i]);
            // //stack.push(postfix[i]);
            let block = buildValBlocks(workspace, [postfix[i]]);
            // //val to block
            blockstack.push(block);
        }else{
            console.log("IS OP", postfix[i]);
            let right = blockstack.pop();
            if(isOp(right)){
                right = expstack.pop();
                //should be more like left = blocks.pop();
            }
            let left = blockstack.pop();
            if(isOp(left)){
                left = expstack.pop();
                //should be more like left = blocks.pop();
            }
            let op = postfix[i];
            let block = buildExpressionBlockFromPostfix(workspace, left, right, op);
            console.log("POPULATING expstack WITH: ", block)
            expstack.push(block);
            blockstack.push(op);
        }
    }
    console.log(blockstack)
    console.log(expstack)
    return expstack.pop();
}
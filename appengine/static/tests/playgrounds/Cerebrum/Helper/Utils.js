export {connectBlocksAB}

function connectBlocksAB(blockA, blockB){
    let parentConnection = blockA.nextConnection;
    let childConnection = blockB.previousConnection;
    parentConnection.connect(childConnection);
}

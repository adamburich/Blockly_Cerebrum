function readFromS3(key) {
    var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

    s3.getObject({
        Bucket: "sgeditorscenarios",
        Key: key
    }, function(err, data){
        if (err) console.log(err, err.stack);
        else {
            let objectData = data.Body.toString('utf-8');
            console.log(objectData);
        }
    })

    console.log('readFromS3');
}

function writeToS3(key, body) {
    var s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    s3.putObject({
        Bucket: "sgeditorscenarios",
        Key: key,
        Body: body
    }, function(err, data){
        if (err) console.log(err, err.stack); // an error occurred
        else {
            console.log(data);
        }
    });
    console.log('writeToS3');
}

export {readFromS3, writeToS3}
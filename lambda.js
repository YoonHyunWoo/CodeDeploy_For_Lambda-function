'use strict';

const aws = require('aws-sdk');
const codedeploy = new aws.CodeDeploy({
    apiVersion: '2014-10-06'
});

exports.handler = async (event) => {

    var params = {
        deploymentId: event.deploymentId,
        lifecycleEventHookExecutionId: event.lifecycleEventHookExecutionId,
        status: 'Succeeded'
    };

    try {
        await codedeploy.putLifecycleEventHookExecutionStatus(params).promise();
        return "succeced"
    } catch (e) {
        return "error"
    }

};
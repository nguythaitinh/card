const Aws = require('aws-sdk');
const { cloudFrontId } = require('../tf-output.json');

const CallerReference = new Date().getTime().toString();
const cloudfront = new Aws.CloudFront();

const invalidateParams = {
	DistributionId: cloudFrontId.value,
	InvalidationBatch: {
		CallerReference,
		Paths: {
			Quantity: 1,
			Items: ['/*'],
		},
	},
};

cloudfront.createInvalidation(invalidateParams, (err, data) => {
	if (err) console.log(err, err.stack);
	else console.log(data);
});

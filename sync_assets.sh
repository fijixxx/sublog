aws s3 sync s3://$S3_SYNC_BUCKET/text content/text --delete
aws s3 sync s3://$S3_SYNC_BUCKET/public public --delete
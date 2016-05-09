function BucketGenerator() {

  var date = new Date()

  return {
    desc: '',
    title: 'Test Bucket ' + date
  }

}

export default BucketGenerator

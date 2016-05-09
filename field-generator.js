function FieldGenerator() {

  var date = new Date()

  return {
    desc: 'Foo',
    title: 'Test Field' + date
  }

}

export default FieldGenerator

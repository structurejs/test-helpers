function OrganizationGenerator() {

  var date = new Date()

  return {
    desc: '',
    title: 'Test Org ' + date
  }

}

export default OrganizationGenerator

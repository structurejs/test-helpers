function OrganizationGenerator() {

  var date = new Date()

  return {
    date_created: date,
    date_updated: date,
    title: 'Test Org' + date
  }

}

export default OrganizationGenerator

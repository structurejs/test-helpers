class RootModel {

  create(pkg = {}) {
    return Promise.resolve(pkg)
  }

  createReference(pkg = {}, options = {}) {
    return this.create.call(this, pkg, options)
  }

  deleteById(id) {
    return Promise.resolve({
      id,
      deleted: true
    })
  }

  deleteReference(pkg = {}) {
    return Promise.resolve({
      deleted: true
    })
  }

  getAll() {
    return Promise.resolve([])
  }

  getById(id) {
    return Promise.resolve({id})
  }

  updateById(id, pkg = {}) {
    return Promise.resolve(Object.assign(pkg, {id}))
  }

}

export default RootModel

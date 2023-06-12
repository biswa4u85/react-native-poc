export default class Category {
  public id: any
  public name: any
  public slug: any
  public parent: any
  public description: any
  public display: any
  public image: any
  public menu_order: any
  public count: any

  constructor(post) {
    const {
      id,
      name,
      slug,
      parent_id,
      description,
      image,
      position,
      enabled,
      count
    } = post

    try {
      this.id = id
      this.name = name
      this.slug = slug
      this.parent = parent_id == undefined ? 0 : parent_id
      this.description = description
      this.display = enabled
      this.image = {
        id: "",
        src: image,
        title: "",
        alt: ""
      }
      this.menu_order = position
      this.count = count

    } catch (e) {
      console.error(e.message)
    }
  }
}

export default class Review {

  public id: any
  public name: any
  public avatar: any
  public review: any
  public date_created: any
  public rating: any
  public parent: any
  public likes: any
  public isLiked: any

  constructor(post) {
    const {
      id,
      author,
      raw_message,
      createdAt,
      parent,
      likes,
      isLiked
    } = post

    try {
      this.id = id
      this.name = author.name
      this.avatar = author.avatar.cache
      this.review = raw_message
      this.date_created = createdAt
      this.rating = 0
      this.parent = parent
      this.likes = likes,
        this.isLiked = isLiked

    } catch (e) {
      console.error(e.message)
    }
  }
}

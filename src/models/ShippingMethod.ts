export default class ShippingMethod {
  public id: any
  public title: any
  public enabled: any
  public order: any
  public method_title: any
  public method_description: any
  public settings

  constructor(post) {
    const { id, name, enabled, price, position, description } = post;
    try {
      this.id = id;
      this.title = name;
      this.enabled = enabled;
      this.order = position;
      this.method_title = name;
      this.method_description = description;
      this.settings = {
        title: {
          value: name,
        },
        cost: {
          value: price,
        },
      };
    } catch (e) {
      console.error(e.message);
    }
  }
}

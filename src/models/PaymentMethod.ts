/** @format */

export default class PaymentMethod {

  public id: any
  public type: any
  public gateway: any
  public title: any
  public enabled: any
  public order: any
  public method_title: any
  public method_description: any
  public settings: any

  constructor(post) {
    const { id, name, enabled, gateway, position, description } = post;

    try {
      this.id = id;

      if (gateway == 'paypal-checkout') {
        this.type = 'paypal';
      } else if (gateway == '') {
        this.type = 'cod';
      } else if (gateway == 'liqpay') {
        this.type = 'stripe';
      }

      this.gateway = gateway;
      this.title = name;
      this.enabled = enabled;
      this.order = position;
      this.method_title = name;
      this.method_description = description;
      this.settings = {};
    } catch (e) {
      console.error(e.message);
    }
  }
}

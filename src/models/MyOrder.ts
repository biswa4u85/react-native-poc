export default class MyOrder {

    public id: any
    public number: any
    public date_created: any
    public status: any
    public custom_status_id: any
    public custom_status_message: any
    public shipping_address: any
    public closed: any
    public cancelled: any
    public delivered: any
    public paid: any
    public hold: any
    public draft: any
    public mobile: any
    public payment_method_title: any
    public total: any
    public line_items: any
    public currency: any
    public vender_id: any
    public vender_deatils: any
    public deliverboy_id: any
    public deliverboy_deatils: any

    constructor(post) {
        const {
            id,
            number,
            date_created,
            status,
            custom_status_id,
            custom_status_message,
            shipping_address,
            closed,
            cancelled,
            delivered,
            paid,
            hold,
            draft,
            mobile,
            payment_method,
            grand_total,
            items,
            vender_id,
            vender_deatils,
            deliverboy_id,
            deliverboy_deatils,

        } = post

        try {
            this.id = id
            this.number = number
            this.date_created = date_created
            this.status = status
            this.custom_status_id = custom_status_id
            this.custom_status_message = custom_status_message
            this.shipping_address = shipping_address
            this.closed = closed
            this.cancelled = cancelled
            this.delivered = delivered
            this.paid = paid
            this.hold = hold
            this.draft = draft
            this.mobile = mobile
            this.payment_method_title = payment_method
            this.total = grand_total
            this.vender_id = vender_id
            this.vender_deatils = vender_deatils
            this.deliverboy_id = deliverboy_id
            this.deliverboy_deatils = deliverboy_deatils

            if (items.length > 0) {
                items.forEach((item) => {
                    item.total = item.price_total
                })
            }
            this.line_items = items
            this.currency = "$"

        } catch (e) {
            console.error(e.message)
        }
    }
}

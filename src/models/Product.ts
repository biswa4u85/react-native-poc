export default class Product {
  public id: any
  public name: any
  public slug: any
  public permalink: any
  public date_created: any
  public date_created_gmt: any
  public date_modified: any
  public date_modified_gmt: any
  public type: any
  public status: any
  public featured: any
  public catalog_visibility: any
  public description: any
  public vender_id: any
  public services: any
  public servicesObj: any
  public category_id: any
  public short_description: any
  public sku: any
  public price: any
  public regular_price: any
  public sale_price: any
  public date_on_sale_from: any
  public date_on_sale_from_gmt: any
  public date_on_sale_to: any
  public date_on_sale_to_gmt: any
  public price_html: any
  public on_sale: any
  public purchasable: any
  public total_sales: any
  public virtual: any
  public downloadable: any
  public downloads: any
  public download_limit: any
  public download_expiry: any
  public external_url: any
  public button_text: any
  public tax_status: any
  public tax_class: any
  public manage_stock: any
  public stock_quantity: any
  public in_stock: any
  public backorders: any
  public backorders_allowed: any
  public backordered: any
  public sold_individually: any
  public weight: any
  public dimensions: any
  public shipping_required: any
  public shipping_taxable: any
  public shipping_class: any
  public shipping_class_id: any
  public reviews_allowed: any
  public average_rating: any
  public rating_count: any
  public related_ids: any
  public upsell_ids: any
  public cross_sell_ids: any
  public parent_id: any
  public purchase_note: any
  public categories: any
  public tags: any
  public image: any
  public images: any

  public attributes: any
  public default_attributes: any
  public options: any
  public variations: any

  public grouped_products: any
  public menu_order: any
  public meta_data: any


  constructor(post) {
    const {
      id,
      name,
      slug,
      date_created,
      date_updated,
      parent_id,
      description,
      vender_id,
      services,
      servicesObj,
      category_id,
      tags,
      attributes,
      enabled,
      sku,
      tax_class,
      related_product_ids,
      price,
      sale_price,
      regular_price,
      date_sale_from,
      date_sale_to,
      on_sale,
      stock_status,
      dimensions,
      image,
      images,
      weight,
      stock_quantity,
      stock_backorder,
      category_ids,
      options,
      variants,
      url
    } = post

    try {
      this.id = id
      this.name = name
      this.slug = slug
      this.permalink = ""
      this.date_created = date_created
      this.date_created_gmt = date_created
      this.date_modified = date_updated
      this.date_modified_gmt = date_updated
      this.type = ""
      this.status = enabled ? "publish" : ""
      this.featured = false
      this.catalog_visibility = ""
      this.description = description
      this.vender_id = vender_id
      this.services = services
      this.servicesObj = servicesObj
      this.category_id = category_id
      this.short_description = ""
      this.sku = sku
      this.price = price
      this.regular_price = regular_price
      this.sale_price = sale_price
      this.date_on_sale_from = date_sale_from
      this.date_on_sale_from_gmt = date_sale_from
      this.date_on_sale_to = date_sale_to
      this.date_on_sale_to_gmt = date_sale_to
      this.price_html = ""
      this.on_sale = on_sale
      this.purchasable = true
      this.total_sales = 0
      this.virtual = false
      this.downloadable = false
      this.downloads = []
      this.download_limit = -1
      this.download_expiry = -1
      this.external_url = ""
      this.button_text = ""
      this.tax_status = ""
      this.tax_class = tax_class
      this.manage_stock = ""
      this.stock_quantity = stock_quantity
      this.in_stock = stock_status == "available"
      this.backorders = ""
      this.backorders_allowed = stock_backorder
      this.backordered = false
      this.sold_individually = false
      this.weight = weight
      this.dimensions = dimensions
      this.shipping_required = true
      this.shipping_taxable = true
      this.shipping_class = ""
      this.shipping_class_id = 0
      this.reviews_allowed = true
      this.average_rating = ""
      this.rating_count = 0
      this.related_ids = related_product_ids
      this.upsell_ids = []
      this.cross_sell_ids = []
      this.parent_id = 0
      this.purchase_note = ""
      this.categories = category_ids
      this.tags = tags
      this.image = image

      if (images != undefined && images != null && images.length > 0) {
        images.forEach((item) => {
          item.src = item.url
        })
      }
      this.images = images

      if (attributes != undefined && attributes != null && attributes.length > 0) {
        attributes.forEach((item) => {
          item.position = 0
          item.options = [item.value]
          item.visible = true
        })
      }
      this.attributes = attributes
      this.default_attributes = []

      if (variants != undefined && variants != null && variants.length > 0) {
        variants.forEach((item) => {
          item.options.forEach((option) => {
            let { optionName, value } = this.getValueOption(options, option.option_id, option.value_id)
            option.value_name = value
            option.option_name = optionName
          })
        })
      }

      this.options = options
      this.variations = variants

      this.grouped_products = []
      this.menu_order = 0
      this.meta_data = []
      this.permalink = url

    } catch (e) {
      console.error(e.message)
    }
  }

  getValueOption = (options, optionId, valueId) => {
    var option = null
    var value = null
    var optionName = null
    options.forEach((item) => {
      if (item.id == optionId) {
        option = item
        return
      }
    })
    if (option) {
      option.values.forEach((item) => {
        if (item.id == valueId) {
          value = item.name
          optionName = option.name
          return
        }
      })
    }

    return { optionName, value }
  }
}

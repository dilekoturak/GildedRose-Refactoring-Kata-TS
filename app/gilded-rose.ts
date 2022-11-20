import { SpecialItems } from './special-items'
import { Item } from './item'
import { decreaseSellIn, 
        canBeUpdated, 
        updateAgedBrie,
        updateConjured,
        updateBackstage,
        updateDefault } from './update-items'

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      if (item.name != SpecialItems.Sulfuras) {
        decreaseSellIn(item)
      }

      if (!canBeUpdated(item)) {
        return
      }

      switch (item.name) {
        case SpecialItems.Aged:          
          updateAgedBrie(item)
          break
        case SpecialItems.Sulfuras:  
          break
        case SpecialItems.Conjured:
          updateConjured(item)
          break
        case SpecialItems.Backstage:
          updateBackstage(item)
          break
        default:
          updateDefault(item)
          break
      }
    })

    return this.items;
  }
}

/**
 * 
 * @param item 
 * @description Decrease sellIn date of item
 */
export const decreaseSellIn = (item) => item.sellIn--

/**
 * 
 * @param item 
 * @description Check if item quality is eligible to update
 */
export const canBeUpdated = (item) => item.quality >= 0 && item.quality <= 50

/**
 * 
 * @param item
 * @description Update Aged Brie
 */
export const updateAgedBrie = (item) => {
    if(sellInDatePassed(item)) {
        increaseQuality(item, 2)
    } else {
        increaseQuality(item, 1)
    }
}

/**
 * 
 * @param item
 * @description Update Conjured
 */
export const updateConjured = (item) => {
    if(sellInDatePassed(item)) {
        decreaseQuality(item, 4)
    } else {
        decreaseQuality(item, 2)
    }
}

/**
 * 
 * @param item
 * @description Update Backstage
 */
export const updateBackstage = (item) => {
    if (item.sellIn < 0) {
        item.quality = 0
    } else if (item.sellIn < 5) {
        increaseQuality(item, 3)
    } else if (item.sellIn < 10) {
        increaseQuality(item, 2)
    } else {
        increaseQuality(item, 1)
    }
}

/**
 * 
 * @param item
 * @description Update Default
 */
export const updateDefault = (item) => {
    if(sellInDatePassed(item)) {
        decreaseQuality(item, 2)
    } else {
        decreaseQuality(item, 1)
    }
}

/**
 * 
 * @param item
 * @param increaseBy
 * @description Increase quality of item, if the result of last increase over max value then assign 50
 */
 const increaseQuality = (item, increaseBy) => {
    item.quality = item.quality + increaseBy
    item.quality = item.quality > 50 ? item.quality = 50 : item.quality
}

/**
 * 
 * @param item 
 * @param decreaseBy 
 * @description Decrease quality of item, if the result of last decrease below min value then assign 0
 */
const decreaseQuality = (item, decreaseBy) => {
    item.quality = item.quality - decreaseBy
    item.quality = item.quality < 0 ? item.quality = 0 : item.quality
}

/**
 * 
 * @param item 
 * @returns boolean
 * @description Check if sellIn date of item has passed
 */
const sellInDatePassed = (item): boolean => item.sellIn < 0
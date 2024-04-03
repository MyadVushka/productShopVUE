import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  const beginArr = ref([])
  const generalAmount = ref(0)
  const filteredArray = ref([])
  const setBeginArr = async () => {
    try {
      const infoJSON = await fetch('https://ea53d30cbb123a02.mokky.dev/items')
      beginArr.value = await infoJSON.json()
    } catch (e) {
      console.log(e)
    }
  }

  setBeginArr()

  const getArr = computed(() => beginArr.value)
  const getFavouriteArr = computed(() => beginArr.value.filter((el) => el.isFavourite))
  const getDiscountedArr = computed(() => beginArr.value.filter((el) => el.hasDiscount))
  const getAddedProducts = computed(() => beginArr.value.filter((el) => el.isAdded))
  const getChosenProducts = computed(() => beginArr.value.filter((el) => el.chosenOnCart))

  const getGeneralAmount = computed(() => generalAmount.value)

  const getFilteredArray = computed(() => filteredArray.value)

  const setFilteredArray = (title) => {
    for (let i = 0; i < beginArr.value.length; i++) {
      if (beginArr.value[i].title.toLowerCase().includes(title.toLowerCase()))  filteredArray.value.push(beginArr.value[i]);
    }
  }

  const setFilteredArrayClear = () => filteredArray.value = [];

  const setGeneralAmount = (amount) => {
    generalAmount.value = amount
  }

  const setAddedProducts = (id) => {
    beginArr.value[id].isAdded = !beginArr.value[id].isAdded
    beginArr.value[id].currentAmount = beginArr.value[id].isAdded ? 1 : 0
  }

  const setFavouriteToggle = (id) => {
    console.log(beginArr.value[id])
    beginArr.value[id].isFavourite = !beginArr.value[id].isFavourite
  }

  const setChosenToggle = (id) => {
    beginArr.value[id].chosenOnCart = !beginArr.value[id].chosenOnCart
  }

  return {
    beginArr,
    getArr,
    getFavouriteArr,
    getDiscountedArr,
    getAddedProducts,
    getChosenProducts,
    getGeneralAmount,
    getFilteredArray,
    setFavouriteToggle,
    setAddedProducts,
    setChosenToggle,
    setGeneralAmount,
    setFilteredArray,
    setFilteredArrayClear,
  }
})

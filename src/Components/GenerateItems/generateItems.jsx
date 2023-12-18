import images from '../Images'
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
const generateItems = (amount) => {
  const itemArray = []
  const colorArray = [
    'синий',
    'красный',
    'зелёный',
    'фиолетовый',
    'жёлтый',
    'чёрный',
    'белый',
    'серый',
  ]
  const nameArray = [
    'футболка',
    'шорты',
    'юбка',
    'платье',
    'туфли',
    'шапка',
    'костюм',
  ]
  for (let i = 0; i < amount; i++) {
    itemArray[i] = {
      id: i,
      name: nameArray[getRandomInt(7)],
      color: colorArray[getRandomInt(8)],
      price: getRandomInt(9990) + 10,
      rating: getRandomInt(100) + 1,
      image: images[getRandomInt(8)],
    }
  }
  return itemArray
}
export default generateItems

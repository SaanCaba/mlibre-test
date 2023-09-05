import { API_ITEM_URL } from '@/constants'
import { Item } from '@/models/items'

export async function getHdPicture(id: string) {
  const responseItemProm = await fetch(`${API_ITEM_URL}${id}`).then(
    (res) => res.json() as unknown as Item
  )
  const [foto] = responseItemProm.pictures.map((el) => {
    return el
  })
  return foto.url
}

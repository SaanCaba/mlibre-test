import { getHdPicture } from '@/utils/getHdPicture'
import { useState, useEffect } from 'react'

function usePicture(id: string) {
  const [loading, setLoading] = useState(true)
  const [hdPicture, setHdPicture] = useState('')
  useEffect(() => {
    ;(async () => {
      const picture = await getHdPicture(id)
      setHdPicture(picture)
      setLoading(false)
    })()
  }, [])
  return { loading, hdPicture }
}

export default usePicture

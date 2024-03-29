import { useState, useEffect } from 'react'

export function useFetchJson(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      setLoading(false)
    }

    fetchUrl()
  }, [url])

  return [data, loading]
}

import React, { useState, useEffect, useCallback } from 'react'

const fetchDataFromAPI = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Данные загружены!")
    }, 1000)
  })
}

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const result = await fetchDataFromAPI()
      setData(result)
    } catch (error) {
      console.error("Ошибка при загрузке данных", error)
    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="iphone-style-container">
      <div className="iphone-header">iPhone</div>
      <div className="iphone-screen">
        {loading && <p>Загрузка данных...</p>}
        {data && <p>{data}</p>}
      </div>
      <div className="iphone-home-button"></div>
    </div>
  );
}

export default App
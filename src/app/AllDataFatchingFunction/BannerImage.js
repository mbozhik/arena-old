const {default: ApiUrl} = require('./ApiUrl')
export default function BannerImage() {
  return fetch(ApiUrl.BannerApi, {cache: 'no-store'})
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch data')
      return res.json()
    })
    .then((result) => {
      console.log(result?.data?.[0]?.image_link, 'Banner Image Data')
      return result?.data?.[0]?.image_link || null
    })
    .catch((error) => {
      console.error('An error occurred:', error.message)
      return null
    })
}

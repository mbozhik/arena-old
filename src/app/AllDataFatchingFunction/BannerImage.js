const { default: ApiUrl } = require("./ApiUrl");
 export default async function BannerImage() {
    try {
      const res = await fetch(ApiUrl.BannerApi);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
     const result= await res.json()
      return result?.data[0].image_link
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }

const { default: ApiUrl } = require("./ApiUrl");
 export default async function NavberData() {
    try {
      const res = await fetch(ApiUrl.Topbar);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
     const result= await res.json()
      return result?.data.reverse()
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }

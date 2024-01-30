'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
export default async function Delete() {
    const cookieStore = cookies();
    const uid = cookieStore.get("uid");
    const validUid=uid?.value;
    if(validUid){
        cookies().delete('uid')
        cookies().delete('admission')
        cookies().delete('day_active')
        cookies().delete('create_at')
        cookies().delete('email')
        revalidatePath('/login') // Update cached posts
        redirect('/login') // Navigate to the new post page
   
    }else{
        revalidatePath('/login') // Update cached posts
        redirect('/login') // Navigate to the new post page
    }
}
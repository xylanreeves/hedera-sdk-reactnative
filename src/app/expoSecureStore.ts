import * as SecureStore from 'expo-secure-store'

export async function saveInSecureStore(key: string, value : any) {
  await SecureStore.setItemAsync(key, value)
}


//get user's testHederaClient
export async function getValueFromSecureStore(key: string) {
  let result = await SecureStore.getItemAsync(key)
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result)
    return result
  } else {
    alert('No values stored under that key.')
    return false
  }
}

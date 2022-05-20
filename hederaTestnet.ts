import {
  AccountCreateTransaction,
  AccountId,
  Client,
  Hbar,
  PrivateKey,
  PublicKey,
} from '@hashgraph/sdk'
import { MY_ACCOUNT_ID, MY_PRIVATE_KEY } from '@env'

export const getHederaTestnetClient = async (myAccountId: string | AccountId, myPrivateKey: string | PrivateKey) => {
//   //Grab your Hedera testnet account ID and private key from your .env file
//   const myAccountId = MY_ACCOUNT_ID
//   const myPrivateKey = MY_PRIVATE_KEY

  // Create our connection to the Hedera network
  // The Hedera JS SDK makes this really easy!
  const client = Client.forTestnet()
  client.setOperator(myAccountId, myPrivateKey)

  return client
}



export type NewAccountProp {
    newAccountId: AccountId | null;
    newAccountPrivateKey: PrivateKey;
    newAccountPublicKey: PublicKey

}

//Creates a new hedera account
//Returns the new AccountId, Private Key, PUblic Key
export const createNewTestnetAccount = async (myAccountId: string | AccountId, myPrivateKey: string | PrivateKey) => {


  const _client = await getHederaTestnetClient(myAccountId, myPrivateKey)

  //Create new keys
  const newAccountPrivateKey = await PrivateKey.generateED25519()
  const newAccountPublicKey = newAccountPrivateKey.publicKey

  //Create a new account with 1,000 tinybar starting balance
  const newAccount = await new AccountCreateTransaction()
    .setKey(newAccountPublicKey)
    .setInitialBalance(Hbar.fromTinybars(1000))
    .execute(_client)

  // Get the new account ID
  const getReceipt = await newAccount.getReceipt(_client)
  const newAccountId = getReceipt.accountId

  //Log the account ID
  console.log('The new account ID is: ' + newAccountId)

  return {newAccountId, newAccountPrivateKey, newAccountPublicKey}
}


//Get Hedera Account balance
export const getAccountBalance = (accountid: AccountId | string, publicKey: PublicKey | string) =>{

  


}
import {useState, useEffect} from "react";

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    //selectedContactId is collecting the data from the specific id
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`

            )
            const resolve = await response.json()
            setContact(resolve)
            console.log(contact)
          } catch (error) {
            console.log(error)
          }
        }
        fetchContact()
      }, [])
      if (contact){
        const {email, name } = contact;
      return <div>{name}{email}</div>} 
}

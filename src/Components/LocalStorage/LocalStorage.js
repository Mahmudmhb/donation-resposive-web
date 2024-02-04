const getDonateID = () =>{
    const savedDonateId = localStorage.getItem('donate-id')
    if(savedDonateId){
        return JSON.parse(savedDonateId)
    }
    return []
}
const setDontateId = (id) => {
    const addedDonateID = getDonateID();
    const exists = addedDonateID.find(donate => donate === id);
    if(!exists){
        addedDonateID.push(id)
        localStorage.setItem('donate-id' , JSON.stringify(addedDonateID))
    }
    

    }

export  {getDonateID ,setDontateId}
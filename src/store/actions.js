import db from '@/fb'

export default{
    Add_Event( {commit}, event ){
        commit("Add_Event", event)
    },
    Load_Events( {commit}, loadedEvents  ){
        db.collection('newEvent').onSnapshot( res => {
            const changes = res.docChanges(); 

            changes.forEach(change => {
                if(change.type === 'added'){
                    loadedEvents = {
                        ...change.doc.data(), 
                        id: change.doc.id
                    }  

                    commit("LoadEvents", loadedEvents)
                }
            })
        });
    },
    Update_Events( {commit}, eventId  ){ 
        db.collection("newEvent").doc(eventId).onSnapshot(function(doc) {
            console.log("Current data: ", doc.data());
        });
    }
}
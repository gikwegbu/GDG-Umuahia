export default{
    Add_Event(state, {id, imgUrl}){
        //This searches for the particular doc with the id, then replaces the empty image url with the firebase storage download url 
        let docs = state.newEvent.find( doc => doc.id === id ); 
        docs.eventImage = imgUrl;
    }, 
    LoadEvents(state, loadedEvents){ 
        state.newEvent.unshift(loadedEvents)  
    }
}
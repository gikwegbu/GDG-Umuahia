export default{
    Add_Event(state, event){
        state.newEvent.unshift(event)
    }, 
    LoadEvents(state, loadedEvents){ 
        state.newEvent.unshift(loadedEvents)  
    }
}
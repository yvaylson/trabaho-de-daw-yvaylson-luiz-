import Api from "./api";

const Colection = {
    getAll( callback ){
        return Api.get('/colecoes')
        .then( response => callback( response.data ) );
    },

    getByid( id, callback ){
        return Api.get(`/colecoes/${id}`)
        .then( response => callback( response.data ) );
    },

    update( id, data ){
        return Api.put(`/colecoes/${id}`, data );
    },

    create( data ){
        return Api.post("/colecoes", data );
    },

    save( data ){
        if( data.colecaoId )
            return this.update( data.colecaoId, data );
        return this.create( data );
    }
}
export default Colection;
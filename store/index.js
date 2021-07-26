import auth from '../firebase'

export const state = () => ({
  user:{
    email:null,
    idToken:null,
  }
})

export const mutations = {
  saveUserLocaly(state, cred){
    state.user.email = cred.email
    state.user.idToken = cred.getIdToken(true)
  }
}

export const actions = {
  connection(context, login){
    auth.auth.signInWithEmailAndPassword(login.email, login.password)
      .then(cred => {
        const token = cred.user.getIdToken(true);
        console.log(cred.user.email, token.D);
        
      })
      .catch(error => console.log(error))
  }
}

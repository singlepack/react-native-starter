const User = () => {

     return {
          auth: false,
          data: {
               name: "test"
          },
          logout(){
               this.auth = false;
          },
          login(){
               this.auth = true;
          }
     }

};

export default User;
/**
 * install jsonwebtoken 
 * jwt.sign(payload,scret,{expressIn:})
 * token cliient 
 * 
 * 
 * 
 */

/**
 * how to store token in the client side 
 * 1.memory  --> ok type
 * 2.localStorage --> ok type (XSS)
 * 3.cookies : http only and 
 * 
 */

/**
 * 
 * 1.set cookies with hhtp only.for devlopment secuure: false, 
 * 2.cors
 * 3.app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
3.client site axios setting 
in axios set withCredentials:true

 */

/**
 * 1.to send cokkies from the client make sure you added withcredientials true for the  api call useing axios
 * 2 . use cookie parser as middlewere 
 */


/////

/** screact genarate 
 * node 
 * require ('cripto').ramdomBytes(64)
 * require ('cripto').ramdomBytes(64).tostring('hex')
 * 
 * 
   */


import jsonwebtoken from 'jsonwebtoken'

export function parseAuthHeader(authHeader:string){
    const token = authHeader.split(' ')[1];
    const decodeToken = jsonwebtoken.decode(token)
    return decodeToken
}
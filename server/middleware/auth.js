import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    //check if token is valid
    try {
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500

        let decodedData

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET_STRING)

            req.userId = decodedData?.id
        } else {
            //google auth
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }

        next()
    } catch (error) {
        console.log('AUTHENTICATION FAILED', error)

    }
}


export default auth
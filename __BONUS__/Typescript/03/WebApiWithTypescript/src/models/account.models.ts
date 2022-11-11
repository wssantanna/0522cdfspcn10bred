
interface Credential {
    username: string,
    password: string
}

interface Jwt {
    token: string
}

export { Credential, Jwt };
const typeDefs = `
type User {
_id: ID
username: String
email: String
bookCount: Int
savedBooks: [Book]
}

type Book {
bookId: ID
authors: [String]
description: String
title: String
image: String
url: String
}

type Auth {
token: ID
user: User
}

input Info{
bookId: String
authors: [String]
description: String
title: String
image: String
url: String
}

type Query {
me: User
}

type Mutation {
login(email: String, password: String): Auth
addUser(username: String, email: String, password: String): Auth
saveBook(bookData: Info): User
removeBook(bookId: ID): User
}
`;

module.exports = typeDefs;

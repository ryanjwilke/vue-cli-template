const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_KEY,
})

export function handler(event, context, callback) {
  client
    .query(q.Paginate(q.Match(q.Index('all_customers'))))
    .then((response) => {
      client
        .query(
          response.data.map((ref) => {
            return q.Get(ref)
          })
        )
        .then((customers) => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(customers),
          })
        })
    })
    .catch((error) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error.toString()),
      })
    })
}

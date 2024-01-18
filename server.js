
import express from 'express'
import bodyParser from 'body-parser'
// import { SearchServiceClient } from '@google-cloud/discoveryengine';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json())
app.use(express.static('public'));
/*
The extended option allows to choose between parsing the URL-encoded data
with the querystring library (when false) or the qs library (when true).
*/
app.use(bodyParser.urlencoded({ extended: true }));

// credentials
// const projectId = process.env.VERTEX_PROJECT_ID;
// const location = 'global';              // Options: 'global', 'us', 'eu'
// const collectionId = 'default_collection';     // Options: 'default_collection'
// const dataStoreId = process.env.VERTEX_DATASTORE_ID;
// const servingConfigId = 'default_config';      // Options: 'default_config'

// const apiEndpoint =
// location === 'global'
//     ? 'discoveryengine.googleapis.com'
//     : `${location}-discoveryengine.googleapis.com`;

// Instantiates a client
// const client = new SearchServiceClient({ apiEndpoint: apiEndpoint });

// const searchFn = async (req, res, searchQuery) => {
//     // console.log('line 38 here', searchQuery)

//     const name = client.projectLocationCollectionDataStoreServingConfigPath(
//         projectId,
//         location,
//         collectionId,
//         dataStoreId,
//         servingConfigId
//     );

//     const request = {
//         pageSize: 10,
//         query: searchQuery,
//         servingConfig: name,
//     };

//     const IResponseParams = {
//         ISearchResult: 0,
//         ISearchRequest: 1,
//         ISearchResponse: 2,
//     };

//     // Perform search request
//     const response = await client.search(request, {
//         // Warning: Should always disable autoPaginate to avoid iterate through all pages.
//         autoPaginate: false,
//     });

//     const results = response[IResponseParams.ISearchResponse].results;

//     const searchResults = new Array()
//     for (const result of results) {
//         // console.log('in here ===>', result)
//         searchResults.push(result);
//     }
//     res.status(200).json(searchResults)
//     // res.send({ success: true, data: [searchResults, req.body] });
// }

// Catches requests made to localhost:3000/
app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname,'./public/index.html'));
    } catch (e) {
        res.status(e.status).json({ msg: e.status })
    }
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

// app.post('/search', (req, res) => {
//     //request parameter - information about the request coming in
//     //response parameter - response object that we can use to send a response
//     const { search } = req.body
//     // console.log('what is this?', search)
//     searchFn(req, res, search)
// })

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`)
})

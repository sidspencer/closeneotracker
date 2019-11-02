const https = require('https');

class NasaNeoApi {
    static findNeos(startDate, endDate) {
        let p = new Promise((resolve, reject) => {
            let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NasaNeoApi.apiKey}`;
            
            let rawResp = '';
            https.get(url, (res) => {
                res.on('data', (dataChunk) => {
                    rawResp += dataChunk;
                });
                
                res.on('end', () => {
                    resolve(JSON.parse(rawResp));
                });
            }).on('error', (e) => {
                reject(e);
            });
        });

        return p;
    };
}
NasaNeoApi.apiKey = 'bnJbjDk8V7iYgG25zzRZdb7Pzy5xtkZaxNfrbhnS';

module.exports = NasaNeoApi;
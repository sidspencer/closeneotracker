class NeoService {
    static findCloseNeos(neosByDate, distance) {
        let closeNeos = [];

        for (let d in neosByDate) {
            neosByDate[d].forEach((neo) => {
                if (neo.close_approach_data[0].miss_distance.miles < distance) {
                    closeNeos.push(neo.name);
                }
            });
        }

        return closeNeos;
    }
}

module.exports = NeoService;
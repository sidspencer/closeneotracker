class NeoService {
    static findCloseNeos(neosByDate, distance) {
        let closeNeos = [];

        for (let dateKey in neosByDate) {
            neosByDate[dateKey].forEach((neo) => {
                if (neo.close_approach_data[0].miss_distance.miles <= distance) {
                    if (closeNeos.indexOf(neo.name) === -1) {
                        closeNeos.push(neo.name);
                    }
                }
            });
        }

        return closeNeos;
    }
}

module.exports = NeoService;
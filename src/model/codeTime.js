class CodeTime {

    /**
     * 
     * @param {number} timeTotal 
     * @param {number} timeCoding
     * @param {number} timeBrowsing
     * 
     */

    constructor(timeTotal, timeCoding, timeBrowsing) {
        this.timeTotal = timeTotal;
        this.timeCoding = timeCoding;
        this.timeBrowsing = timeBrowsing;
    }

    /**
     * 
     * @param {number} timeTotal 
     * @param {number} timeCoding
     * @param {number} timeBrowsing
     * 
     * @returns {CodeTime} 
     */

    static create(timeTotal, timeCoding, timeBrowsing) {
        return new CodeTime(timeTotal, timeCoding, timeBrowsing);
    }
}

export default CodeTime;
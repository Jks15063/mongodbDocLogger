module.exports = function(logModel) {
    var root   = this;
    var logger = {};

    logger.logRemovedDocs = function(docs, type) {
        var docList = docs.map(function(doc) {
            var docObj = doc.toObject();
            delete docObj._id;
            delete docObj.__v;
            docObj.docType = type;
            return docObj;
        })

        logModel.create(docList, function(err) {
            if(err) {
                return err;
            } else {
                return;
            }
        });
    }
    return logger
}

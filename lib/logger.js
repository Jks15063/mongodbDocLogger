module.exports = function(logModel) {
    var root   = this;
    var logger = {};

    logger.logRemovedDocs = function(docs, type, scriptName) {
        var docList = docs.map(function(doc) {
            var docObj        = doc.toObject();
            docObj.docId      = docObj._id;
            docObj.docType    = type;
            docObj.scriptName = scriptName || null;
            delete docObj._id;
            delete docObj.__v;
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

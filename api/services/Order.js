var schema = new Schema({
    orderName:{
        type: String,
        required: true
    },
    clientId:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
    },
    orderReceivedTime:{
        type: Date,
        default: Date.now()
    },
    amount:{
        type: Number
    },
    orderStatus:{
        type: String,
        enum:['unAssigned','assigned','drafted','reAssigned','completed'],
        default: 'pending'
    },
    drafterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    qcId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    clientFilesId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientFiles'
    },
    completedFilesId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompletedFiles'
    },
    orderAssignedTimestamp:{
        type: Date,

    },
    orderCompletedTime:{
        type: Date,
    }

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Order', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
};
module.exports = _.assign(module.exports, exports, model);
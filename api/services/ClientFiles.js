var schema = new Schema({
     orderId:{
        type: String,
        required: true
    },
    ClientFiles:[
        {
            fileName:{
                type: String,
                required: true
            }
        },
        {
            fileUrl:{
                type: String,
            }
        },
        {
            fileType:{
                type: String
            }
        },
        {
            fileStatus:{
                type: String,
                required: true,
                enum: ['uploaded', 'accepted', 'rejected'],
                default: 'uploaded'
            }
        }
    ]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ClientFiles', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);